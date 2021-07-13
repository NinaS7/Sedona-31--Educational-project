const searchButton = document.querySelector(".search-button");
let  popup= document.querySelector(".reservation");
const form = document.querySelector(".reservation-form");
const data = form.querySelector(".reservation-data");
const people = form.querySelector(".reservation-people");

popup.classList.add("popup-close");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-show");
  popup.classList.toggle("popup-close");
});

form.addEventListener("submit", function (evt) {
  if (!data.value || !people.value) {
    evt.preventDefault();
    popup.classList.add("error");
  }
});

