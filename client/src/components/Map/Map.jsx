import React, { useEffect, useRef, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "./map.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

export default function Map() {
  const mapElement = useRef();

  const [map, setMap] = useState({});

  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);

  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  };

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    };
    const destinations = [];
    let map = tt.map({
      key: process.env.REACT_APP_API_KEY_MAP,
      container: mapElement.current,
      stylesVisibility: {
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    });

    setMap(map);

    const addMarker = () => {
      const popupOffset = {
        bottom: [0, -25],
      };
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(
        "This this you"
      );
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map);

      marker.setPopup(popup).togglePopup();

      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        setLongitude(lngLat.lng);
        setLatitude(lngLat.lat);
      });
    };

    addMarker();

    const createPopup = (text, place) => {
      const popupOffset = {
        bottom: [0, -25],
      };
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(text);

      place.setPopup(popup).togglePopup();
    };

    const markerNewOrlean = new tt.Marker()
      .setLngLat([-90.071533, 29.951065])
      .addTo(map);

    createPopup("New Orlean, USA", markerNewOrlean);

    const markerStonehenge = new tt.Marker()
      .setLngLat([-1.826215, 51.178882])
      .addTo(map);

    createPopup("Stonehenge, UK", markerStonehenge);

    const markerCatemaco = new tt.Marker()
      .setLngLat([-95.11398, 18.42131])
      .addTo(map);
    createPopup("Catemaco, Mexico", markerCatemaco);
    const markerSalem = new tt.Marker()
      .setLngLat([-70.896713, 42.519539])
      .addTo(map);
    createPopup("Salem, USA", markerSalem);
    const markerTriora = new tt.Marker()
      .setLngLat([7.7653, 43.9931])
      .addTo(map);
    createPopup("Triora, Liguria", markerTriora);
    const markerTurin = new tt.Marker()
      .setLngLat([7.6868565, 45.070312])
      .addTo(map);
    createPopup("Turin, Piedmont", markerTurin);
    const markerHolmavik = new tt.Marker()
      .setLngLat([-21.6845875, 65.7021287])
      .addTo(map);
    createPopup("Holmavik, Iceland", markerHolmavik);
    const markerTogo = new tt.Marker()
      .setLngLat([1.478102, 6.233659])
      .addTo(map);
    createPopup("Togoville, Togo", markerTogo);
    const markerHook = new tt.Marker()
      .setLngLat([-6.920556, 52.121389])
      .addTo(map);
    createPopup("The Hook Peninsula, Ireland", markerHook);
    const markerPhnom = new tt.Marker()
      .setLngLat([104.888535, 11.562108])
      .addTo(map);
    createPopup("Phnom Penh, Cambodia", markerPhnom);
    const markerAltay = new tt.Marker()
      .setLngLat([79.782372, 51.696396])
      .addTo(map);
    createPopup("Altai, Russia", markerAltay);
    return () => map.remove();
  }, []);

  return (
    <div className="container">
      <div className="text">
        <h2>Magic places around the world</h2>
        <p>
          The fascination that the occult and the dark arts hold for many of us
          is undeniable. Some people dismiss anything connected with witchcraft
          as mere superstition, but on Halloween, even the most skeptical won’t
          say no to dressing up in a costume, sipping a pumpkin spice latte and
          watching a movie about witches. Whether you’re a practitioner of the
          dark arts or not, we wish you a frighteningly fun Halloween, and we
          have a gift for you: a list of places where witchcraft and esotericism
          play (or have played) a prominent role.
        </p>
      </div>
      <div ref={mapElement} className="map"></div>
    </div>
  );
}
