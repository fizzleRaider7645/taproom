import * as types from './ActionTypes';
import { RAILS_API_URL } from './ApiUrls';

export const fetchBreweriesByCity = (name) => {
    return dispatch => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}`)
            .then(res => res.json())
            .then(json => dispatch({
                type: types.GET_BREWERIES_BY_CITY, payload: {city: name, breweries: json }
        }));
    }

}

export const fetchBreweryById = (e) => {
    return dispatch => {
        fetch(`https://api.openbrewerydb.org/breweries/${e.target.value}`)
            .then(res => res.json())
            .then(json => dispatch({
                type: types.GET_BREWERY_BY_ID, payload: json
            }))
    }
}

export const fetchFavorites = () => {
    return dispatch => {
        fetch(`http://localhost:3000/breweries`)
        .then(res => res.json())
        .then(json => sortFavoritesByRanking(json))
        .then(sorted => dispatch({
            type: types.GET_FAVORITE_BREWERIES, payload: {city: "", breweries: sorted}
        }))
    }
  }

const sortFavoritesByRanking = (json) => {   
    const sorted = json.sort((a,b) => b.ranking - a.ranking)
    return sorted
}
  
export const voteClick = (e) => {
    const breweryId = e.target.id
    const voteType = e.target.className
    return dispatch => {
            fetch(`http://localhost:3000//breweries/${breweryId}`, {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'PATCH',                                                              
              body: JSON.stringify( { breweryId: breweryId, voteType: voteType } )                                       
        }).then(res => res.json())
          .then(json => sortFavoritesByRanking(json))
          .then(sorted => dispatch({
                type: types.GET_FAVORITE_BREWERIES, payload: {city: "", breweries: sorted}
            })).catch(err => console.log(err))
    }
  }

  export const handleSave = (brewery) => {
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