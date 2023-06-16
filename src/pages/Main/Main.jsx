import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../../components/Title/Title';
import About from '../../components/About/About';
import Subtitle from '../../components/Subtitle/Subtitle';
import BeansLogo from '../../components/Beans-logo/Beans-logo';
import CardList from '../../components/Card-list/Card-list';

import './Main.css';

const Main = ({data}) => {
  return (
    <Fragment>
      <section className='main'>
        <div className='main__promo'>
          <div className="container">
            <div className="main__title">
              <Title title='Everything You Love About Coffee' />
            </div>
            <div className="main__logo">
              <BeansLogo color='white' />
            </div>
            <div className="main__subtitle">
              <Subtitle subtitle='We makes every day full of energy and taste' color='white' />
              <Subtitle subtitle='Want to try our beans?' color='white' />
            </div>
            <NavLink to='/our-coffe' className="main__link-more">More</NavLink>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="about-us__title">
            <About subtitle='About Us' />
          </div>
          <div className="about-us__description">
            <p className="about-us__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </p>
            <br />
            <p className="about-us__text">
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
      </section>
      <section className="our-best">
        <div className="container">
          <div className="our-best__title">
            <Subtitle subtitle='Our Best' />
          </div>
          <CardList data={data} />
        </div>
      </section>
    </Fragment>
  )
}

export default Main;