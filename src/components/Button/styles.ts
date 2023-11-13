import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'neutral'

export interface ButtonContainerProps {
  $variant: ButtonVariant
}

const buttonVariants = {
  primary: 'yellow', // Substitua por sua cor primária
  neutral: 'base-button', // Substitua pelo nome da variável no tema
}
const buttonVariantsText = {
  primary: 'white', // Substitua por sua cor primária
  neutral: 'base-text', // Substitua pelo nome da variável no tema
}
const buttonVariantsHover = {
  primary: 'yellow-dark', // Substitua por sua cor primária
  neutral: 'base-button', // Substitua pelo nome da variável no tema
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 50px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;

  background-color: ${(props) =>
    props.theme[buttonVariants[props.$variant]]}; // Use o tema diretamente

  color: ${(props) => props.theme[buttonVariantsText[props.$variant]]};

  &:hover {
    background-color: ${(props) =>
      props.theme[buttonVariantsHover[props.$variant]]};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`
