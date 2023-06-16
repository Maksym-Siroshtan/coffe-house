import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

import './Nav.css';

const Nav = ({color}) => {
  const clazz = color === 'white' ? 'nav' : 'nav nav_black';
  return (
    <nav className={clazz}>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink to="/" className='nav__link'>
              <Logo color={color} />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to="/our-coffe" className='nav__link'>Our coffee</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to="/for-your-pleasure" className='nav__link'>For your pleasure</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;