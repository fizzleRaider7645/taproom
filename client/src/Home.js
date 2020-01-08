import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import mug from './images/mug-main.png';
import App from './App';
class Home extends Component {
    state = {
        enter: false,
        localBreweries: []
    }

    componentDidMount() {
        fetch(`https://freegeoip.app/json/`)
            .then(res => res.json())
            .then(res => this.fetchLocalBreweries(res.city))
    }


    fetchLocalBreweries = (city) => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
            .then(res => res.json())
            .then(json => {
                this.setState({localBreweries: json})
            })
    }

    render() {
        const breweries = Object.values(this.state.localBreweries)
        const randomIndex = Math.floor(Math.random() * 10) + 1
        const localBreweryOfTheDay = breweries[randomIndex]
        return (
            <div className="home-container">
                <div align="center">
                    <img id="home-logo" src={mug} alt="Logo"></img>
                    <h1>CityTap</h1>
                    <h3 id="home-h3">{`Local Brewery of the Day:`}</h3>
                </div>
                
                <div>
                    <h2 id="localBreweryOfTheDay">{localBreweryOfTheDay ? <a href={localBreweryOfTheDay.website_url}>{localBreweryOfTheDay.name}</a> : ""}</h2>
                </div>
                <h2 id="enter-h2"><a id="enter-link" onClick={this.props.handleClick} className="hover-magic">Enter</a></h2>
            </div>
        )
    }
}

export default Home