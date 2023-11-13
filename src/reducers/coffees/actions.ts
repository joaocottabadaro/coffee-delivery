import { Coffee } from '../../pages/Home/components/CoffeeSection/components/Coffee'

export enum ActionTypes {
  INCREASE_COFFEE_QUANTITY = 'INCREASE_COFFEE_QUANTITY',
  DECREASE_COFFEE_QUANTITY = 'DECREASE_COFFEE_QUANTITY',
  REMOVE_COFFEE_QUANTITY = 'REMOVE_COFFEE_QUANTITY',
  REMOVE_ALL_COFFEES = 'REMOVE_ALL_COFFEES',
}

export function increaseCoffeeQuantityAction(coffee: Coffee) {
  return {
    type: ActionTypes.INCREASE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
export function decreaseCoffeeQuantityAction(coffee: Coffee) {
  return {
    type: ActionTypes.DECREASE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
export function removeCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
export function removeAllCoffeesAction() {
  return {
    type: ActionTypes.REMOVE_ALL_COFFEES,
  }
}
