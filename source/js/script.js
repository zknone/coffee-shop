/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector("#burger-button");
function switchMenu() {
  document
    .querySelector(".header__nav-list")
    .classList.toggle("header__nav-list--opened");
}
burgerButton.addEventListener("click", switchMenu);

const map = L.map("map").setView([59.9686902, 30.3174989], 16);
const icon = L.icon({
  iconUrl: "../img/map-pin.svg",
  iconSize: [38, 50],
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([59.9686902, 30.3174989], {icon: icon}).addTo(map).openPopup();
