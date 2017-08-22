import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React from 'react';

const Map = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 10.720321, lng: 122.562019 }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

class MapContainer extends React.Component {
  state = {
    markers: [{
      position: {
        lat: 10.720321,
        lng: 122.562019,
      },
      key: `Philippines`,
      defaultAnimation: 2,
    }],
  };

  handleMapLoad = (map) => {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  // handleMapClick = (event) => {
  //   // const nextMarkers = [
  //   //   ...this.state.markers,
  //   //   {
  //   //     position: event.latLng,
  //   //     defaultAnimation: 2,
  //   //     key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
  //   //   },
  //   // ];
  //   // this.setState({
  //   //   markers: nextMarkers,
  //   // });

  //   // if (nextMarkers.length === 3) {
  //   //   this.props.toast(
  //   //     `Right click on the marker to remove it`,
  //   //     `Also check the code!`
  //   //   );
  //   // }
  // }

  handleMarkerRightClick = (targetMarker) => {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <div style={{ height: `100%` }}>
        <Map
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}

export default MapContainer;