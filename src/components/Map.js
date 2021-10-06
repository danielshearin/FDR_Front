import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import restaurants from './test.json'
import axios from 'axios';


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

    
    // const getRestaurants = () => {
    //   axios
    //     .get("/api/restaurants/")
    //     .then((response) => {
    //       return response.data
    //     })
    //     .catch((err) => console.log(err));
    // };

    // const restaurants = getRestaurants()

    // console.log(restaurants)

    async function getRestaurants() {
      try {
        const {data: response} = await axios.get("/api/restaurants")
        return response
      }
      catch (error) {
        console.log(error);
      }
    }

    const restaurants = getRestaurants()
    console.log(restaurants)
    

    // Create default markers
    restaurants.map((restaurant) => {
    const coordinates = [(restaurant.longitude), (restaurant.latitude)]
    console.log(coordinates)
      new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4));
    //   setLat(map.getCenter().lat.toFixed(4));
    //   setZoom(map.getZoom().toFixed(2));
    // });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};


export default Map