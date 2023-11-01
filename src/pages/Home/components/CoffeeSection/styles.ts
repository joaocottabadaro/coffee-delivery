import styled from 'styled-components'
export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
    color: ${(props) => props.theme[`base-subtitle`]};
  }
`
export const ItemsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem 2rem;
`
