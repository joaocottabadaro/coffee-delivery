import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  padding: 2.5rem 10rem;
  filter: blur(80px);
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
`
