
import React, { useEffect, useRef, useState } from 'react'
import "./map.css"
import mapboxgl from "mapbox-gl"

function Map() {

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX
    console.log(mapboxgl.accessToken)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lat, setLat] = useState(23.2592471);
    const [lng, setLng] = useState(72.6524628);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
        });


        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });


  return (
    <div>

{/* <div ref={mapContainer} className="map-container" /> */}
mapbox container

<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />


    </div>
  )
}

export default Map