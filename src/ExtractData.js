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
    return {
      cityData: extractCityData(data),
      currentConditions: extractCurrentConditions(data),
      forecast: extractForecastData(data),
    };
  } catch (error) {
    console.log(error);
  }
}

function extractCityData(data) {
  const address = data.resolvedAddress.split(", ");
  return {
    city: address[0],
    province: address[2] ? address[1] : null,
    country: address[2] ? address[2] : address[1],
    description: data.description,
  };
}

function extractCurrentConditions(data) {
  const {
    conditions,
    datetimeEpoch,
    temp,
    humidity,
    precipprob,
    windspeed,
    feelslike,
  } = data.currentConditions;
  return {
    conditions,
    datetimeEpoch,
    temp,
    humidity,
    precipprob,
    windspeed,
    feelslike,
  };
}

function extractForecastData(data) {
  const forecast = [];
  data.days.forEach((day, index) => {
    if (index >= 5){
      return forecast;
    }
    const { datetimeEpoch, conditions, temp, icon } = day;
    forecast.push({ datetimeEpoch, conditions, temp, icon });
  });
  return forecast;
}

export { search };
