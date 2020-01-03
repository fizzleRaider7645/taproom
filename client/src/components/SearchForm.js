import React, { useState } from 'react'


const SearchForm = (props) => {
    const [city, setCity] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.fetchBreweriesByCity(city)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={ (e) => setCity(e.target.value) } type="text" placeholder="Enter City Name" value={city}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm