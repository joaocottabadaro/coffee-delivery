import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  padding: 2.5rem 5rem;
  overflow-y: auto;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
`
