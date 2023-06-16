import { Fragment } from 'react';

import Promo from '../../components/Promo/Promo';
import About from '../../components/About/About';
import Line from '../../components/Line/Line';
import CardList from '../../components/Card-list/Card-list';
import SearchPanel from '../../components/Search-panel/Search-panel';

import aboutBeans from '../../img/about-our-beans.jpg'


const Coffe = ({data, onChangeSearch, onChangeFilter}) => {
  return (
    <Fragment>
      <Promo title='Our Coffee' page='coffe' />
      <div className="container">
        <section className="about">
          <div className="about__img">
            <img src={aboutBeans} alt='About our beans' className="about__img-pic"></img>
          </div>
          <div className="about__content">
            <About subtitle='About our beans' />
            <div className="about__paragraphs">
            <p className="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            </p>
            <br />
            <p className="about__text">
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. 
              As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </p>
            </div>
          </div>
        </section>
        <Line />
        <SearchPanel onChangeSearch={onChangeSearch} onChangeFilter={onChangeFilter} />
        <CardList data={data} />
      </div>
    </Fragment>
  )
}

export default Coffe;