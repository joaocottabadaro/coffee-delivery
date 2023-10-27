import { HeroSection, HomeContainer, InfoContainer } from './styles'

import mainImage from '../../assets/main-image.png'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <InfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </InfoContainer>
        <img src={mainImage} alt="big coffee"></img>
      </HeroSection>
    </HomeContainer>
  )
}
