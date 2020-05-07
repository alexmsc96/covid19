import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryData } from "../../api";
import styles from "./CountryPicker.module.css";

export default function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountryData());
    };
    fetchApi();
  }, []);
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        className={styles.NativeSelect}
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Please select a country</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country.country}>
            {country.country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
