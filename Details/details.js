const details = [
  {
    title: "Auto Unlock",
    description:
      "The app senses when you're nearby to unlock automatically. GPS tracking so you know where your bike is and can track it anytime.",
    images: ["../images/image--6.png", "../images/image--8.png"],
  },
  {
    title: "Range & Integrated lights",
    description:
      "The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.",
    images: ["../images/image--9.png", "../images/image--7.png"],
  },
  {
    title: "Hydraulic disc brakes & Lightweight",
    description:
      "Brakes with total stopping power the second you make contact. The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.",
    images: ["../images/image--11.png", "../images/image--10.png"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".details__wrapper");
  if (!container) {
    console.error("Container . details not found!");
    return;
  }
  const templateSrc = document.getElementById("detail-template").innerHTML;
  const template = Handlebars.compile(templateSrc);
  const html = template({ details });

  container.insertAdjacentHTML("afterbegin", html);
});