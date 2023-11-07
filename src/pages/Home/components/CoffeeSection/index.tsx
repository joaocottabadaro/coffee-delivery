import { coffees } from '../../../../data/coffees'
import { Coffee, CoffeeProps } from './components/Coffee'
import { ItemsContainer, MainContainer } from './styles'

export function CoffeeSection() {
  return (
    <MainContainer>
      <h2>Nosso cafés</h2>
      <ItemsContainer>
        {coffees.map((coffee: CoffeeProps) => {
          return (
            <Coffee
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              types={[...coffee.types]}
              quantity={coffee.quantity}
              photo={coffee.photo}
            />
          )
        })}
      </ItemsContainer>
    </MainContainer>
  )
}
