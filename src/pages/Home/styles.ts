import styled from 'styled-components'
export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme['base-title']};

    font-family: 'Baloo 2';
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 62.4px */
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
export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5.875rem 0;
  gap: 3.5rem;
`
