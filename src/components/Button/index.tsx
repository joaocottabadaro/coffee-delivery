import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode | string
}

export function Button({
  children,
  variant = 'neutral',
  ...props
}: ButtonProps) {
  console.log('🚀 ~ file: index.tsx:14 ~ props:', props)
  return (
    <ButtonContainer $variant={variant} {...props}>
      {children}
    </ButtonContainer>
  )
}
