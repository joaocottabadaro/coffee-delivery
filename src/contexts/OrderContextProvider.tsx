import { ReactNode, createContext, useReducer } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeSection/components/Coffee'
import {
  decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction,
  removeAllCoffeesAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'
import { OrderReducer } from '../reducers/coffees/reducer'

type UpdateCoffeeType = 'INCREASE' | 'DECREASE' | 'REMOVE'

interface OrderContextType {
  coffees: Coffee[]
  updateCoffeeQuantity: (
    selectedCoffee: Coffee,
    action: UpdateCoffeeType,
  ) => void
  removeAllCoffees: () => void
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
    selectedCoffee: Coffee,
    action: UpdateCoffeeType,
  ) {
    switch (action) {
      case 'INCREASE':
        dispatch(increaseCoffeeQuantityAction(selectedCoffee))
        break
      case 'DECREASE':
        dispatch(decreaseCoffeeQuantityAction(selectedCoffee))
        break
      case 'REMOVE':
        dispatch(removeCoffeeAction(selectedCoffee))
        break
      default:
        return ''
    }
  }
  function removeAllCoffees() {
    dispatch(removeAllCoffeesAction())
  }

  const { coffees } = orderState
  return (
    <OrderContext.Provider
      value={{
        coffees,
        removeAllCoffees,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
