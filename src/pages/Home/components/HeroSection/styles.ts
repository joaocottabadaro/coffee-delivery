import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5.875rem 0;
  gap: 3.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};

    font-family: 'Baloo 2';
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 62.4px */
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme[`base-subtitle`]};

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 4.125rem;
  column-gap: 3rem;
  row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme[`base-text`]};
    }
  }
`
