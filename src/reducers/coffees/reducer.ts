import { produce } from 'immer'
import { ActionTypes } from './actions'
import { CoffeeProps } from '../../pages/Home/components/CoffeeSection/components/Coffee'

export interface CoffeesState {
  coffees: CoffeeProps[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OrderReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.coffee)
      })

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const filteredCoffees = draft.coffees.filter((coffee) => {
          return coffee.id === action.payload.coffee.id
        })
        draft.coffees = filteredCoffees
      })

    default:
      return state
  }
}
