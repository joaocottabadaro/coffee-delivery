import styled from 'styled-components'

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

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.75rem;
`

export const BaseCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  min-width: 400px;
  margin: 2rem 0;
  background-color: ${(props) => props.theme['base-card']};
`

export const CheckoutCard = styled(BaseCard)`
  border-radius: 6px 44px;
`

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

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    flex: 1;
    justify-content: center;
  }
`
export const SelectedCoffee = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  strong {
    margin-left: auto;
  }
`
export const AddRemoveCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding-top: 0.375rem;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem;
    gap: 0.5rem;
  }

  div:last-child {
    cursor: pointer;
  }
`

export const CheckoutInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme['base-text']};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  p:first-child {
    font-size: 0.875rem;
  }
`
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  gap: 0.5rem;

  & > div {
    width: 100%;
  }

  button {
    justify-content: center;
    width: 100%;
  }
`
