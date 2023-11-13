import shoppingCart from '../../../../../../assets/ShoppingCart.svg'

import {
  AddItemsContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeContainer,
  CoffeeTag,
  CoffeeTagContainer,
  CoffeeTitle,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../../../../contexts/OrderContextProvider'
import { Minus, Plus } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export interface Coffee {
  id: string
  name: string
  types: string[]
  description: string
  price: number
  quantity: number
  photo: string
}

export interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeProps) {
  const { name, types, description, price, id, photo } = coffee
  const { coffees, updateCoffeeQuantity } = useContext(OrderContext)
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)
  const isCoffeeInArray = (coffees: Coffee[], id: string) => {
    const coffeeIds = coffees.map((coffee) => coffee.id) // Crie um array apenas com os IDs dos cafés
    const isCoffeeInArray = coffeeIds.includes(id) // Use Array.includes para verificar se o ID está no array

    return isCoffeeInArray
  }

  function increaseCoffeeQuantity() {
    updateCoffeeQuantity(coffee, 'INCREASE')
  }

  function decreaseCoffeeQuantity() {
    updateCoffeeQuantity(coffee, 'DECREASE')
  }

  useEffect(() => {
    if (coffees.length > 0 && isCoffeeInArray(coffees, id)) {
      const currentCoffeeIndex = coffees.findIndex((coffee) => {
        return coffee.id === id
      })
      setCoffeeQuantity(coffees[currentCoffeeIndex]?.quantity)
    } else {
      setCoffeeQuantity(0)
    }
  }, [coffees, id])

  return (
    <CoffeeContainer>
      <CoffeeImage src={`/coffees/${photo}`} />
      <CoffeeTagContainer>
        {types.map((type) => {
          return <CoffeeTag key={type}>{type}</CoffeeTag>
        })}
      </CoffeeTagContainer>
      <CoffeeTitle>{name}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>

      <AddItemsContainer>
        <p>
          <span>R$</span> {price.toFixed(2)}
        </p>

        <div>
          <Minus alt="remover café" onClick={decreaseCoffeeQuantity} />
          <input type="number" value={coffeeQuantity} disabled />
          <Plus alt="adicionar café" onClick={increaseCoffeeQuantity} />
        </div>
        <NavLink to="/Checkout" title="Checkout">
          <img
            src={shoppingCart}
            alt="carrinho"
            onClick={increaseCoffeeQuantity}
          />
        </NavLink>
      </AddItemsContainer>
    </CoffeeContainer>
  )
}
