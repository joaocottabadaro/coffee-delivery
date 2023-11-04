import { ReactNode, createContext, useReducer } from 'react'
import { CoffeeProps } from '../pages/Home/components/CoffeeSection/components/Coffee'
import {
  decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction,
} from '../reducers/coffees/actions'
import { OrderReducer } from '../reducers/coffees/reducer'

type UpdateCoffeeType = 'INCREASE' | 'DECREASE'

interface OrderContextType {
  coffees: CoffeeProps[]
  updateCoffeeQuantity: (
    selectedCoffee: CoffeeProps,
    action: UpdateCoffeeType,
  ) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}
export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(OrderReducer, {
    coffees: [],
  })

  function updateCoffeeQuantity(
    selectedCoffee: CoffeeProps,
    action: UpdateCoffeeType,
  ) {
    switch (action) {
      case 'INCREASE':
        dispatch(increaseCoffeeQuantityAction(selectedCoffee))
        break
      case 'DECREASE':
        dispatch(decreaseCoffeeQuantityAction(selectedCoffee))
        break
      default:
        return ''
    }
  }

  const { coffees } = orderState
  return (
    <OrderContext.Provider
      value={{
        coffees,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
