import { NavLink } from 'react-router-dom'
import { HeaderButton, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContextProvider'

export default function Header() {
  const { coffees } = useContext(OrderContext)
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="logo" />
      </NavLink>

      <nav>
        <HeaderButton $variant="purple">
          <MapPin size={20} weight="fill" />
          Belo Horizonte, MG
        </HeaderButton>
        <NavLink to="/Checkout" title="Checkout">
          <HeaderButton $variant="yellow">
            {coffees.length >= 1 && <span>{coffees.length}</span>}
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
