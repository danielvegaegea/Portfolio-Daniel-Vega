// Element
const bodyDiv = document.getElementsByClassName('background')[0];
const menuBtn = document.getElementsByClassName('btn-menu')[0];
var menuBtnStyle = getComputedStyle(menuBtn).visibility;
const mainMenu = document.getElementsByTagName('nav')[0];
var menuStyle = getComputedStyle(mainMenu).visibility;
const mainMenuDev = document.getElementsByClassName('menu')[0];
const mainMenuDes = document.getElementsByClassName('menu')[1];
var mainMenuStyle = getComputedStyle(mainMenuDev).visibility;
const subMenuDev = document.getElementsByClassName('dev-sub-menu')[0];
const subMenuDes = document.getElementsByClassName('des-sub-menu')[0];
var subDevStyle = getComputedStyle(subMenuDev).visibility;
var subDesStyle = getComputedStyle(subMenuDes).visibility;
const inProgress = document.getElementsByClassName('indev');

// Event
menuBtn.addEventListener('click', showMenu);
mainMenuDev.addEventListener('click', showMenuDev);
mainMenuDes.addEventListener('click', showMenuDes);
for (element of inProgress) {
  element.addEventListener('click', showInProgress);
}

// Execution
// MENU
function showMenu(event) {
  if (menuStyle === 'collapse') {
    menuStyle = 'visible';
    mainMenu.style.visibility = 'visible';
    mainMenu.style.display = 'flex';
    mainMenuDev.style.visibility = 'visible';
    mainMenuDev.style.display = 'flex';
    mainMenuDes.style.visibility = 'visible';
    mainMenuDes.style.display = 'flex';
    backgroundConfig();
  } else {
    menuStyle = 'collapse';
    mainMenu.style.visibility = 'collapse';
    mainMenu.style.display = 'none';
    mainMenuDev.style.visibility = 'collapse';
    mainMenuDev.style.display = 'none';
    mainMenuDes.style.visibility = 'collapse';
    mainMenuDes.style.display = 'none';
    subMenuDev.style.visibility = 'collapse';
    subMenuDev.style.display = 'none';
    subMenuDes.style.visibility = 'collapse';
    subMenuDes.style.display = 'none';
    backgroundConfig();
  }
}

//SUB-MENU
function showMenuDev(event) {
  if (subDevStyle === 'collapse') {
    subDevStyle = 'visible';
    subMenuDev.style.visibility = 'visible';
    subMenuDev.style.display = 'flex';
    subDesStyle = 'collapse';
    subMenuDes.style.visibility = 'collapse';
    subMenuDes.style.display = 'none';
  } else {
    subDevStyle = 'collapse';
    subMenuDev.style.visibility = 'collapse';
    subMenuDev.style.display = 'none';
    subDesStyle = 'collapse';
    subMenuDes.style.visibility = 'collapse';
    subMenuDes.style.display = 'none';
  }
  backgroundConfig();
}
function showMenuDes(event) {
  if (subDesStyle === 'collapse') {
    subDesStyle = 'visible';
    subMenuDes.style.visibility = 'visible';
    subMenuDes.style.display = 'flex';
    subDevStyle = 'collapse';
    subMenuDev.style.visibility = 'collapse';
    subMenuDev.style.display = 'none';
  } else {
    subDesStyle = 'collapse';
    subMenuDes.style.visibility = 'collapse';
    subMenuDes.style.display = 'none';
    subDevStyle = 'collapse';
    subMenuDev.style.visibility = 'collapse';
    subMenuDev.style.display = 'none';
  }
  backgroundConfig();
}
function backgroundConfig() {
  if (menuBtnStyle === 'visible') {
    if (menuStyle === 'collapse') {
      bodyDiv.style.backgroundPosition = '0 2.6rem';
    } else {
      if (subDevStyle === 'visible' || subDesStyle === 'visible') {
        bodyDiv.style.backgroundPosition = '0 17.6rem';
      } else {
        bodyDiv.style.backgroundPosition = '0 8.6rem';
      }
    }
  }
}
function showInProgress() {
  alert('This content is still in development.');
}
