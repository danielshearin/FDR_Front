import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker } from 'mapbox-gl';
import geoJson from './chicago-parks.json'



mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsc2hlYXJpbiIsImEiOiJja3U1bmZteXAwcmttMnBtcmpmYmRvc3FxIn0.4A5oFR0BXqoK60ppEgngJQ';


const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-82.5540);
    const [lat, setLat] = useState(35.5946);
    const [zoom, setZoom] = useState(11);
    
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        });

        
        return (
            <div>
                <div ref={mapContainer} className="map-container" 
                />
                
            </div>
        );

}



export default Map