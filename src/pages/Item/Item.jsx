import Promo from '../../components/Promo/Promo';
import About from '../../components/About/About';

import './Item.css';
import aromisticoCoffe from '../../img/aromistico-coffe-bg.jpg';

const Item = () => {
  return (
    <main className='coffe'>
      <Promo title='Our Coffee' bg='coffe' />
      <div className="container container_xl">
        <section className="about">
        <div className="about__img">
            <img src={aromisticoCoffe} alt='About our beans' className="about__img-pic"></img>
        </div>
        <div className="about__content">
          <About subtitle='About it' />
          <div className="about__paragraphs about__paragraphs_ta-left">
              <p className="about__text"><strong>Country: </strong> Brasil</p>
                <br />
              <p className="about__text"><strong>Description: </strong>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                <br />
              <strong>Price:  16.99$</strong>
          </div>
        </div>
        </section>
      </div>
    </main>
  )
}

export default Item;