import '../App.css'

import React from 'react'

const BreweriesDisplay = (props) => {
const breweries = props.breweries.map((brewery) => {
    return <li onClick={props.fetchBreweryById} 
                key={brewery.id} 
                value={brewery.id}>Name: {brewery.name} - 
                Type: {brewery.brewery_type.charAt(0).toUpperCase() + 
                brewery.brewery_type.slice(1) }</li>
})
    return (
        <ul>
            {breweries}
        </ul>
    )
} 

export default BreweriesDisplay
