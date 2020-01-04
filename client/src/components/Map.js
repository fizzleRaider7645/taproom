import React from 'react'
import { GoogleMapReact, withScriptjs, withGoogleMap } from 'google-map-react'; 

const Map = (props) => {
    return (
        <div>
            <GoogleMapReact 
                defaultZoom={10}
                defaultCenter={{lng: props.longitude, lat: props.latitude}}
                />
        </div>
    )
}

const Wrapper = withScriptjs(withGoogleMap(Map));

export default Map