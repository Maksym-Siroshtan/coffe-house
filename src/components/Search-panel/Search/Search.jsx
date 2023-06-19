import { Component } from 'react';

import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChangeSearch = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.onChangeSearch(term);
  }

  render() {
    return (
      <div className='search'>
        <label htmlFor="search">Lookiing for</label>
        <input type="text" 
              name='search' 
              placeholder='start typing here...' 
              onChange={this.onChangeSearch}
              value={this.state.term} />
      </div>
    )
  }
}

export default Search;