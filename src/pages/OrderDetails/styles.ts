import styled from 'styled-components'

export const OrderDetailsWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
`
export const OrderHeader = styled.div`
  display: flex;

  flex-direction: column;

  h2 {
    color: ${(props) => props.theme[`yellow-dark`]};
    font-family: 'Baloo 2';
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }
  margin-bottom: 2.5rem;
`
export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 6.25rem;
  width: 100%;
`

export const OrderItem = styled.div`
  display: flex;

  gap: 0.625rem;
  line-height: 130%;
`

export const OrderDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme[`yellow-dark`]};
`
