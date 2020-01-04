import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
const img = require('../images/mug.png');
class Map extends Component {
    constructor(props) {
        super(props)
    }
   render() {
    let latitude = parseFloat(this.props.latitude)
    let longitude = parseFloat(this.props.longitude)

    const ReactGoogleMap = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter = { { lat: latitude ? latitude : 40.264759, lng: longitude ? longitude : -76.889007} }
        defaultZoom = { 17 }
      >
        <Marker icon={img} position={{ lat: latitude, lng: longitude}} />
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