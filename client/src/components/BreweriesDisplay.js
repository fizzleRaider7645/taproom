import upArrow from '../images/up-arrow.png';
import downArrow from '../images/down-arrow.png';
import React from 'react';
import '../App.css';

const BreweriesDisplay = (props) => {
    var breweries = props.breweries.map((brewery) => {
        return <div className="list-div" key={brewery.id}>
                <li onClick={props.fetchBreweryById} 
                    key={brewery.id} 
                    value={brewery.openbrewerydb_id ? brewery.openbrewerydb_id : brewery.id}>
                    {brewery.name}
                    </li>
                       <span>{!props.city ? <img onClick={props.voteClick} 
                                           id={brewery.id} 
                                           className="up" 
                                           src={upArrow}></img> : ""}
                             {!props.city ? <img onClick={props.voteClick} 
                                            id={brewery.id} 
                                            className="down" 
                                            src={downArrow}></img> : ""}
                    </span>
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
