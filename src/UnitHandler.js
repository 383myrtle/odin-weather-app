const IMPERIAL = "us";
const METRIC = "metric";
const UK = "uk";

let unitGroup = METRIC;

const unitMap = {
  Conditions: "",
  Temperature: "°C",
  Humidity: "%",
  "Chance of precipitation": "%",
  "Wind speed": "kph",
  "Feels like": "°C",
  Sunrise: "",
  Sunset: "",
};

const getCurrentUnitGroup = function () {
  return unitGroup;
};

const setCurrentUnitGroup = function (newUnitGroup) {
  unitGroup = newUnitGroup;
  switch (unitGroup) {
    case IMPERIAL:
      unitMap["Temperature"] = "°F";
      unitMap["Wind speed"] = "mph";
      unitMap["Feels like"] = "°F";
      break;
    case METRIC:
      unitMap["Temperature"] = "°C";
      unitMap["Wind speed"] = "kph";
      unitMap["Feels like"] = "°C";
      break;
    case UK:
      unitMap["Temperature"] = "°C";
      unitMap["Wind speed"] = "mph";
      unitMap["Feels like"] = "°C";
      break;
  }
};

const getUnit = function (key) {
  return unitMap[key];
};

export { getCurrentUnitGroup, setCurrentUnitGroup, getUnit };
