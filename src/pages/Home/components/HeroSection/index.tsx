import { BenefitsContainer, HeroContainer, InfoContainer } from './styles'
import mainImage from '../../../../assets/mainImage.png'
import cart from '../../../../assets/cart.svg'
import coffee from '../../../../assets/coffee.svg'
import box from '../../../../assets/box.svg'
import time from '../../../../assets/time.svg'

export function HeroSection() {
  return (
    <HeroContainer>
      <InfoContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <BenefitsContainer>
          <div>
            <img src={cart} alt="carrinho" />
            <p>Compra simples e segura</p>
          </div>
          <div>
            <img src={box} alt="cafe" />
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <img src={time} alt="embalagem" />
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <img src={coffee} alt="entrega" />
            <p>O café chega fresquinho até você</p>
          </div>
        </BenefitsContainer>
      </InfoContainer>
      <img src={mainImage} alt="big coffee"></img>
    </HeroContainer>
  )
}
