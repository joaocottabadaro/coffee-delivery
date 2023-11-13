import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  padding: 0 5rem;
  overflow-y: auto;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding: 0 2rem;
  }
`
