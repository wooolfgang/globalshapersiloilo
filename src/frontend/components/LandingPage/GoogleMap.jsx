import React from 'react';

class GoogleMap extends React.Component {
  retrieveMapUrl() {
    const { markers } = this.props;
    let markersString = '';
    markers.forEach((marker) => {
      markersString +=
        `&markers=color:red%7Clabel:P%7C${marker.lat},${marker.lng}`;
    });
    return `https://maps.googleapis.com/maps/api/staticmap?center=10.720321,122.562019
        &zoom=12&size=1200x400&scale=1
        ${markersString}
        &key=AIzaSyBaklewD90QQZTb8YRJLJ_k7XoZMIBM25U`;
  }

  render() {
    return (
      <img
        src={this.retrieveMapUrl()}
        alt="google-map"
      />
    );
  }
}

export default GoogleMap;
