import { coffees } from '../../../../data/coffees'
import { Coffee, CoffeeItem } from './components/Coffee'
import { ItemsContainer, MainContainer } from './styles'

export function CoffeeSection() {
  return (
    <MainContainer>
      <h2>Nosso cafés</h2>
      <ItemsContainer>
        {coffees.map((coffee: Coffee) => {
          return <CoffeeItem key={coffee.id} coffee={coffee} />
        })}
      </ItemsContainer>
    </MainContainer>
  )
}
