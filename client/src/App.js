import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'

class App extends Component {
  fetchBreweriesByCity(name) {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`)
      .then(res => res.json())
      .then(json => console.log(json))
  }
  
  render() {
    return (
      <div className="App">
        <SearchForm fetchBreweriesByCity={this.fetchBreweriesByCity}/>
      </div>
    );
  }
}

export default App;
