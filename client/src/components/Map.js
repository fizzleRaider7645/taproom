import React from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import mug from '../images/mug.png';

const Map = (props) => {

    const latitude = parseFloat(props.latitude)
    const longitude = parseFloat(props.longitude)

    const ReactGoogleMap = withGoogleMap(() => (
      <GoogleMap
        defaultCenter = { { lat: latitude ? latitude : 40.264759, lng: longitude ? longitude : -76.889007} }
        defaultZoom = { 17 }
      >
        <Marker icon={mug} position={{ lat: latitude, lng: longitude}} />
      </GoogleMap>
   ));
   return(
      <div id="google-map-div">
        <ReactGoogleMap
          containerElement={ <div style={{ marginLeft:'6%',marginBottom: '15%', height: `500px`, width: '500px', border: 'solid', borderStyle: 'solid' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
};
export default Map;