import React from 'react';
import Map from './Map';
import '../App.css'

const BreweryDisplay = (props) => {
    const brewery = props.brewery
    const longitude = props.brewery.longitude
    const latitude = props.brewery.latitude
    const zip = brewery.postal_code.split("-")[0]
    const type = brewery.brewery_type.slice(0,1).toUpperCase() + brewery.brewery_type.slice(1)
    console.log(brewery)
    const handleSave = (e) => {
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
        <div>
            <h2 id="brewery-display"><a href={brewery.website_url} target="_blank" 
                rel="noopener noreferrer">{brewery.name}</a></h2>
            
            <p>Type: {type}</p>
            <p>{brewery.city}, {brewery.state}</p>
            <p>{brewery.street}</p>
            <p>{zip}</p>
            <Map latitude={latitude} longitude={longitude}/>
            <p onClick={handleSave} id="save" 
                value={brewery.id}>Add to Community Favorites</p>
        </div>
    )
}

export default BreweryDisplay
