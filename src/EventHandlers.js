import { searchInput } from "./DOMElements";
import { search } from "./ExtractData";

async function handleSearch(e) {
  e.preventDefault();
  const city = searchInput.value;
  searchInput.value = "";
  const result = await search(city);
  console.log(result.cityData);
  console.log(result.currentConditions);
}

export { handleSearch };
