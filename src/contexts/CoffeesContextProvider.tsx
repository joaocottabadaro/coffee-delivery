import { ReactNode, createContext, useState } from 'react'
import { CoffeeProps } from '../pages/Home/components/CoffeeSection/components/Coffee'

export const CoffeesContext = createContext({})

interface CoffeesContextProviderProps {
  children: ReactNode
}
export default function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeProps[]>([])
  function addNewCoffee() {}
  function removeCoffee() {}
  return (
    <CoffeesContext.Provider value={CoffeesContext}>
      {children}
    </CoffeesContext.Provider>
  )
}
