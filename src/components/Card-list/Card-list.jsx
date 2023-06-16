import CardListItem from '../Card-list-item/Card-list-item';

import './Card-list.css';

const CardList = ({data}) => {
  const items = data.map(item => {
    return <CardListItem key={item.description} 
                  pathImg={item.pathImg} 
                  description={item.description} 
                  price={item.price}
                  countries={item.country} />
  })
  return (
    <ul className='card-list'>{items}</ul>
  )
}

export default CardList;