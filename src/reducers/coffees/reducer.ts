import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Coffee } from '../../pages/Home/components/CoffeeSection/components/Coffee'

export interface OrderState {
  coffees: Coffee[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OrderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.DECREASE_COFFEE_QUANTITY: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft.coffees[currentCoffeeIndex].quantity -= 1
        if (draft.coffees[currentCoffeeIndex].quantity === 0) {
          draft.coffees.splice(currentCoffeeIndex, 1)
        }
      })
    }
    case ActionTypes.INCREASE_COFFEE_QUANTITY: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })

      return produce(state, (draft) => {
        if (currentCoffeeIndex < 0) {
          draft.coffees.push({
            ...action.payload.coffee,
            quantity: 1,
          })
        } else {
          draft.coffees[currentCoffeeIndex].quantity += 1
        }
      })
    }

    case ActionTypes.REMOVE_COFFEE_QUANTITY: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })

      return produce(state, (draft) => {
        draft.coffees.splice(currentCoffeeIndex, 1)
      })
    }

    case ActionTypes.REMOVE_ALL_COFFEES: {
      return produce(state, (draft) => {
        draft.coffees = [] // Remove todos os itens da sacola
      })
    }

    default:
      return state
  }
}
