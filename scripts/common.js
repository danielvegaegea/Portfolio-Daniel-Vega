// Element
const burgerBtn = document.getElementsByClassName('btn-menu')[0];
const sideBar = document.getElementsByClassName('sidebar')[0];
const mainMenu = document.getElementsByTagName('nav')[0];
let burgerMenu = false;

// Event
burgerBtn.addEventListener('click', showMenu);

// Execution
function showMenu(event) {
  if (!burgerMenu) {
    sideBar.style.width = '100vw';
    mainMenu.style.display = 'flex';
    burgerBtn.textContent = 'X';
    burgerMenu = true;
  } else {
    sideBar.style.width = '3.3rem';
    mainMenu.style.display = 'none';
    burgerBtn.textContent = '☰';
    burgerMenu = false;
  }
}
