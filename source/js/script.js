/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector("#burger-button");
function switchMenu() {
  document.querySelector(".header__nav-list").classList.toggle("header__nav-list--opened");
}
burgerButton.addEventListener("click", switchMenu);

