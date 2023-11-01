import { HomeContainer } from './styles'

import { CoffeeSection } from './components/CoffeeSection'
import { HeroSection } from './components/HeroSection'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeSection />
    </HomeContainer>
  )
}
