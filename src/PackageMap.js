import React, {useState} from "react";
import {GoogleMap, 
      withScriptjs, 
      withGoogleMap, 
      Marker, 
      InfoWindow,
      DirectionsRenderer, 
      Polyline} from "react-google-maps";
// import * as locationData from "./locationSample.json"
import mapStyles from "./mapStyles";

class PackageMap extends React.Component {
  constructor(){
    super();
    this.state = {
      parcel: {},
      selectedLoaction: null,
      setSelectedLocation: null,
      googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
      loadingElement: <div style={{height: "100%"}}/>,
      containerElement: <div style={{height: "100%"}}/>,
      mapElement: <div style={{height: "100%"}}/>,

    }
  }
  
  render() {
    const {parcel} = this.props;

    console.log(parcel);
    
    console.log(parcel.location);

    if(!parcel.location){
      return <div></div>
    }
    else{
      return ( 
        <div style={{width:'100vw', height: '100vh'}}> 
          <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:  13.756331, lng:100.501762}}
            defaultOptions={{styles: mapStyles}}
          >
          
          <Marker 
            key={parcel.senderID} 
            position={{
              lat: parcel.location[1],
              lng: parcel.location[0]
            }}
            onClick={() =>{
              this.state.setSelectedLocation(parcel.location)
            }}
            icon={{
              url:'/package.png',
              scaledSize: new window.google.maps.Size(35, 35)
            }}
          />
        )
        
      
              {this.state.selectedLocation &&(                                      //info window, display on click, reset to null on close
              
                <InfoWindow 
                  position={{
                    lat: this.state.selectedLocation.location[1],
                    lng: this.state.selectedLocation.location[0],
                  }}
                  onCloseClick= {()=>{
                    this.state.setSelectedLocation(null);
                  }}
                >
                  <div> 
                    <h2>{this.state.selectedLocation.properties.NAME}</h2>
                    <p><b>The package is being delivered from the following address:</b></p>
                    <p><b>{this.state.selectedLocation.properties.ADDRESS}</b></p>
                    <p><b>Estimate time of arrival: {this.state.selectedLocation.properties.ESTTIME} minutes</b></p>
                    <p><b>{this.state.selectedLocation.properties.PATH}</b></p>
                    
                  </div>
                </InfoWindow>   
                //<Polyline path= {[{lat: 100.5350, lng: 13.7469} ,{lat: 100.5488, lng: 13.7994}]} options={{strokerColor: "#FF0000"}}></Polyline>          
              )}
          </GoogleMap>
      </div>
      );
    }
  }
}

const WrappedMap = withScriptjs(withGoogleMap(PackageMap));

export default PackageMap {
  return( 
    <div style={{width:'100vw', height: '100vh'}}> 
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{height: "100%"}}/>}
      containerElement={<div style={{height: "100%"}}/>}
      mapElement={<div style={{height: "100%"}}/>}  
      />
    </div>
  );
}