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
  PaymentContainer,
  SelectedCoffee,
} from './styles'
import location from '../../assets/location.svg'
import { Button } from '../../components/Button'
import { Bank, Money, CreditCard, Trash, Minus, Plus } from 'phosphor-react'

import expressoTradicional from '../../assets/expresso-tradicional.png'
import { OrderContext } from '../../contexts/OrderContextProvider'
import { useContext } from 'react'

export function Checkout() {
  const { coffees, updateCoffeeQuantity } = useContext(OrderContext)

  return (
    <div>
      <div>
        <div>
          <form>
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
                      name="cep"
                      placeholder="CEP"
                    />
                    <BaseInput
                      type="text"
                      id="rua"
                      name="rua"
                      placeholder="Rua"
                    />
                    <BaseInput
                      type="text"
                      id="numero"
                      name="numero"
                      placeholder="Número"
                    />
                    <BaseInput
                      type="text"
                      id="complemento"
                      name="complemento"
                      placeholder="Complemento"
                    />

                    <BaseInput
                      type="text"
                      id="bairro"
                      name="bairro"
                      placeholder="Bairro"
                    />
                    <BaseInput
                      type="text"
                      id="cidade"
                      name="cidade"
                      placeholder="Cidade"
                    />
                    <BaseInput type="text" id="uf" name="fu" placeholder="UF" />
                  </FormGrid>
                </BaseCard>
                <BaseCard>
                  <CardHeader>
                    <img src={location} alt="localização" />
                    <div>
                      <h3>Pagamento</h3>
                      <h4>
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                      </h4>
                    </div>
                  </CardHeader>
                  <PaymentContainer>
                    <Button>
                      <CreditCard size={32} />
                      Cartão de crédito
                    </Button>
                    <Button>
                      <Bank size={32} />
                      Cartão de débito
                    </Button>
                    <Button>
                      {' '}
                      <Money size={32} />
                      Dinheiro
                    </Button>
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
                            <div>
                              <Trash size={16} /> <p>Remover</p>
                            </div>
                          </AddRemoveCoffeeContainer>
                        </div>

                        <strong>
                          <span> R$</span> {coffee.price}
                        </strong>
                      </SelectedCoffee>
                    )
                  })}
                  <CheckoutContainer>
                    <CheckoutInfo>
                      <p>Total de itens</p>

                      <p>R$ 9,90</p>
                    </CheckoutInfo>
                    <CheckoutInfo>
                      <p>Entrega</p> <p>R$ 9,90</p>
                    </CheckoutInfo>
                    <CheckoutInfo>
                      <strong>Total</strong>

                      <strong>R$ 9,90</strong>
                    </CheckoutInfo>

                    <Button variant="primary">Confirmar Pedido</Button>
                  </CheckoutContainer>
                </CheckoutCard>
              </div>
            </FormContainer>
          </form>
        </div>
      </div>
    </div>
  )
}
