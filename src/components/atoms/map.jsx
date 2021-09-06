import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.073380264031!2d77.663251!3d13.030999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae114c0a9edd6d%3A0x904986f115377782!2sRelictrio%20-%20Offshore%20Development%20center%20in%20india%20%7C%20Recruitment%20services%20%7C%20IT%20Services!5e0!3m2!1sen!2sin!4v1630297529111!5m2!1sen!2sin" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}