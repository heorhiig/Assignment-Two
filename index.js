const tDate = document.querySelector('.date');

const today = new Date();

let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

tDate.innerHTML = today.toLocaleDateString("en-IE",options);