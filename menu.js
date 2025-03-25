async function loadMenu() {
  const response = await fetch('menu.html'); 
  const menuHtml = await response.text(); 
  document.body.insertAdjacentHTML('beforeend', menuHtml); 


  document.querySelector('.icon--menu').addEventListener('click', openMenu);
  document.querySelector('.icon--close').addEventListener('click', closeMenu);
}


function openMenu() {
  document.getElementById("menu").classList.add("open");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("open");
}


window.addEventListener('DOMContentLoaded', loadMenu);
