import { cardsData, createCard } from "./main.js";
import { setCurrentFilter } from "./cards.js";

const sectionCards = document.querySelector(".cards");

let displayedCards = [...cardsData];

export function renderCards(cards) {
  sectionCards.classList.add("cards-hidden");

  setTimeout(() => {
    sectionCards.innerHTML = "";
    cards.forEach((card) => {
      sectionCards.appendChild(createCard(card));
    });
    sectionCards.classList.remove("cards-hidden");
  }, 300);
}

function updateCounts() {
  const counts = {
    All: cardsData.length,
    Marketing: 0,
    Management: 0,
    "HR & Recruting": 0,
    Design: 0,
    Development: 0,
  };

  cardsData.forEach((card) => {
    if (counts[card.course] !== undefined) {
      counts[card.course]++;
    }
  });

  Object.keys(counts).forEach((course) => {
    const span = document.querySelector(
      `.filters__count[data-course="${course}"]`
    );
    if (span) span.textContent = counts[course];
  });
}

function setActiveButton(activeFilter) {
  const filterButtons = document.querySelectorAll(".filters__button");
  filterButtons.forEach((btn) => {
    const filter = btn.getAttribute("data-filter");
    if (filter === activeFilter) {
      btn.classList.add("filters__button-active");
    } else {
      btn.classList.remove("filters__button-active");
    }
  });
}

function handleFilter(filter) {
  setCurrentFilter(filter);

  if (filter === "All") {
    displayedCards = [...cardsData];
  } else {
    displayedCards = cardsData.filter((card) => card.course === filter);
  }

  const searchInput = document.querySelector(".search__input");
  const query = searchInput.value.toLowerCase().trim();

  if (query) {
    displayedCards = displayedCards.filter((card) =>
      card.title.toLowerCase().includes(query)
    );
  }
  renderCards(displayedCards);
  updateCounts();
  setActiveButton(filter);
}

renderCards(cardsData);
updateCounts();
setActiveButton("All");

const filterButtons = document.querySelectorAll(".filters__button");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    handleFilter(filter);
  });
});
