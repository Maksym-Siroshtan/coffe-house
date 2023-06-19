import Search from './Search/Search';
import Filter from './Filter/Filter';

import './Search-panel.css';

const SearchPanel = ({onChangeSearch, onChangeFilter}) => {
  return (
    <div className="search-panel">
      <Search onChangeSearch={onChangeSearch} />
      <Filter onChangeFilter={onChangeFilter} />
    </div>
  )
}

export default SearchPanel;