import styled from 'styled-components'
export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;
  h3 {
    color: ${(props) => props.theme['base-subtitle']};

    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }

  h4 {
    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${(props) => props.theme['base-error']};
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;

  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }
`

export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  background-color: ${(props) => props.theme['base-button']};
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['base-text']};

    font-size: 0.875rem;

    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`

export interface InputPaymentContainerProps {
  $isSelected: boolean
}
export const InputPaymentContainer = styled.div<InputPaymentContainerProps>`
  input {
    visibility: hidden;
    appearance: none;
  }
  display: flex;
  width: 12.5rem;

  label {
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-transform: uppercase;
    gap: 0.75rem;
  }

  flex: 1;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};

  border: 1px solid
    ${(props) =>
      props.$isSelected ? props.theme['purple-dark'] : 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? '' : props.theme['base-hover']};
  }
`
export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  button {
    flex: 1;
    justify-content: center;
  }
`

export const PaymentTypeError = styled.p`
  color: ${(props) => props.theme['base-error']};
`
