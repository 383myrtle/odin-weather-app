import { searchInput } from "./DOMElements";
import { search } from "./ExtractData";
import { updateWeather } from "./DisplayController";

async function handleSearch(e) {
  e.preventDefault();
  const city = searchInput.value;
  searchInput.value = "";
  const result = await search(city)
  if (!result){
    alert("Error. City not found. Please try again.")
    return
  }
  updateWeather(result.cityData, result.currentConditions);
  console.log(result.cityData);
  console.log(result.currentConditions);
}

export { handleSearch };
