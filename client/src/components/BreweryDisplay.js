import React from 'react';
import '../App.css'

const BreweryDisplay = (props) => {
    const brewery = props.brewery
    const zip = brewery.postal_code.split("-")[0]
    const type = brewery.brewery_type.slice(0,1).toUpperCase() + brewery.brewery_type.slice(1)
    
    const handleSave = (e) => {
        alert('Saved...')
        fetch(`http://localhost:3000/breweries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({brewery: brewery})
        }).then(res => res.json())
          .catch(err => console.log(err))
    }
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
            <p onClick={handleSave} id="save" 
                value={brewery.id}>Add Brewery to Community Favorites</p>
        </div>
    )
}

export default BreweryDisplay
