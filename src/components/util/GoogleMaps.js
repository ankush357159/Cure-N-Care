import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 19.013786281738504,
      lng: 73.09138022716778,
    },
    zoom: 20,
  };

  render() {
    return (
      <div style={{ height: "50vh", width: "56vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCtOdhMbtaP-Y3wY3yoGcN0yW6jCZvI41o" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.013786281738504}
            lng={73.09138022716778}
            text='My Marker'
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
