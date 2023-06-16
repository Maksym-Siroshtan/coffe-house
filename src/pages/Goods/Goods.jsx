import Promo from '../../components/Promo/Promo';
import About from '../../components/About/About';
import Line from '../../components/Line/Line';
import CardList from '../../components/Card-list/Card-list';

import aboutGoods from '../../img/about-goods.jpg';

const Goods = ({data}) => {
  return (
    <main className='coffe'>
      <Promo title='For your pleasure' />
      <div className="container">
        <section className="about">
          <div className="about__img">
            <img src={aboutGoods} alt='About our beans' className="about__img-pic"></img>
          </div>
          <div className="about__content">
            <About subtitle='About our goods' />
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
        <CardList data={data} />
      </div>
    </main>
  )
}

export default Goods;