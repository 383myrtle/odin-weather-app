import { searchInput } from "./DOMElements";
import { search } from "./ExtractData";
import { updateWeather } from "./DisplayController";
import { getCurrentUnitGroup, setCurrentUnitGroup } from "./UnitHandler";

let currentCity = "Ulaanbaataar";

async function handleSearch(e) {
  e.preventDefault();
  currentCity = searchInput.value;
  searchInput.value = "";
  await renderCurrentCity();
}

async function changeUnitGroup(e) {
  const unitGroup = e.currentTarget.value;
  setCurrentUnitGroup(unitGroup);
  await renderCurrentCity();
}

async function renderCurrentCity() {
  const result = await search(currentCity, getCurrentUnitGroup());
  if (!result) {
    alert("Error. City not found. Please try again.");
    return;
  }
  updateWeather(result.cityData, result.currentConditions, result.forecast);
  console.log(result.cityData);
  console.log(result.currentConditions);
  console.log(result.forecast);
}

export { handleSearch, changeUnitGroup, renderCurrentCity };
