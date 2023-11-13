import delivery from '../../assets/delivery.svg'
import location from '../../assets/locationDelivery.svg'
import money from '../../assets/money.svg'

import clock from '../../assets/clock.svg'
import {
  DetailsContainer,
  ItemsContainer,
  OrderDescriptionContainer,
  OrderDetailsWrapper,
  OrderHeader,
  OrderItem,
} from './styles'

import { useLocation } from 'react-router-dom'

export function OrderDetails() {
  const { state } = useLocation()
  return (
    <OrderDetailsWrapper>
      <OrderHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderHeader>
      <DetailsContainer>
        <ItemsContainer>
          <OrderItem>
            <img src={location} alt="localização" />
            <OrderDescriptionContainer>
              <p>
                Entrega em <strong>{state.rua}</strong>,
                <strong> {state.numero}</strong>{' '}
                <p>
                  {state.bairro} - {state.cidade}, {state.uf}{' '}
                </p>
              </p>
            </OrderDescriptionContainer>
          </OrderItem>
          <OrderItem>
            <img src={clock} alt="endereço" />
            <OrderDescriptionContainer>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </OrderDescriptionContainer>
          </OrderItem>
          <OrderItem>
            <img src={money} alt="pagamento" />
            <OrderDescriptionContainer>
              <p>Pagamento na entrega</p>
              <strong>{state.tipoPagamento}</strong>
            </OrderDescriptionContainer>
          </OrderItem>
        </ItemsContainer>
        <img src={delivery} alt="delivery" />
      </DetailsContainer>
    </OrderDetailsWrapper>
  )
}
