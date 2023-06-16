import Subtitle from '../../components/Subtitle/Subtitle';
import BeansLogo from '../../components/Beans-logo/Beans-logo';

import './About.css';
import { Fragment } from 'react';

const About = ({subtitle}) => {
  return (
    <Fragment>
      <div className="about__description">
        <div className="about__subtitle">
          <Subtitle subtitle={subtitle} />
        </div>
        <div className="about__logo">
          <BeansLogo />
        </div>
      </div>
    </Fragment>
  )
}

export default About;