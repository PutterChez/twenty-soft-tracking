import React, {useState} from "react";
import {GoogleMap, 
      withScriptjs, 
      withGoogleMap, 
      Marker, 
      InfoWindow,
      DirectionsRenderer, 
      Polyline} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose"



const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2O0PeIeA6wWaEF24oAQGcWJx-DszCaIM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(13.7469, 100.5350),
        destination: new window.google.maps.LatLng(13.7506,100.7943),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(13.756331, 100.501762)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  
);

export default function PackageMap() {
  return( 
    <div> 
    <MapWithADirectionsRenderer />
      
    </div>
  );
}

