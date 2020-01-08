import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import mug from './images/mug-main.png';
// import BreweriesDisplay from './components/BreweriesDisplay';

class Home extends Component {
    state = {
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
        console.log(localBreweryOfTheDay)

        return (
            <Router>
                <div className="container">
                    <div align="center">
                        <img id="home-logo" src={mug} alt="Logo"></img>
                        <h1>CityTap</h1>
                        <h3 id="home-h3">{`Local Brewery of the Day:`}</h3>
                    </div>

                    <div>
                        <h2 id="localBreweryOfTheDay">{localBreweryOfTheDay ? <a href={localBreweryOfTheDay.website_url}>{localBreweryOfTheDay.name}</a> : ""}</h2>
                    </div>
                    <h2 class="hover-magic" id="enter-h2">Enter</h2>
                </div>
          </Router>
        )
    }
}

export default Home