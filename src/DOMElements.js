const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("submit-search");
const weatherImage = document.querySelector(".weather-icon");

const cityName = document.querySelector(".city-name");
const countryName = document.querySelector(".country-name");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const precipChance = document.querySelector(".precipitation-chance");

export {
  searchInput,
  searchBtn,
  weatherImage,
  cityName,
  countryName,
  temperature,
  weatherDescription,
  feelsLike,
  humidity,
  windSpeed,
  precipChance,
};
