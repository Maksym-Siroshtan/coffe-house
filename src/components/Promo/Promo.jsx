import Title from '../../components/Title/Title';

import './Promo.css';

const Promo = ({title, page}) => {
  const clazz = page === 'coffe' ? 'promo promo_coffe' : 'promo promo_goods';
  return (
    <section className={clazz}>
      <Title title={title} />
    </section>
  )
}

export default Promo;