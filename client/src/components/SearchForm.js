import React, { useState } from 'react'


const SearchForm = (props) => {
    const [city, setCity] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.target[0].value === "") {
            alert('Must Enter a City')
            return
        } else {
            props.fetchBreweriesByCity(city)
            setCity("")
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <input onChange={ (e) => setCity(e.target.value) } 
                type="text" 
                placeholder="Enter City Name" 
                value={city}></input>
            <button type="submit">Submit</button>
        </form>

    )
}

export default SearchForm