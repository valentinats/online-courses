import { cardsData } from "./main.js";
import { renderCards } from "./filters.js";

const searchInput = document.querySelector(".search__input");
let currentFilter = "All";

function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  let filtered = cardsData;

  if (currentFilter !== "All") {
    filtered = filtered.filter((card) => card.course === currentFilter);
  }

  if (query) {
    filtered = filtered.filter((card) =>
      card.title.toLowerCase().includes(query)
    );
  }

  renderCards(filtered);
}

searchInput.addEventListener("input", () => {
  filterCards();
});

export function setCurrentFilter(filter) {
  currentFilter = filter;
  filterCards();
}
