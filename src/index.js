import "./styles.css";
import "./normalize.css";
import { searchBtn, unitSelect } from "./DOMElements";
import { handleSearch, changeUnitGroup } from "./EventHandlers";

document.addEventListener("DOMContentLoaded", () => {
  searchBtn.addEventListener("click", handleSearch);
  unitSelect.addEventListener("change", changeUnitGroup);
});
