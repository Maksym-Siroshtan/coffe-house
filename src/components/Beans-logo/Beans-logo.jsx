import beansLogoWhite from '../../img/logo/beans-logo-white.svg';
import beansLogoBlack from '../../img/logo/beans-logo-black.svg';
import './Beans-logo.css';

const BeansLogo = ({color}) => {
  const logoColor = color === 'white' ? beansLogoWhite : beansLogoBlack;
  const logoClassColor = color === 'white' ? 'beans-logo' : 'beans-logo beans-logo_bg-black';
  return (
    <div className={logoClassColor}>
      <img src={logoColor} alt="beans-logo coffe house" className="beans-logo-pic" />
    </div>
  )
}

export default BeansLogo;