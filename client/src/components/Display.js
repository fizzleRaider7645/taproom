import React from 'react'

const Display = (props) => {
    const breweries = props.breweries.map((brewery) => <li>{brewery.name}</li>)
    return (
        <ul>
            {breweries}
        </ul>
    )
} 

export default Display
