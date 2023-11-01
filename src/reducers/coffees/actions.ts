import { CoffeeProps } from '../../pages/Home/components/CoffeeSection/components/Coffee'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFEE',
}

export function addCoffeeToOrder(coffee: CoffeeProps) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  }
}
export function removeCoffeeFromOrder(coffee: CoffeeProps) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee,
    },
  }
}
