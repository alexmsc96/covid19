import React, { useState, useEffect } from "react";
import { fetchHistoricalDataApi, fetchCountryChartData } from "../../api";
import CountryPicker from "../CountryPicker/CountryPicker";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

export default function Chart() {
  const [historicalData, setHistoricalData] = useState({});
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setHistoricalData(await fetchHistoricalDataApi());
    };
    fetchApi();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchApi = await fetchCountryChartData(country);
    setCountryData(fetchApi);
  };

  const dates = historicalData.data
    ? Object.keys(historicalData.data.cases)
    : null;

  const cases = historicalData.data
    ? Object.values(historicalData.data.cases)
    : null;

  const recovered = historicalData.data
    ? Object.values(historicalData.data.recovered)
    : null;

  const deaths = historicalData.data
    ? Object.values(historicalData.data.deaths)
    : null;

  const lineChart = historicalData.data ? (
    <Line
      data={{
        labels: dates.map((date) => date),
        datasets: [
          {
            data: cases.map((data) => data),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: false,
            pointHoverBorderWidth: 4,
          },
          {
            data: deaths.map((data) => data),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: false,
          },
          {
            data: recovered.map((data) => data),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  if (!countryData) {
    return (
      <div className={styles.container}>
        <h1>Evolution of the global cases of the novel Coronavirus</h1>
        {lineChart}
        <h2>Choose a country to see their evolution throughout the pandemic</h2>
        <CountryPicker
          className={styles.countryPicker}
          handleCountryChange={handleCountryChange}
        />
        <h2>No available data for the current country</h2>
      </div>
    );
  }

  const countryDates = countryData.cases
    ? Object.keys(countryData.cases)
    : null;

  const countryCases = countryData.cases
    ? Object.values(countryData.cases)
    : null;

  const countryDeaths = countryData.deaths
    ? Object.values(countryData.deaths)
    : null;

  const countryRecovered = countryData.recovered
    ? Object.values(countryData.recovered)
    : null;

  const countryLineChart = countryDates ? (
    <Line
      data={{
        labels: countryDates.map((date) => date),
        datasets: [
          {
            data: countryCases.map((data) => data),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: false,
            pointHoverBorderWidth: 4,
          },
          {
            data: countryDeaths.map((data) => data),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: false,
          },
          {
            data: countryRecovered.map((data) => data),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <h1>Evolution of the global cases of the novel Coronavirus</h1>
      {lineChart}
      <h2>Select a country to see their evolution throughout the pandemic</h2>
      <CountryPicker
        className={styles.countryPicker}
        handleCountryChange={handleCountryChange}
      />
      {countryLineChart}
    </div>
  );
}
