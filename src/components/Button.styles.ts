import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral'

export interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border-radius: 4px;
  border: 0;

  background-color: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.white};
`
