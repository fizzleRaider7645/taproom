import React from 'react'
import '../App.css'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const BreweryDisplay = (props) => {
    const brewery = props.brewery
    console.log(brewery)
    const longitude = props.longitude
    const latitude = props.latitude
    const zip = brewery.postal_code.split("-")[0]
    const type = brewery.brewery_type.slice(0,1).toUpperCase() + brewery.brewery_type.slice(1)
    const mapStyles = {
        width: '100%',
        height: '100%'
      };
    return (
        <div>
            <h2 id="brewery-display"><a href={brewery.website_url} target="_blank">{brewery.name}</a></h2>
            
            <p>Type: {type}</p>
            
            <p>{brewery.city}, {brewery.state}</p>

            <p>{brewery.street}</p>
            
            <p>{zip}</p>

        </div>
    )
}

export default BreweryDisplay
