import '../App.css'

import React from 'react'

const BreweryDisplay = (props) => {
    return (
        <div>
            {props.brewery.name}
        </div>
    )
} 

export default BreweryDisplay
