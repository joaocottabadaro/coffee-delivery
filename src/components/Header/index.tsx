import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import headerCart from '../../assets/headerCart.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="logo" />
      </NavLink>

      <nav>
        <NavLink to="/Checkout" title="Checkout">
          <img src={headerCart} alt="carrinho" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
