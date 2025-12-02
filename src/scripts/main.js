import "../styles/main.scss";

export const cardsData = [
  {
    title: "The Ultimate Google Ads Training Course",
    course: "Marketing",
    image: "src/assets/curator-1.png",
    price: "$100",
    name: "by Jerome Bell",
  },
  {
    title: "Product Management Fundamentals",
    course: "Management",
    image: "src/assets/curator-2.png",
    price: "$480",
    name: "by Marvin McKinney",
  },
  {
    title: "HR  Management and Analytics",
    course: "HR & Recruting",
    image: "src/assets/curator-3.png",
    price: "$200",
    name: "by Leslie Alexander Li",
  },
  {
    title: "Brand Management & PR Communications",
    course: "Marketing",
    image: "src/assets/curator-4.png",
    price: "$530",
    name: "by Kristin Watson",
  },
  {
    title: "Graphic Design Basic",
    course: "Design",
    image: "src/assets/curator-5.png",
    price: "$500",
    name: "by Guy Hawkins",
  },
  {
    title: "Business Development Management",
    course: "Management",
    image: "src/assets/curator-6.png",
    price: "$400",
    name: "by Dianne Russell",
  },
  {
    title: "Highload Software Architecture",
    course: "Development",
    image: "src/assets/curator-7.png",
    price: "$600",
    name: "by Brooklyn Simmons",
  },
  {
    title: "Human Resources – Selection and Recruitment",
    course: "HR & Recruting",
    image: "src/assets/curator-8.png",
    price: "$150",
    name: "by Kathryn Murphy",
  },
  {
    title: "User Experience. Human-centered Design",
    course: "Design",
    image: "src/assets/curator-9.png",
    price: "$240",
    name: "by Cody Fisher",
  },
];

function getCourseColor(course) {
  switch (course) {
    case "Marketing":
      return "#03cea4";
    case "Management":
      return "#5a87fc";
    case "HR & Recruting":
      return "#f89828";
    case "Design":
      return "#f52f6e";
    case "Development":
      return "#7772f1";
    default:
      return "#ffc107";
  }
}

export function createCard({ title, course, image, price, name }) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.className = "card__image";

  const infoContainer = document.createElement("div");
  infoContainer.className = "card__info";

  const courseEl = document.createElement("p");
  courseEl.className = "card__course";
  courseEl.textContent = course;

  courseEl.style.backgroundColor = getCourseColor(course);
  courseEl.style.padding = "4px 8px";

  const titleEl = document.createElement("h2");
  titleEl.className = "card__title";
  titleEl.textContent = title;

  const priceNameContainer = document.createElement("div");
  priceNameContainer.className = "card__price-name";

  const priceEl = document.createElement("p");
  priceEl.className = "card__price";
  priceEl.textContent = price;

  const separator = document.createElement("div");
  separator.className = "card__separator";
  separator.textContent = "|";

  const nameEl = document.createElement("p");
  nameEl.className = "card__name";
  nameEl.textContent = name;

  priceNameContainer.appendChild(priceEl);
  priceNameContainer.appendChild(separator);
  priceNameContainer.appendChild(nameEl);

  infoContainer.appendChild(courseEl);
  infoContainer.appendChild(titleEl);
  infoContainer.appendChild(priceNameContainer);

  card.appendChild(img);
  card.appendChild(infoContainer);

  return card;
}
