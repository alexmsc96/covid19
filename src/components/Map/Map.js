import React, { useState, useEffect } from "react";
import { fetchCountryData } from "../../api";
import GoogleMapReact from "google-map-react";
import logo from "../../images/location.png";
import NumberFormat from "react-number-format";

import styles from "./Map.module.css";

export default function Map() {
  const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setCountryData(await fetchCountryData());
    };
    fetchApi();
  }, []);

  const countriesLocation = countryData.map((country, i) => {
    return (
      <div
        key={i}
        lat={country.lat}
        lng={country.long}
        className={styles.marker}
      >
        <img className={styles.pin} alt="Pin" src={logo} />
        <NumberFormat
          value={country.cases}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(value) => (
            <div style={{ color: "black", fontSize: ".8rem" }}>{value}</div>
          )}
        />
        <NumberFormat
          value={country.deaths}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(value) => (
            <div style={{ color: "red", fontSize: ".8rem" }}>{value}</div>
          )}
        />
        <NumberFormat
          value={country.recovered}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(value) => (
            <div style={{ color: "green", fontSize: ".8rem" }}>{value}</div>
          )}
        />
      </div>
    );
  });

  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${APIKEY}` }}
        defaultCenter={{ lat: 46, lng: 25 }}
        defaultZoom={5}
      >
        {countriesLocation}
      </GoogleMapReact>
    </div>
  );
}
