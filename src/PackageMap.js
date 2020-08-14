import React, {useState} from "react";
import {GoogleMap, 
      withScriptjs, 
      withGoogleMap, 
      Marker, 
      InfoWindow,
      DirectionsRenderer, 
      } from "react-google-maps";
// import * as locationData from "./locationSample.json"
import mapStyles from "./mapStyles";

class PackageMap extends React.Component {
  constructor(){
    super();
    this.state = {
      parcel: {},
      selectedLocation: null,
      openInfo: false,
      startPinLat:  null,
      startPinLng:  null,
      destinationPinLat: null,
      destinationPinLng: null,
      direction: null,
    }
  }

  componentDidMount() {
    const {parcel} = this.props;

    var geocoder= new window.google.maps.Geocoder();

    geocoder.geocode( { 'address': parcel.start}, function(results, status) {
      if (status == 'OK') {
        this.setState({startPinLat: parseFloat(results[0].geometry.location.lat())});
        this.setState({startPinLng: parseFloat(results[0].geometry.location.lng())});
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    }.bind(this));

    geocoder.geocode( { 'address': parcel.destination}, function(results, status) {
      if (status == 'OK') {
        this.setState({destinationPinLat: parseFloat((results[0].geometry.location.lat()))});
        this.setState({destinationPinLng: parseFloat((results[0].geometry.location.lng()))});
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    }.bind(this));

    
    // load api data here then replace at origin and destination in DirectionService.route
    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route({
      'origin': this.state.parcel.start,
      'destination': this.state.parcel.end,
      'travelMode': window.google.maps.TravelMode.DRIVING}, function(result, status) {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({direction: result});
      }else {
        alert('Route was not successful for the following reason: ' + status);
      }

    }.bind(this));
  }

  render() {
    const {parcel} = this.props;

    if((!parcel.location) && (!this.state.startPinLat)){
      return <div></div>
    }
    else{
      console.log(this.state.direction);
      return ( 
          <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:  13.756331, lng:100.501762}}
            defaultOptions={{styles: mapStyles}}
          >
          
          <Marker 
            key={parcel.name} 
            position={{
              lat: parcel.location[1],
              lng: parcel.location[0]
            }}
            onClick={() =>{
              this.setState({selectedLocation: parcel, openInfo: true});
            }}
            icon={{
              url:'/package.png',
              scaledSize: new window.google.maps.Size(35, 35)
            }}
          />

          <Marker 
            key={parcel.senderID} 
            position={{
              lat: this.state.startPinLat,
              lng: this.state.startPinLng
            }}
          />

          <Marker 
            key={parcel.receiverID} 
            position={{
              lat: this.state.destinationPinLat,
              lng: this.state.destinationPinLng
            }}
          />
          <DirectionsRenderer directions={this.state.direction} options={{markerOptions: {visible: false}}}/>
      
        {this.state.openInfo &&(
            <InfoWindow 
              position={{
                lat: this.state.selectedLocation.location[1],
                lng: this.state.selectedLocation.location[0],
              }}
              onCloseClick= {()=>{
                this.setState({openInfo: false});
              }}
            >
              <div> 
                <h2>{this.state.selectedLocation.name}</h2>
                <p><b>The package is being delivered from the following address:</b></p>
                <p><b>{this.state.selectedLocation.start}</b></p>
                <p><b>Estimate time of arrival: {this.state.selectedLocation.estTime} minutes</b></p>
              </div>
            </InfoWindow>             
              
        )}
        </GoogleMap>
      );
    }
  }
}

export default withScriptjs(withGoogleMap(PackageMap));