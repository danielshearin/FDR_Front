import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { Divider, Container } from "semantic-ui-react";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsc2hlYXJpbiIsImEiOiJja3U1bmZteXAwcmttMnBtcmpmYmRvc3FxIn0.4A5oFR0BXqoK60ppEgngJQ';


function Map ( {data} ) {
  // console.log(data)
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-82.57);
  const [lat, setLat] = useState(35.593);
  const [zoom, setZoom] = useState(13);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      });



    data.map((restaurant) => {
      const coordinates = [(restaurant.longitude), (restaurant.latitude)]
      let marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup()
          .trackPointer()
          .setHTML(`<h4>${restaurant.name}</h4>
            <p>${restaurant.phone}<br />
            ${restaurant.street}</p>
            <img src='https://five-dollar-lunch.herokuapp.com${restaurant.photo}'' width="150" height="100"> </img>`)
          )
        .addTo(map);
      });


    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'imperial',
      profile: 'mapbox/driving-traffic'
    });
  
    map.addControl(directions, 'top-left');

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
    );

    // Clean up on unmount
    return () => map.remove();
  }); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <div className="map-container" ref={mapContainerRef} />
      <Divider hidden/>
    </Container>
  );
};

export default Map