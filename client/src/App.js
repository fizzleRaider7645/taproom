import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import BreweriesDisplay from './components/BreweriesDisplay';
import BreweryDisplay from './components/BreweryDisplay';
import Map from './components/Map';
import mug from './images/mug-main.png';
import './App.css';
require('dotenv').config()

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

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`; 
    document.head.append(script);
}

  fetchFavorites = () => {
    fetch(`http://localhost:3000/breweries`)
      .then(res => res.json())
      .then(json => this.setState({
        receivedIndexResults: true,
        indexResults: {...this.indexResults, breweries: json},
        showResult: {},
        receivedShowResults: false
      }))
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
      <div className="container">
        <header>
          HI
        </header>
        <div className="row">
          
          <div className="col-4" align="center">
            <img src={mug} alt="Logo"></img>
            <h3>CityTap</h3>
            <SearchForm fetchBreweriesByCity={this.fetchBreweriesByCity}/>
          </div>
          
          <div className="col-8" align="center">
            {this.state.receivedIndexResults ? 
              <BreweriesDisplay
                city={this.state.indexResults.city ? 
                  this.state.indexResults.city : ""} 
                breweries={this.state.indexResults.breweries} 
                fetchBreweryById={this.fetchBreweryById}/> : ""}
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            {this.state.receivedShowResults ? 
              <BreweryDisplay brewery={this.state.showResult}/> : ""}
            </div>
          <div className="col-6">
            {this.state.receivedShowResults ?
              <Map latitude={this.state.showResult.latitude} 
                   longitude={this.state.showResult.longitude}/> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
