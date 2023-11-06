import { CoffeeProps } from '../../pages/Home/components/CoffeeSection/components/Coffee'

export enum ActionTypes {
  INCREASE_COFFEE_QUANTITY = 'INCREASE_COFFEE_QUANTITY',
  DECREASE_COFFEE_QUANTITY = 'DECREASE_COFFEE_QUANTITY',
  REMOVE_COFFEE_QUANTITY = 'REMOVE_COFFEE_QUANTITY',
}

export function increaseCoffeeQuantityAction(coffee: CoffeeProps) {
  return {
    type: ActionTypes.INCREASE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
export function decreaseCoffeeQuantityAction(coffee: CoffeeProps) {
  return {
    type: ActionTypes.DECREASE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
export function removeCoffeeAction(coffee: CoffeeProps) {
  return {
    type: ActionTypes.REMOVE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
