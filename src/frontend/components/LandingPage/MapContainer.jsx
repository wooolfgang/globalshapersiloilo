import React from 'react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [{
      lat: 10.720321,
      lng: 122.562019,
    }, {
      lat: 10.7186,
      lng: 122.5477,
    }, {
      lat: 10.7603,
      lng: 122.5260,
    }]
  }

  retrieveMapUrl() {
    let markersString = '';
    this.markers.forEach((marker) => {
      markersString +=
        `&markers=color:red%7Clabel:P%7C${marker.lat},${marker.lng}`;
    });
    return `https://maps.googleapis.com/maps/api/staticmap?center=10.720321,122.562019
        &zoom=12&size=500x500&scale=2
        ${markersString}
        &key=AIzaSyBaklewD90QQZTb8YRJLJ_k7XoZMIBM25U`
  }

  render() {
    return (
      <div style={{ height: `100%`, width: `100%` }}>
        <img
          style={{ height: `100%`, width: `100%` }}
          src={this.retrieveMapUrl()}
          alt="" />
      </div>
    );
  }
}

export default MapContainer;