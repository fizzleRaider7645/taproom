import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
const mug = require('../images/mug.png');

class Map extends Component {
    constructor(props) {
        super(props)
    }


    // componentDidMount () {
    //     const script = document.createElement("script");
    //     const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    //     script.async = true;
    //     document.body.appendChild(script);
    // }

   render() {
    const latitude = parseFloat(this.props.latitude)
    const longitude = parseFloat(this.props.longitude)

    const ReactGoogleMap = withGoogleMap(() => (
      <GoogleMap
        defaultCenter = { { lat: latitude ? latitude : 40.264759, lng: longitude ? longitude : -76.889007} }
        defaultZoom = { 17 }
      >
        <Marker icon={mug} position={{ lat: latitude, lng: longitude}} />
      </GoogleMap>
   ));
   return(
      <React.Fragment>
        <ReactGoogleMap
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </React.Fragment>
   );
   }
};
export default Map;