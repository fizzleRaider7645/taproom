import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import mug from '../images/mug-main.png'
import '../App.css';

const Home = () => {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-5" align="center">
                    <div className="logo-div">
                    <img src={mug} alt="Logo"></img>
                    <h3>CityTap</h3>
                    <sub>It's What the City has on Tap...</sub>
                    <p className="hover-magic">Search for Breweries</p>
                    <p id="community-fav-p">See Community Favorites</p>
              </div>
          </div>
          
          <div className="col-7" align="center">
            
          </div>
        </div>

        <div className="row">
          
          <div className="col-6">
          
            </div>

          <div className="col-6">
           
          </div>
        </div>
      </div>
        </Router>
    )

}


export default Home