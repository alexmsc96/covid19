import axios from "axios";

const dataUrl = "https://disease.sh/v2";
const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&q=coronavirus";
const APIKEY = process.env.REACT_APP_API_KEY;

export const fetchData = async () => {
  try {
    const {
      data: {
        cases,
        recovered,
        deaths,
        updated,
        active,
        todayCases,
        todayDeaths,
      },
    } = await axios.get(`${dataUrl}/all`);

    return {
      cases,
      deaths,
      recovered,
      updated,
      active,
      todayCases,
      todayDeaths,
    };
  } catch (error) {}
};

export const fetchCountryChartData = async (country) => {
  try {
    const response = await axios.get(
      `${dataUrl}/historical/${country}?lastdays=60`
    );
    const {
      data: {
        timeline: { cases, deaths, recovered },
      },
    } = response;
    return { cases, deaths, recovered };
  } catch (error) {}
};

export const fetchCountryData = async () => {
  try {
    const { data } = await axios.get(`${dataUrl}/countries`);
    const modifiedData = data.map((country) => ({
      country: country.country,
      cases: country.cases,
      lat: country.countryInfo.lat,
      long: country.countryInfo.long,
      deaths: country.deaths,
      recovered: country.recovered,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchHistoricalDataApi = async () => {
  try {
    const { data } = await axios.get(`${dataUrl}/historical/all?lastdays=60`);
    return {
      data,
    };
  } catch (error) {}
};

export const fetchNewsData = async () => {
  try {
    const {
      data: { articles },
    } = await axios.get(`${newsUrl}&apiKey=${APIKEY}`);
    return articles;
  } catch (error) {}
};
