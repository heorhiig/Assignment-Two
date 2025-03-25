const bikes = [
  {
    title: "Sporty 4",
    description: "The iconic frame brought to a new performance height as a sporty, active ride.",
    price: "$2,590",
    img: "images/screenshot-1.png"
  },
  {
    title: "City Cruiser",
    description: "A smooth and stylish ride perfect for urban commuting.",
    price: "$1,990",
    img: "images/screenshot--2.png"
  },
  {
    title: "Mountain King",
    description: "Built for rugged terrain and extreme adventures.",
    price: "$3,200",
    img: "images/screenshot--3.png"
  },
  {
    title: "Sporty 4",
    description: "The iconic frame brought to a new performance height as a sporty, active ride.",
    price: "$2,590",
    img: "images/screenshot-1.png"
  },
  {
    title: "City Cruiser",
    description: "A smooth and stylish ride perfect for urban commuting.",
    price: "$1,990",
    img: "images/screenshot--2.png"
  },
  {
    title: "Mountain King",
    description: "Built for rugged terrain and extreme adventures.",
    price: "$3,200",
    img: "images/screenshot--3.png"
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".recommended__products");

  if (!container) {
    console.error("Container .recommended__products not found!");
    return;
  }

  bikes.forEach((bike) => {
    const article = document.createElement("article");
    article.classList.add("product", "recommended__product");

    article.innerHTML = `
      <a href="#">
        <img class="product__photo" src="${bike.img}" alt="${bike.title}">
      </a>
      <h3 class="product__title">${bike.title}</h3>
      <p class="product__description">${bike.description}</p>
      <p class="product__price">${bike.price}</p>
    `;

    container.appendChild(article);
  });
});
