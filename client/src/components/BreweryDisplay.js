import React from 'react';
import { handleSave } from '../actions/BreweryActions';

const BreweryDisplay = (props) => {
    const brewery = props.brewery
    const zip = brewery.postal_code.split("-")[0]
    const type = brewery.brewery_type.slice(0,1).toUpperCase() + brewery.brewery_type.slice(1)
    
    return (
        <div id="brewery-display">
            <header id="brewery-header"></header>
                <h2 id="brewery-h2">
                    <a id="brewery-a-tag" href={brewery.website_url} 
                    data-toggle="tooltip" 
                    title="Go to Brewery!" target="_blank" 
                    rel="noopener noreferrer">{brewery.name}</a>
                </h2>
            <p>Type: {type}</p>
            <p>{brewery.city}, {brewery.state}</p>
            <p>{brewery.street}</p>
            <p>{zip}</p>
            <p onClick={ () => handleSave(brewery)} id="save" 
                value={brewery.id}>Add Brewery to Community Favorites</p>
        </div>
    )
}

export default BreweryDisplay
