import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchComplete: false,
      results: {}
    }
  }
  
  
  fetchBreweriesByCity = (name) => {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`)
      .then(res => res.json())
      .then(json => this.setState({
        searchComplete: true,
        results: json
      }));
  }  
  render() {

    return (
      <div className="App">
        <SearchForm fetchBreweriesByCity={this.fetchBreweriesByCity}/>
        {this.state.searchComplete ? <Display breweries={this.state.results} /> : ""}
      </div>
    );
  }
}

export default App;
