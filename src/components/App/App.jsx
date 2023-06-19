import { HashRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import Item from '../../pages/Item/Item';
import Coffe from '../../pages/Coffe/Coffe';
import Goods from '../../pages/Goods/Goods';
import Footer from '../Footer/Footer';

import './App.css';

import solimoCoffe from '../../img/solimo-coffe.png';
import prestoCoffe from '../../img/presto-coffe.png';
import aromisticoCoffe from '../../img/aromistico-coffe.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {pathImg: solimoCoffe, description: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
        {pathImg: prestoCoffe, description: 'Presto Coffee Beans 1 kg', price: '15.99$'},
        {pathImg: aromisticoCoffe, description: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
      ],
       coffeData: [
        {pathImg: solimoCoffe, description: 'Solimo Coffee Beans 1 kg', country: 'Brazil', price: '8.73$'},
        {pathImg: prestoCoffe, description: 'Presto Coffee Beans 1 kg', country: 'Kenia', price: '12.99$'},
        {pathImg: aromisticoCoffe, description: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$'},
        {pathImg: solimoCoffe, description: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '10.73$'},
        {pathImg: prestoCoffe, description: 'Presto Coffee Beans 2 kg', country: 'Kenia', price: '15.99$'},
        {pathImg: aromisticoCoffe, description: 'AROMISTICO Coffee 2 kg', country: 'Columbia', price: '8.99$'},
        {pathImg: solimoCoffe, description: 'Solimo Coffee Beans 3 kg', country: 'Brazil', price: '12.73$'},
        {pathImg: prestoCoffe, description: 'Presto Coffee Beans 3 kg', country: 'Kenia', price: '17.99$'},
        {pathImg: aromisticoCoffe, description: 'AROMISTICO Coffee 3 kg', country: 'Columbia', price: '10.99$'}
      ],
      goodsData: [
        {pathImg: solimoCoffe, description: 'Solimo Coffee Beans 1 kg', country: 'Brazil', price: '8.73$'},
        {pathImg: prestoCoffe, description: 'Presto Coffee Beans 1 kg', country: 'Kenia', price: '12.99$'},
        {pathImg: aromisticoCoffe, description: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$'},
        {pathImg: solimoCoffe, description: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '10.73$'},
        {pathImg: prestoCoffe, description: 'Presto Coffee Beans 2 kg', country: 'Kenia', price: '15.99$'},
        {pathImg: aromisticoCoffe, description: 'AROMISTICO Coffee 2 kg', country: 'Columbia', price: '8.99$'}
      ],
      term: '',
      filter: ''
    }
  }

  onSearch = (data, term) => {
    if (term.length === 0) {
      return data;
    }
    
    return data.filter(item => item.description.toLowerCase().indexOf(term) > - 1);
  }

  onChangeSearch = (term) => {
    this.setState({term});
  }

  onFilter = (data, filter) => {
    switch(filter) {
      case 'Brazil' :
        return data.filter(item => item.country === 'Brazil');
      case 'Kenia' :
        return data.filter(item => item.country === 'Kenia');
      case 'Columbia' :
        return data.filter(item => item.country === 'Columbia');
      default:
        return data;
    }
  }

  onChangeFilter = (filter) => {
    this.setState(({filter}));
  }

  render() {
    const visiblyData = this.onFilter(this.onSearch(this.state.coffeData, this.state.term), this.state.filter);
    return (
      <HashRouter>
        <div className="app">
          <div className="container container_relative">
            <Header />
          </div>
          <main className="app-content">
          <Routes>
            <Route path='/' element={<Main data={this.state.data} />} />
            <Route path='/our-coffe' element={<Coffe data={visiblyData} 
                                                onChangeSearch={this.onChangeSearch} 
                                                onChangeFilter={this.onChangeFilter} />} />
            <Route path='/for-your-pleasure' element={ <Goods data={this.state.goodsData} />} />
            <Route path='/items' element={<Item />} />
          </Routes>
          </main>
          <Footer /> 
        </div>
      </HashRouter>
    );
  }
}

export default App;
