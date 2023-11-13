import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 3.5rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
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
export const HeroImage = styled.img`
  @media (max-width: 460px) {
    width: 100%;
    height: auto;
  }
`
export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 3rem;
  row-gap: 1.25rem;
  margin-top: 4rem;
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

  @media (max-width: 1000px) {
    justify-content: center;
  }
`
