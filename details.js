const details = [
  {
    title: "Auto Unlock",
    description:
      "The app senses when you're nearby to unlock automatically. GPS tracking so you know where your bike is and can track it anytime.",
    images: ["images/image--6.png", "images/image--8.png"],
  },
  {
    title: "Range & Integrated lights",
    description:
      "The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.",
    images: ["images/image--9.png", "images/image--7.png"],
  },
  {
    title: "Hydraulic disc brakes & Lightweight",
    description:
      "Brakes with total stopping power the second you make contact. The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.",
    images: ["images/image--11.png", "images/image--10.png"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".details__wrapper");

  if (!container) {
    console.error("Container .details__wrapper not found!");
    return;
  }

  details.forEach((detail) => {
    const article = document.createElement("article");
    article.classList.add("detail");

    article.innerHTML = `
      <div class="detail__photos">
        <a href="#" class="detail__link detail__link--wide">
          <img class="detail__photo" src="${detail.images[0]}" alt="${detail.title}">
        </a>
        <a href="#" class="detail__link detail__link--square">
          <img class="detail__photo" src="${detail.images[1]}" alt="${detail.title}">
        </a>
      </div>
      <h3 class="detail__title">${detail.title}</h3>
      <p class="detail__description">${detail.description}</p>
    `;

    container.insertBefore(article, container.querySelector(".button__wrapper"));
  });
});
