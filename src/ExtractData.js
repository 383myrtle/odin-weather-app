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
    weatherDescription: data.description,
  };
}

function extractCurrentConditions(data) {
  const { conditions, datetimeEpoch, temp, humidity, precipprob, windspeed } =
    data.currentConditions;
  return { conditions, datetimeEpoch, temp, humidity, precipprob, windspeed };
}

export { search };
