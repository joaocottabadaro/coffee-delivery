import {
  AddRemoveCoffeeContainer,
  BaseCard,
  BaseInput,
  CardHeader,
  CheckoutCard,
  CheckoutContainer,
  CheckoutInfo,
  FormContainer,
  FormGrid,
  InputPaymentContainer,
  PaymentContainer,
  SelectedCoffee,
} from './styles'
import location from '../../assets/location.svg'
import { Button } from '../../components/Button'
import { Bank, Money, CreditCard, Trash, Minus, Plus } from 'phosphor-react'

import expressoTradicional from '../../assets/expresso-tradicional.png'
import { OrderContext } from '../../contexts/OrderContextProvider'
import { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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

export function Checkout() {
  const { register, handleSubmit, watch } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  const { coffees, updateCoffeeQuantity } = useContext(OrderContext)

  const watchPagamento = watch('tipoPagamento')

  const entrega = 9.9
  const totalAmountItems = coffees.reduce((total, coffee) => {
    const itemTotal = coffee.quantity * coffee.price
    return total + itemTotal
  }, 0)

  const totalAmountCheckout = totalAmountItems + entrega
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <div>
            <h2>Complete seu pedido</h2>
            <BaseCard>
              <CardHeader>
                <img src={location} alt="localização" />
                <div>
                  <h3>Endereço de entrega</h3>
                  <h4>Informe o endereço onde deseja receber seu pedido</h4>
                </div>
              </CardHeader>
              <FormGrid>
                <BaseInput
                  type="text"
                  id="cep"
                  {...register('cep')}
                  placeholder="CEP"
                />
                <BaseInput
                  type="text"
                  id="rua"
                  {...register('rua')}
                  placeholder="Rua"
                />
                <BaseInput
                  type="number"
                  id="numero"
                  {...register('numero')}
                  placeholder="Número"
                />
                <BaseInput
                  type="text"
                  id="complemento"
                  {...register('complemento')}
                  placeholder="Complemento"
                />

                <BaseInput
                  type="text"
                  id="bairro"
                  {...register('bairro')}
                  placeholder="Bairro"
                />
                <BaseInput
                  type="text"
                  {...register('cidade')}
                  placeholder="Cidade"
                />
                <BaseInput
                  type="text"
                  id="uf"
                  {...register('uf')}
                  placeholder="UF"
                />
              </FormGrid>
            </BaseCard>
            <BaseCard>
              <CardHeader>
                <img src={location} alt="localização" />
                <div>
                  <h3>Pagamento</h3>
                  <h4>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </h4>
                </div>
              </CardHeader>
              <PaymentContainer>
                <InputPaymentContainer
                  $isSelected={watchPagamento === 'crédito'}
                >
                  <input
                    type="radio"
                    id="crédito"
                    value="crédito"
                    {...register('tipoPagamento')}
                  />

                  <label htmlFor="crédito">
                    {' '}
                    <CreditCard size={16} /> Cartão de crédito
                  </label>
                </InputPaymentContainer>

                <InputPaymentContainer
                  $isSelected={watchPagamento === 'débito'}
                >
                  <input
                    type="radio"
                    id="débito"
                    value="débito"
                    {...register('tipoPagamento')}
                  />

                  <label htmlFor="débito">
                    {' '}
                    <Bank size={16} /> Cartão de débito
                  </label>
                </InputPaymentContainer>

                <InputPaymentContainer
                  $isSelected={watchPagamento === 'dinheiro'}
                >
                  <input
                    type="radio"
                    id="dinheiro"
                    value="dinheiro"
                    {...register('tipoPagamento')}
                  />

                  <label htmlFor="dinheiro">
                    {' '}
                    <Money size={16} /> Dinheiro
                  </label>
                </InputPaymentContainer>
              </PaymentContainer>
            </BaseCard>
          </div>

          <div>
            <h2>Cafés selecionados</h2>
            <CheckoutCard>
              {coffees.map((coffee) => {
                return (
                  <SelectedCoffee key={coffee.id}>
                    <img
                      src={expressoTradicional}
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

                <Button variant="primary" type="submit">
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
