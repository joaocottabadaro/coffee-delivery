import * as zod from 'zod'
import { OrderContext } from '../../contexts/OrderContextProvider'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AddRemoveCoffeeContainer,
  CheckoutCard,
  CheckoutContainer,
  CheckoutInfo,
  FormContainer,
  SelectedCoffee,
} from './styles'
import { Trash, Plus, Minus } from 'phosphor-react'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { AddressForm } from './components/AddressForm'

type FormData = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  tipoPagamento: 'crédito' | 'débito' | 'dinheiro' | ''
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o numero'),
  complemento: zod.string().min(1, 'Informe o complemento'),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a sua cidade'),
  uf: zod.string().min(1, 'Informe o uf').max(2),
  tipoPagamento: zod.enum(['crédito', 'débito', 'dinheiro', '']),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { createOrder } = useContext(OrderContext)
  const newAddressForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      tipoPagamento: '',
    },
  })

  const { handleSubmit } = newAddressForm
  const navigate = useNavigate()

  function handleOrderConfirmation(data: FormData) {
    // Verifique se há erros antes de prosseguir

    createOrder(data)
    navigate('/OrderDetails')
  }

  const { coffees, updateCoffeeQuantity } = useContext(OrderContext)

  const entrega = 9.9
  const totalAmountItems = coffees.reduce((total, coffee) => {
    const itemTotal = coffee.quantity * coffee.price
    return total + itemTotal
  }, 0)

  const totalAmountCheckout = totalAmountItems + entrega
  return (
    <>
      <form onSubmit={handleSubmit(handleOrderConfirmation)}>
        <FormContainer>
          <FormProvider {...newAddressForm}>
            <AddressForm />
          </FormProvider>

          <div>
            <h2>Cafés selecionados</h2>
            <CheckoutCard>
              {coffees.map((coffee) => {
                return (
                  <SelectedCoffee key={coffee.id}>
                    <img
                      src={`/coffees/${coffee.photo}`}
                      height={64}
                      alt="adicionar café"
                    />
                    <div>
                      <p>{coffee.name}</p>
                      <AddRemoveCoffeeContainer>
                        <div>
                          <Minus
                            size={16}
                            onClick={() =>
                              updateCoffeeQuantity(coffee, 'DECREASE')
                            }
                          />
                          <span>{coffee.quantity}</span>
                          <Plus
                            size={16}
                            onClick={() =>
                              updateCoffeeQuantity(coffee, 'INCREASE')
                            }
                          />
                        </div>
                        <div
                          onClick={() => updateCoffeeQuantity(coffee, 'REMOVE')}
                        >
                          <Trash size={16} /> <p>Remover</p>
                        </div>
                      </AddRemoveCoffeeContainer>
                    </div>

                    <strong>
                      <span> R$</span> {coffee.price.toFixed(2)}
                    </strong>
                  </SelectedCoffee>
                )
              })}
              <CheckoutContainer>
                <CheckoutInfo>
                  <p>Total de itens</p>

                  <p>{totalAmountItems.toFixed(2)}</p>
                </CheckoutInfo>
                <CheckoutInfo>
                  <p>Entrega</p> <p>R$ {entrega.toFixed(2)}</p>
                </CheckoutInfo>
                <CheckoutInfo>
                  <strong>Total</strong>

                  <strong>R$ {totalAmountCheckout.toFixed(2)}</strong>
                </CheckoutInfo>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => console.log('Botão Clicado')}
                >
                  Confirmar Pedido
                </Button>
              </CheckoutContainer>
            </CheckoutCard>
          </div>
        </FormContainer>
      </form>
    </>
  )
}
