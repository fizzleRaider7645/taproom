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
      .then(json => this.sortFavoritesByRanking(json))
      .then(sorted => this.setState({
        receivedIndexResults: true,
        indexResults: {...this.indexResults, breweries: sorted},
        showResult: {},
        receivedShowResults: false
      }))
  }

  sortFavoritesByRanking = (json) => {   
    const sorted = json.sort((a,b) => b.ranking - a.ranking)
    return sorted
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

  voteClick = (e) => {
    const breweryId = e.target.id
    const voteType = e.target.className
        fetch(`http://localhost:3000/breweries/${breweryId}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT',                                                              
          body: JSON.stringify( { breweryId: breweryId, voteType: voteType } )                                       
    }).then(res => res.json())
      .then(json => this.sortFavoritesByRanking(json))
      .then(sorted => this.setState({
        receivedIndexResults: true,
        indexResults: {...this.indexResults, breweries: sorted },
        showResult: {},
        receivedShowResults: false
      })).catch(err => console.log(err));  
  }
  

  render() {

    return (
      <div className="container">
        <div className="row">
          
          <div className="col-5" align="center">
            <div className="logo-div">
            <img src={mug} alt="Logo"></img>
            <h3>CityTap</h3>
            <sub>Search and Enjoy...</sub>
            <SearchForm fetchBreweriesByCity={this.fetchBreweriesByCity}/>
            <p id="community-fav-p" onClick={this.fetchFavorites}>See Community Favorites</p>
            </div>
          </div>
          
          <div className="col-7" align="center">
            {this.state.receivedIndexResults ? 
              <BreweriesDisplay
                voteClick={this.voteClick}
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
