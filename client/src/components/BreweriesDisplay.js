import '../App.css'

import React from 'react'

const BreweriesDisplay = (props) => {
const breweries = props.breweries.map((brewery) => {
    return <li onClick={props.fetchBreweryById} 
                key={brewery.id} 
                value={brewery.id}
                >{brewery.name}</li>
})
    return (
        <ul>
            {breweries}
        </ul>
    )
} 

export default BreweriesDisplay
