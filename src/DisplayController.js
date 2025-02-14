import {
  cityName,
  countryName,
  weatherDescription,
  sidebar,
  weatherDetails,
} from "./DOMElements";

const updateWeather = function (cityData, currentConditions, forecast) {
  cityName.textContent = cityData.city;
  countryName.textContent = cityData.province
    ? cityData.province + ", " + cityData.country
    : cityData.country;
  weatherDescription.textContent = cityData.description;

  Object.keys(currentConditions).forEach((key) => {
    const weatherDetail = document.createElement("p");
    weatherDetail.textContent = key;
    const value = document.createElement("span");
    value.textContent = currentConditions[key];
    
    weatherDetail.appendChild(value);
    weatherDetails.appendChild(weatherDetail);
  });

  forecast.forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.classList.add("forecast-day");
    dayCard.innerHTML = `
        <h3>${new Date(day.datetimeEpoch * 1000).toDateString()}</h3>
        <p class="temperature"><img src="" alt="Weather Icon" class="weather-icon-small">${day.temp}</p>
        `;
    sidebar.appendChild(dayCard);
  });
};

export { updateWeather };
