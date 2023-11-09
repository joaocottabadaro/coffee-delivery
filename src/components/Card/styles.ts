import styled from 'styled-components'

export const BaseCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  min-width: 400px;
  margin: 2rem 0;
  background-color: ${(props) => props.theme['base-card']};
`
