import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Scroll, Timer, Alien } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <Alien size={24} />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
