import logoWhite from '../../img/logo/logo-white.svg';
import logoBlack from '../../img/logo/logo-black.svg';

import './Logo.css';

const Logo = ({color}) => {
  const logo = color === 'white' ? logoWhite : logoBlack;
  return (
    <div className="logo">
      <img src={logo} alt="logo coffe house" className="logo__pic" />
      <p className="logo__text">Coffee house</p>
    </div>
  )
}

export default Logo;