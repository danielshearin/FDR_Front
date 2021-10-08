import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { Divider } from "semantic-ui-react";


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsc2hlYXJpbiIsImEiOiJja3U1bmZteXAwcmttMnBtcmpmYmRvc3FxIn0.4A5oFR0BXqoK60ppEgngJQ';


const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-82.5540);
  const [lat, setLat] = useState(35.5946);
  const [zoom, setZoom] = useState(12);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

// Place Default Markers
    const restaurants = axios.get("/api/restaurants")
    .then(response => {
      const restaurants = response.data
      restaurants.map((restaurant) => {
        const coordinates = [(restaurant.longitude), (restaurant.latitude)]
        new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
        });
  })
    

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
    <div>
      <div className="map-container" ref={mapContainerRef} />
      <Divider hidden/>
    </div>
  );
};


export default Map