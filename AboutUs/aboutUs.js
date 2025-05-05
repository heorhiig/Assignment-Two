const textCo = document.querySelector(".description");

const imageContainer = document.createElement("div");
imageContainer.classList.add("hover-images");

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");
const comm = document.querySelector(".comments");
const form = document.querySelector("#form");
const sub = document.querySelector(".sub");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


window.onload = () => {
  loadComm();
};

sub.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const mess = document.querySelector("#mess").value;
  const option = document.querySelector("#option").value;

  if (name && mail && mess) {
    addComm(name, mail, option, mess);
    form.reset(); 
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const mess = document.querySelector("#mess").value;
  const option = document.querySelector("#option").value;

  if (name && mail && mess) {
    addComm(name, mail, option, mess);
    form.reset();
  }
});


const addComm = (name, mail, option, mess) => {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const newComm = { name, mail, option, mess };
  comments.unshift(newComm);
  localStorage.setItem("comments", JSON.stringify(comments));
  showComm(comments);
};

const loadComm = () => {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  showComm(comments);
};

const showComm = (comments) => {
  const source = document.getElementById("comment-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template({ comments });
  comm.innerHTML = html;
};
