const textCo = document.querySelector(".description");
  
const imageContainer = document.createElement("div");
imageContainer.classList.add("hover-images");
  
const images = [
  "images/frst.png",
  "images/scnd.png",
  "images/thrd.png",
];
  
images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("hover-image");
  imageContainer.appendChild(img);
});
  
textCo.after(imageContainer);
  
textCo.addEventListener("mouseenter", () => {
  imageContainer.classList.add("visible");
});
  
textCo.addEventListener("mouseleave", () => {
  imageContainer.classList.remove("visible");
});
