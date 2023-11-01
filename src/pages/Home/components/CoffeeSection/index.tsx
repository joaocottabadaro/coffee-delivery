import { Coffee } from './components/Coffee'
import { ItemsContainer, MainContainer } from './styles'

export function CoffeeSection() {
  return (
    <MainContainer>
      <h2>Nosso cafés</h2>
      <ItemsContainer>
        <Coffee
          id="1"
          name="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.9}
          types={['tradicional']}
          quantity={0}
        />

        <Coffee
          id="2"
          name="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price={9.9}
          types={['tradicional']}
          quantity={0}
        />
      </ItemsContainer>
    </MainContainer>
  )
}
