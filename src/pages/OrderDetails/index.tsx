import delivery from '../../assets/delivery.svg'
import location from '../../assets/locationDelivery.svg'
import money from '../../assets/money.svg'

import clock from '../../assets/clock.svg'
import {
  OrderDescriptionContainer,
  OrderDetailsWrapper,
  OrderHeader,
  OrderItem,
} from './styles'

export function OrderDetails() {
  return (
    <OrderDetailsWrapper>
      <OrderHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderHeader>
      <div>
        <OrderItem>
          <img src={location} alt="localização" />
          <OrderDescriptionContainer>
            <p>Entrega em Endereco, numero</p>
            <p>Cidade</p>
          </OrderDescriptionContainer>
        </OrderItem>
        <OrderItem>
          <img src={clock} alt="endereço" />
          <OrderDescriptionContainer>
            <p>Entrega em Endereco, numero</p>
            <p>Cidade</p>
          </OrderDescriptionContainer>
        </OrderItem>
        <OrderItem>
          <img src={money} alt="pagamento" />
          <OrderDescriptionContainer>
            <p>Entrega em Endereco, numero</p>
            <p>Cidade</p>
          </OrderDescriptionContainer>
        </OrderItem>
        <img src={delivery} alt="delivery" />
      </div>
    </OrderDetailsWrapper>
  )
}
