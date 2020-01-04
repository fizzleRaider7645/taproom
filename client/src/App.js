import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import BreweriesDisplay from './components/BreweriesDisplay';
import BreweryDisplay from './components/BreweryDisplay';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      receivedIndexResults: false,
      receivedShowResults: false,
      indexResults: {city:"", breweries: {}},
      showResult: {},
    }
  }
  
  
  fetchBreweriesByCity = (name) => {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`)
      .then(res => res.json())
      .then(json => this.setState({
        receivedIndexResults: true,
        indexResults: {...this.indexResults, breweries: json, city: name},
        showResult: {},
        receivedShowResults: false
      })).catch(err => console.log(err));
  }
  
  fetchBreweryById = (e) => {
    fetch(`https://api.openbrewerydb.org/breweries/${e.target.value}`)
      .then(res => res.json())
      .then(json => this.setState({
        receivedShowResults: true,
        showResult: json
      })).catch(err => console.log(err));
  } 

  render() {

    return (
      <div className="App">
        
        <SearchForm fetchBreweriesByCity={this.fetchBreweriesByCity}/>
        
        {this.state.receivedIndexResults ? 
          
          <BreweriesDisplay 
            breweries={this.state.indexResults.breweries} 
            fetchBreweryById={this.fetchBreweryById}/> : ""}
        
        {this.state.receivedShowResults ? 
          
          <BreweryDisplay brewery={this.state.showResult}/> : ""}
      
      </div>
    );
  }
}

export default App;
