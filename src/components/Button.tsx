import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactNode | string
}
export function Button({ children, variant = 'neutral' }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
