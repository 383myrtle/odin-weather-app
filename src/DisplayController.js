import {
  cityName,
  countryName,
  temperature,
  weatherDescription,
  feelsLike,
  humidity,
  windSpeed,
  precipChance,
} from "./DOMElements";

const updateWeather = function (cityData, currentConditions) {
  cityName.textContent = cityData.city;
  countryName.textContent = cityData.province
    ? cityData.province + ", " + cityData.country
    : cityData.country;
  temperature.textContent = currentConditions.temp;
  weatherDescription.textContent = cityData.description;
  feelsLike.textContent = currentConditions.feelslike;
  humidity.textContent = currentConditions.humidity;
  windSpeed.textContent = currentConditions.windspeed;
  precipChance.textContent = currentConditions.precipprob + "%";
};

export { updateWeather };
