import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
    constructor(props) {
        super(props)
    }
   render() {
    let latitude = parseFloat(this.props.latitude)
    let longitude = parseFloat(this.props.longitude)

    const ReactGoogleMap = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter = { { lat: latitude ? latitude : 40.263680, lng: longitude ? longitude : -76.890739} }
        defaultZoom = { 13 }
      >
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