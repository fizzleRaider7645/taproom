import '../App.css'
import upArrow from '../images/up-arrow.png';
import downArrow from '../images/down-arrow.png';
import React from 'react'

const BreweriesDisplay = (props) => {
    
    const voteClick = (e) => {
        // fetch
    }

    const breweries = props.breweries.map((brewery) => {
        return <div key={brewery.id}>
                <li onClick={props.fetchBreweryById} 
                    key={brewery.id} 
                    value={brewery.openbrewerydb_id ? brewery.openbrewerydb_id : brewery.id}>
                    {brewery.name}
                    </li>
                        <img onClick={voteClick} id={brewery.id} className="up-arrow" src={upArrow} height="42" width="42"></img>
                        <img onClick={voteClick} id={brewery.id} className="down-arrow" src={downArrow} height="42" width="42"></img>
                </div>
    })

    return (
        <ul id="breweries-ul">
            <h2>{props.city ? props.city : "Community Favorites"}</h2>
            {breweries}
            
        </ul>
    )
} 

export default BreweriesDisplay
