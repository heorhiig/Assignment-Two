const STORAGE_KEY = "bikesData";
const ADMIN_PASSWORD = "admin123";


const addBtn = document.getElementById("add");
const modalAdd = document.getElementById("modalAdd");
const addModal = document.getElementById("addBikeModal");
const passwordModal = document.getElementById("passwordModal");
const form = document.getElementById("bikeForm");
const passwordInput = document.getElementById("adminPassword");
const passwordError = document.getElementById("passwordError");
const submitPasswordBtn = document.getElementById("submitPassword");
const closeButtons = document.querySelectorAll(".close");
const productContainer = document.querySelector(".recommended__products");


const addBike = (title, description, price, img) => {
  const bikes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const newBike = { title, description, price, img };
  bikes.unshift(newBike);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bikes));
  showBikes(bikes);
};


const loadBikes = () => {
  const bikes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  showBikes(bikes);
};


const showBikes = (bikes) => {
  const source = document.getElementById("bike-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template({ bikes });
  productContainer.innerHTML = html;
};


submitPasswordBtn.addEventListener("click", () => {
  if (passwordInput.value === ADMIN_PASSWORD) {
    passwordModal.style.display = "none";
    addModal.style.display = "block";
    passwordError.textContent = "";
    passwordInput.value = "";
  } else {
    passwordError.textContent = "Incorrect password.";
  }
});



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const loader = document.querySelector(".loader");
  loader.style.display = "flex";
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const img = document.getElementById("image").value;

  if (title && description && price && img) {
    setTimeout(() => {
      addBike(title, description, price, img);
      form.reset();
      addModal.style.display = "none";
      loader.style.display = "none";
    }, 1000); 
  }
});


addBtn.addEventListener("click", () => {
  passwordModal.style.display = "block";
});

modalAdd.addEventListener("click", () => {
  addModal.style.display = "none";
})


closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    addModal.style.display = "none";
    passwordModal.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", loadBikes);
