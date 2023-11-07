import styled from 'styled-components'

export const CoffeeItem = styled.div`
  background-color: ${(props) => props.theme[`base-card`]};

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  min-height: 19rem;
  border-radius: 6px 36px;
  padding: 1.5rem;
  justify-content: space-between;

  input {
    width: fit-content;
    max-width: 2rem;
    border: none;
    background-color: transparent;
    text-align: center;
  }
`
export const CoffeeTitle = styled.h3`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 26px */
  color: ${(props) => props.theme[`base-subtitle`]};
`
export const CoffeeTag = styled.span`
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['yellow-dark']};
  width: 5rem;
  font-family: Roboto;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`
export const CoffeeTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
`
export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  color: ${(props) => props.theme[`base-label`]};
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  text-align: center;
`
export const CoffeeImage = styled.img`
  margin-top: -3.2rem;
`

export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme[`base-text`]};

    /* Title/Title M */
    font-family: 'Baloo 2';
    font-size: 1.5rem;

    font-weight: 800;
    line-height: 130%;

    span {
      font-size: 0.875rem;

      font-weight: 300;
      line-height: 130%; /* 18.2px */
    }
  }

  div {
    display: flex;
    height: 38px;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme[`base-button`]};
  }

  span {
    color: ${(props) => props.theme[`base-text`]};

    font-size: 1rem;

    font-weight: 400;
  }

  svg {
    cursor: pointer;
  }
`
