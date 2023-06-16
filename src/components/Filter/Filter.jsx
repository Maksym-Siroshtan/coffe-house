import './Filter.css';

const Filter = ({onChangeFilter}) => {
  const buttonsData = [
    {label: 'All'},
    {label: 'Brazil'},
    {label: 'Kenia'},
    {label: 'Columbia'}
  ];

  const buttons = buttonsData.map(item => {
    return (
      <button className='filter__button' 
                    key={item.label}
                    onClick={() => onChangeFilter(item.label)}>
        {item.label}
      </button>
    )
  });
    
  return (
    <div className='filter'>
      <span className='filter__title'>Or filter</span>
      {buttons}
    </div>
  )
}

export default Filter;