import {
  cityName,
  countryName,
  temperature,
  weatherDescription,
  feelsLike,
  humidity,
  windSpeed,
  precipChance,
  sidebar,
} from "./DOMElements";


const updateWeather = function (cityData, currentConditions, forecast) {
  cityName.textContent = cityData.city;
  countryName.textContent = cityData.province
    ? cityData.province + ", " + cityData.country
    : cityData.country;
  weatherDescription.textContent = cityData.description;

  temperature.textContent = currentConditions.temp;
  feelsLike.textContent = currentConditions.feelslike;
  humidity.textContent = currentConditions.humidity;
  windSpeed.textContent = currentConditions.windspeed;
  precipChance.textContent = currentConditions.precipprob + "%";

    forecast.forEach(day => {
        const dayCard = document.createElement("div");
        dayCard.classList.add("forecast-day");
        dayCard.innerHTML = `
                    <h3>${(new Date(day.datetimeEpoch*1000)).toDateString()}</h3>
                    <p class="temperature"><img src="" alt="Weather Icon" class="weather-icon-small">${day.temp}</p>

        `
        sidebar.appendChild(dayCard);
    });
};

export { updateWeather };
