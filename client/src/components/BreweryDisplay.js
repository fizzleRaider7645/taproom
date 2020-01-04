import React from 'react'
import '../App.css'

const BreweryDisplay = (props) => {
    const brewery = props.brewery
    console.log(brewery)
    // const longitude = props.longitude
    // const latitude = props.latitude
    const zip = brewery.postal_code.split("-")[0]
    const type = brewery.brewery_type.slice(0,1).toUpperCase() + brewery.brewery_type.slice(1)
    
    const handleSave = (e) => {
        fetch(`http://localhost:3000/breweries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({brewery: brewery})
        }).then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
    return (
        <div>
            <h2 id="brewery-display"><a href={brewery.website_url} target="_blank">{brewery.name}</a></h2>
            <p>Type: {type}</p>
            <p>{brewery.city}, {brewery.state}</p>
            <p>{brewery.street}</p>
            <p>{zip}</p>
    <p onClick={handleSave} id="save" value={brewery.id}>Add to Community Favorites</p>
        </div>
    )
}

export default BreweryDisplay
