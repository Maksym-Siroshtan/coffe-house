import { NavLink } from 'react-router-dom';

import './Card-list-item.css';

const CardListItem = ({pathImg, description, price, countries}) => {
  const country = countries ? countries : null;
  return (
    <li className="card-list-item">
      <NavLink to="/items" className="card-list__link">
        <div className="card-list__img">
          <img src={pathImg} alt="Coffe" className="card-list__img-pic" />
        </div>
        <div className='card-list__description' >
          <p className="card-list__name">
          {description}
          </p>
          <p className="card-list__country">{country}</p>
          <p className="card-list__price">{price}</p>
        </div>
      </NavLink>
    </li>
  )
}

export default CardListItem;