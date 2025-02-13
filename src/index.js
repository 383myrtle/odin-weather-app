import "./styles.css";
import "./normalize.css";
import { searchBtn } from "./DOMElements";
import { handleSearch } from "./EventHandlers";

document.addEventListener("DOMContentLoaded", () => {
  searchBtn.addEventListener("click", handleSearch);
});
