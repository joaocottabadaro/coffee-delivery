import { produce } from 'immer'
import { ActionTypes } from './actions'
import { CoffeeProps } from '../../pages/Home/components/CoffeeSection/components/Coffee'

export interface CoffeesState {
  coffees: CoffeeProps[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OrderReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.DECREASE_COFFEE_QUANTITY: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })

      if (currentCoffeeIndex < 0) return state
      return produce(state, (draft) => {
        if (draft.coffees[currentCoffeeIndex].quantity === 0) {
          draft.coffees.splice(currentCoffeeIndex, 1)
        } else {
          draft.coffees[currentCoffeeIndex].quantity -= 1
        }
      })
    }
    case ActionTypes.INCREASE_COFFEE_QUANTITY: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })
      console.log(
        '🚀 ~ file: reducer.ts:29 ~ currentCoffeeIndex ~ currentCoffeeIndex:',
        currentCoffeeIndex,
      )

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
    default:
      return state
  }
}
