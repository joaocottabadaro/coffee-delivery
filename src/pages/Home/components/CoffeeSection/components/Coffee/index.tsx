import expressoTradicional from '../../../../../../assets/expresso-tradicional.png'
import shoppingCart from '../../../../../../assets/ShoppingCart.svg'
import {
  AddItemsContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeItem,
  CoffeeTag,
  CoffeeTagContainer,
  CoffeeTitle,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../../../../contexts/OrderContextProvider'
import { Minus, Plus } from 'phosphor-react'

export interface CoffeeProps {
  id: string
  name: string
  types: string[]
  description: string
  price: number
  quantity: number
}
export function Coffee(props: CoffeeProps) {
  const { name, types, description, price, id } = props
  const { coffees, updateCoffeeQuantity } = useContext(OrderContext)
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)
  const isCoffeeInArray = (coffees: CoffeeProps[], id: string) => {
    const coffeeIds = coffees.map((coffee) => coffee.id) // Crie um array apenas com os IDs dos cafés
    const isCoffeeInArray = coffeeIds.includes(id) // Use Array.includes para verificar se o ID está no array

    return isCoffeeInArray
  }

  function increaseCoffeeQuantity() {
    updateCoffeeQuantity(props, 'INCREASE')
  }

  function decreaseCoffeeQuantity() {
    updateCoffeeQuantity(props, 'DECREASE')
  }

  useEffect(() => {
    if (coffees.length > 0 && isCoffeeInArray(coffees, id)) {
      console.log('id', id)
      const currentCoffeeIndex = coffees.findIndex((coffee) => {
        return coffee.id === id
      })
      setCoffeeQuantity(coffees[currentCoffeeIndex]?.quantity)
    } else {
      setCoffeeQuantity(0)
    }
  }, [coffees, id])

  return (
    <CoffeeItem>
      <CoffeeImage src={expressoTradicional} />
      <CoffeeTagContainer>
        <CoffeeTag>{types}</CoffeeTag>
      </CoffeeTagContainer>
      <CoffeeTitle>{name}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>

      <AddItemsContainer>
        <p>
          <span>R$</span> {price}
        </p>

        <div>
          <Minus alt="remover café" onClick={decreaseCoffeeQuantity} />
          <input type="number" value={coffeeQuantity} disabled />
          <Plus alt="adicionar café" onClick={increaseCoffeeQuantity} />
        </div>
        <img src={shoppingCart} alt="ir para o carrinho" />
      </AddItemsContainer>
    </CoffeeItem>
  )
}
