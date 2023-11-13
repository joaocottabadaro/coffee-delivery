import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeSection/components/Coffee'
import {
  decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction,
  removeAllCoffeesAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'
import { OrderReducer, OrderState } from '../reducers/coffees/reducer'

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
  const [orderState, dispatch] = useReducer(
    OrderReducer,
    {
      coffees: [],
    },
    getStoredCoffees,
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState)
    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
  }, [orderState])

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

  function getStoredCoffees(initialState: OrderState) {
    const storedCoffees = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )

    if (storedCoffees) return JSON.parse(storedCoffees)

    return initialState
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
