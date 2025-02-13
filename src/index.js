import "./styles.css";
import "./normalize.css";

let cityData;
let currentConditions;

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("submit-search");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchInput.value;
  searchInput.value = "";
  search(city);
});

async function search(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=7CZC8PYPKKCMVFDUTXRRJ2YS4&contentType=json`,
    );
    if (!response.ok) {
      throw new Error("Error, please enter a valid city.");
    }
    const data = await response.json();
    console.log(data);

    cityData = getCityData(data);
    currentConditions = getCurrentConditions(data);

    console.log(cityData);
    console.log(currentConditions);
  } catch (error) {
    console.log(error);
  }
}

function getCityData(data) {
  const address = data.resolvedAddress.split(", ");
  return {
    city: address[0],
    province: address[1],
    country: address[2],
    weatherDescription: data.description,
  };
}

function getCurrentConditions(data) {
  const { conditions, datetimeEpoch, temp, humidity, precip, precipprob } =
    data.currentConditions;
  return { conditions, datetimeEpoch, temp, humidity, precip, precipprob };
}
