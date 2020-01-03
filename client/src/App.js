import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import BreweriesDisplay from './components/BreweriesDisplay';

class App extends Component {
  constructor() {
    super()
    this.state = {
      receivedIndexResults: false,
      receivedShowResults: true,
      indexResults: {},
      showResult: {},
    }
  }
  
  
  fetchBreweriesByCity = (name) => {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`)
      .then(res => res.json())
      .then(json => this.setState({
        indexResults: true,
        results: json
      }));
  }
  
  fetchBreweryById = (e) => {
    fetch(`https://api.openbrewerydb.org/breweries/${e.target.value}`)
      .then(res => res.json())
      .then(json => this.setState({
        receivedShowResults: true,
        results: json
      }));
  } 

  render() {

    return (
      <div className="App">
        <SearchForm fetchBreweriesByCity={this.fetchBreweriesByCity}/>
        {this.state.receivedIndexResults ? <BreweriesDisplay breweries={this.state.results} fetchBreweryById={this.fetchBreweryById}/> : ""}
      </div>
    );
  }
}

export default App;
