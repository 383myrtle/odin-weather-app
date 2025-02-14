const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("submit-search");
const weatherIconLarge = document.querySelector(".weather-icon-large");

const sidebar = document.querySelector(".sidebar");
const weatherDetails = document.querySelector(".weather-details");

const cityName = document.querySelector(".city-name");
const countryName = document.querySelector(".country-name");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");

export {
  searchInput,
  searchBtn,
  weatherIconLarge,
  cityName,
  countryName,
  temperature,
  weatherDescription,
  sidebar,
  weatherDetails,
};
