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

enum PaymentTypes {
  crédito = 'crédito',
  débito = 'débito',
  dinheiro = 'dinheiro',
}

type FormData = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  tipoPagamento: PaymentTypes
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o numero'),
  complemento: zod.string().min(1, 'Informe o complemento'),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a sua cidade'),
  uf: zod.string().min(1, 'Informe o UF').max(2),
  tipoPagamento: zod.nativeEnum(PaymentTypes, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
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
      tipoPagamento: undefined,
    },
  })

  const { handleSubmit } = newAddressForm
  const navigate = useNavigate()
  const { coffees, updateCoffeeQuantity, removeAllCoffees } =
    useContext(OrderContext)

  function handleOrderConfirmation(data: FormData) {
    // Verifique se há erros antes de prosseguir
    removeAllCoffees()
    navigate('/OrderDetails', { state: data })
  }

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
              {coffees.length === 0 && (
                <h3>Por favor, selecione um item antes de continuar</h3>
              )}
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
                  disabled={coffees.length === 0}
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
