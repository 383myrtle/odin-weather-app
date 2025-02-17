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
import partlyCloudyDay from "./assets/partly_cloudy.svg";
import clearDay from "./assets/sunny.svg";
import partlyCloudyNight from "./assets/partly_cloudy_night.svg";
import clearNight from "./assets/clear_night.svg";
import { format, isTomorrow } from "date-fns";

const iconMap = {
  cloudy: cloudy,
  rain: rainy,
  thunderstorm: thunderstorm,
  "partly-cloudy-day": partlyCloudyDay,
  "clear-day": clearDay,
  "partly-cloudy-night": partlyCloudyNight,
  "clear-night": clearNight,
};

const updateWeather = function (cityData, currentConditions, forecast) {
  clearContents(weatherDetails);
  clearContents(sidebar);

  setWeatherOverview(
    cityData.city,
    cityData.province,
    cityData.country,
    cityData.description,
    cityData.icon,
    currentConditions.Temperature,
  );

  Object.keys(currentConditions).forEach((key) => {
    const detail = createWeatherDetail(key, currentConditions);
    weatherDetails.appendChild(detail);
  });

  forecast.forEach((day) => {
    const dayCard = createDayCard(day);
    sidebar.appendChild(dayCard);
  });
};

// Helper functions

function clearContents(element) {
  element.textContent = "";
}

function setWeatherOverview(city, province, country, desc, icon, temp) {
  cityName.textContent = city;
  countryName.textContent = province ? province + ", " + country : country;
  weatherDescription.textContent = desc;
  weatherIconLarge.src = iconMap[icon];
  temperature.textContent = temp;
}

function createWeatherDetail(name, currentConditions) {
  const weatherDetail = document.createElement("p");
  weatherDetail.textContent = name;
  const value = document.createElement("span");
  value.textContent = currentConditions[name];
  weatherDetail.appendChild(value);
  return weatherDetail;
}

function createDayCard(day) {
  const dayCard = document.createElement("div");
  dayCard.classList.add("forecast-day");
  const date = getDateString(day.datetimeEpoch);
  dayCard.innerHTML = `
      <h3>${date}</h3>
      <p class="temperature"><img src="${iconMap[day.icon]}" alt="Weather Icon" class="weather-icon-small">${day.temp}</p>
      `;
  return dayCard;
}

function getDateString(epochTime) {
  const date = new Date(epochTime * 1000);
  console.log("Date from the function: " + date.toString());
  if (isTomorrow(date)) {
    return "Tomorrow";
  } else {
    return format(date, "eeee, do MMM");
  }
}

export { updateWeather };
