/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector("#burger-button");
function switchMenu() {
  document.querySelector("nav").classList.toggle("header-nav--opened");
}
burgerButton.addEventListener("click", switchMenu);
