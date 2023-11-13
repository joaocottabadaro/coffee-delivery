import { HomeContainer } from './styles'

import { CoffeeSection } from './components/CoffeeSection'
import { HeroSection } from './components/HeroSection'
import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    // Verifica se o navegador suporta geolocalização
    if (navigator.geolocation) {
      // Obtém a posição do usuário
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          console.log(
            '🚀 ~ file: index.tsx:17 ~ useEffect ~ longitude:',
            longitude,
          )
          console.log(
            '🚀 ~ file: index.tsx:17 ~ useEffect ~ latitude:',
            latitude,
          )
        },
        (error) => {
          console.error('Erro ao obter a localização:', error)
        },
      )
    } else {
      console.error('Geolocalização não é suportada neste navegador')
    }
  }, [])

  return (
    <HomeContainer>
      <HeroSection />
      <CoffeeSection />
    </HomeContainer>
  )
}
