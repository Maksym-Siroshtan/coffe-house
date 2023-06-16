import Nav from '../Nav/Nav';
import BeansLogo from '../Beans-logo/Beans-logo';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__nav">
        <Nav />
      </div>
      <div className="footer__logo">
        <BeansLogo />
      </div>
    </footer>
  )
}

export default Footer;