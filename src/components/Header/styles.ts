import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: ${(props) => props.theme.background};
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  .cart::after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

interface HeaderButtonProps {
  $variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  width: 100%;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;
  &:focus {
    box-shadow: none;
  }
  color: ${(props) => props.theme[`purple-dark`]};
  background-color: ${(props) =>
    props.$variant === 'yellow'
      ? props.theme[`yellow-light`]
      : props.theme[`purple-light`]};

  svg {
    fill: ${(props) =>
      props.$variant === 'yellow'
        ? props.theme[`yellow-dark`]
        : props.theme[`purple-dark`]};
  }
  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`
