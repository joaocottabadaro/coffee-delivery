import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import headerCart from '../../assets/headerCart.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <nav>
        <NavLink to="/Checkout" title="Checkout">
          <img src={headerCart} alt="carrinho" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
