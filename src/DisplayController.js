import {
  cityName,
  countryName,
  weatherDescription,
  sidebar,
  weatherDetails,
  weatherIconLarge,
  temperature,
} from "./DOMElements";
import cloudy from "./assets/cloudy.svg";
import rainy from "./assets/rainy.svg";
import thunderstorm from "./assets/thunderstorm.svg";
import partlyCloudy from "./assets/partly_cloudy.svg";
import sunny from "./assets/sunny.svg";

const iconMap = {
  cloudy: cloudy,
  rain: rainy,
  thunderstorm: thunderstorm,
  "partly-cloudy-day": partlyCloudy,
  "clear-day": sunny,
};

const updateWeather = function (cityData, currentConditions, forecast) {
  cityName.textContent = cityData.city;
  countryName.textContent = cityData.province
    ? cityData.province + ", " + cityData.country
    : cityData.country;
  weatherDescription.textContent = cityData.description;
  weatherIconLarge.src = iconMap[cityData.icon];
  temperature.textContent = currentConditions.Temperature;

  weatherDetails.textContent = "";
  Object.keys(currentConditions).forEach((key) => {
    const weatherDetail = document.createElement("p");
    weatherDetail.textContent = key;
    const value = document.createElement("span");
    value.textContent = currentConditions[key];

    weatherDetail.appendChild(value);
    weatherDetails.appendChild(weatherDetail);
  });

  sidebar.textContent = "";
  forecast.forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.classList.add("forecast-day");
    dayCard.innerHTML = `
        <h3>${new Date(day.datetimeEpoch * 1000).toDateString()}</h3>
        <p class="temperature"><img src="${iconMap[day.icon]}" alt="Weather Icon" class="weather-icon-small">${day.temp}</p>
        `;
    sidebar.appendChild(dayCard);
  });
};

export { updateWeather };
