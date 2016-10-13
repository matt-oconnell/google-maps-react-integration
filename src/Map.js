import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  render() {
    const wrapper = <div className="map"></div>
    const markers = this.props.markers.map((m, i) => {
      const marker = {
        position: {
          lat: m.location.lat,
          lng: m.location.lng
        }
      }
      return <Marker key={i} {...marker} />
    })
    return (
      <GoogleMapLoader
        containerElement={ wrapper }
        googleMapElement={
          <GoogleMap
              defaultZoom={15}
              defaultCenter={this.props.center}
              options={{streetViewControl: false, mapTypeControl: false}}>
              {markers}
          </GoogleMap>
      } />
    );
  }
}

export default Map;
