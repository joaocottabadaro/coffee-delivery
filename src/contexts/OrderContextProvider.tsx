import { ReactNode, createContext, useReducer } from 'react'
import { CoffeeProps } from '../pages/Home/components/CoffeeSection/components/Coffee'
import {
  createOrderAction,
  decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'
import { OrderReducer } from '../reducers/coffees/reducer'

type UpdateCoffeeType = 'INCREASE' | 'DECREASE' | 'REMOVE'

export interface OrderFormData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  tipoPagamento: 'crédito' | 'débito' | 'dinheiro' | ''
}

interface OrderContextType {
  coffees: CoffeeProps[]
  updateCoffeeQuantity: (
    selectedCoffee: CoffeeProps,
    action: UpdateCoffeeType,
  ) => void
  orderData: OrderFormData
  createOrder: (orderData: OrderFormData) => void
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
    orderData: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      tipoPagamento: '',
    },
  })

  function createOrder(data: OrderFormData) {
    dispatch(createOrderAction(data))
  }

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
      case 'REMOVE':
        dispatch(removeCoffeeAction(selectedCoffee))
        break
      default:
        return ''
    }
  }

  const { coffees, orderData } = orderState
  return (
    <OrderContext.Provider
      value={{
        coffees,
        orderData,
        createOrder,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
