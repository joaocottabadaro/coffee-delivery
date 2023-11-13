import styled from 'styled-components'
import { BaseCard } from '../../components/Card/styles'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.125rem;
  }

  h3 {
    font-size: 1rem;
  }
`

export const CheckoutCard = styled(BaseCard)`
  border-radius: 6px 44px;
  h3 {
    text-align: center;
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

  p,
  span,
  strong {
    font-size: 1rem;
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
  font-size: 1rem;
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

  strong {
    font-size: 1.25rem;
  }

  button {
    justify-content: center;
    width: 100%;
  }
`
