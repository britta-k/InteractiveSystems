import {NavLink} from 'react-router-dom';
import Logo from '../assets/logo.png';
export const Header = () => {
  return (
    <header>
      <a href = "/" className="logo">
        <img src = {Logo} alt='logo'></img>
      </a>
      <nav className = 'navigation'>
        <NavLink to = "/" className = 'link'>Home</NavLink>
        <NavLink to = "/product" className = 'link'>Product</NavLink>
        <NavLink to = "/contact" className = 'link'>Contact</NavLink>
      </nav>
    </header>
  )
}
