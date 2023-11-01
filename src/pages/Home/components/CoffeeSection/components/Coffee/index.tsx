import plus from '../../../../../../assets/plus.svg'
import minus from '../../../../../../assets/minus.svg'
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
import { useState } from 'react'

export interface CoffeeProps {
  id: string
  name: string
  types: string[]
  description: string
  price: number
  quantity: number
}
export function Coffee({
  name,
  types,
  description,
  price,
  quantity = 0,
}: CoffeeProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity)

  function increaseCoffeeQuantity() {
    setSelectedQuantity((state) => state + 1)
  }

  function decreaseCoffeeQuantity() {
    if (selectedQuantity === 0) {
      return
    }
    setSelectedQuantity((state) => state - 1)
  }
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
          <img
            src={minus}
            alt="remover café"
            onClick={decreaseCoffeeQuantity}
          />
          <input type="number" value={selectedQuantity} />
          <img
            src={plus}
            alt="adicionar café"
            onClick={increaseCoffeeQuantity}
          />
        </div>
        <img src={shoppingCart} alt="ir para o carrinho" />
      </AddItemsContainer>
    </CoffeeItem>
  )
}
