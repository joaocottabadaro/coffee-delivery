import { ReactNode } from 'react'
import { BaseCard } from './styles'

interface CardProps {
  children: ReactNode
}
export function Card({ children }: CardProps) {
  return <BaseCard>{children}</BaseCard>
}
