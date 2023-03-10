import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "100vh",
    longitude: -79.3832,
    latitude: 43.6532,
    zoom: 12,
  });

  const myLocation = {
    description: "I'm currently living in Toronto, Canada!",
    latitude: 43.6622,
    longitude: -79.3832,
  };

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/kimberlycao13/ckytceejh000914qf0kn5d87y"
    >
      <Marker latitude={myLocation.latitude} longitude={myLocation.longitude}>
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke--300 fill-green-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Marker>
      <div className="text-green-700 bg-green-200 hover:bg-green-300 font-roboto rounded-sm m-6 p-6 float-left hidden md:block">
        {myLocation.description}
      </div>
    </ReactMapGL>
  );
}

export default Map;
