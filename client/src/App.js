import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBreweriesByCity, fetchBreweryById, fetchFavorites } from './actions/BreweryActions';
import SearchForm from './components/SearchForm';
import BreweriesDisplay from './components/BreweriesDisplay';
import BreweryDisplay from './components/BreweryDisplay';
import Map from './components/Map';
import mug from './images/mug-main.png';
import './App.css';
require('dotenv').config()

class App extends Component {

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`; 
    document.head.append(script);
  }


  render() {

    return (
        <div className="container">
          <header></header>
          <div className="row">  
            
            <div className="col-5" align="center">
              <div className="logo-div">
                <img src={mug} alt="Logo"></img>
                <h3>CityTap</h3>
                <sub>Search and Enjoy...</sub>
                <SearchForm fetchBreweriesByCity={this.props.fetchBreweriesByCity}/>
                <p id="community-fav" onClick={this.props.fetchFavorites}>See Community Favorites</p>
              </div>
            </div>

            <div className="col-7" align="center">
              {this.props.receivedIndexResults ? 
                <BreweriesDisplay 
                  breweries={this.props.state.indexResults.breweries}
                  city={this.props.state.indexResults.city ? this.props.state.indexResults.city : ""}
                  fetchBreweryById={this.props.fetchBreweryById}/> 
              : "" }
            </div>
          </div>

          <div className="row">
            
            <div className="col-6">
              {this.props.state.receivedShowResults ? 
                <BreweryDisplay brewery={this.props.state.showResult}/> : ""}
              </div>

            <div className="col-6">
              {this.props.state.receivedShowResults ?
                <Map latitude={this.props.state.showResult.latitude} 
                  longitude={this.props.state.showResult.longitude}/> : ""}
            </div>
          </div>
        </div>
    );
  }
}

const mapStatetoProps = (store) => {
  return ({
      state: store.data,
      receivedIndexResults: store.data.receivedIndexResults,
      receivedShowResults: store.data.receivedShowResults
  })
}

export default connect(mapStatetoProps, { fetchBreweriesByCity, fetchBreweryById, fetchFavorites })(App)
