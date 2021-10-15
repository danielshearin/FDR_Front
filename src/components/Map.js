import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { Divider, Container } from "semantic-ui-react";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsc2hlYXJpbiIsImEiOiJja3U1bmZteXAwcmttMnBtcmpmYmRvc3FxIn0.4A5oFR0BXqoK60ppEgngJQ';


function Map ( {data} ) {
  console.log(data)
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-82.57);
  const [lat, setLat] = useState(35.593);
  const [zoom, setZoom] = useState(13);
  // const { data } = props

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });


// MARKERS
    let restaurants
    var markers = [];

    const clearMarkers =() => {
      markers.forEach((marker) => marker.remove());
      console.log('markers cleared')
      markers = [];
    };
    
    const populateMakers = (data) => {

      return (
        <>
      {!data
      ? (

      // Place Default Markers
      restaurants = axios.get("/api/restaurants")
      .then(response => {
        const restaurants = response.data
        restaurants.map((restaurant) => {
          const coordinates = [(restaurant.longitude), (restaurant.latitude)]
          let marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(new mapboxgl.Popup()
              .trackPointer()
              .setHTML(`<h4>${restaurant.name}</h4>
              <p>${restaurant.phone}<br />
              ${restaurant.street}</p>
              <img src=${restaurant.photo} maxWidth: "auto"> </img>`)
              )
            .addTo(map);
          markers.push(marker)
          });
      })
      )
      : (

    // Place New Markers for Search Results (needs work)
      <div>
      {
        function drawMarkers(data) {
        clearMarkers();
        data.map((coordPair) => {
        let marker = new mapboxgl.Marker()
          .setLngLat(coordPair)
          // .setPopup(new mapboxgl.Popup()
          //   .setHTML())
          .addTo(map);
        markers.push(marker)
        console.log('new markers drawn')
      })}
      }
      </div>
      )
    }
    </>
      )
    }
    populateMakers(data);
    console.log(data)
    
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'imperial',
      profile: 'mapbox/driving'
    });
    map.addControl(directions, 'top-left');
    

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');


    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });



    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <div className="map-container" ref={mapContainerRef} />
      <Divider hidden/>
    </Container>
  );
};

export default Map