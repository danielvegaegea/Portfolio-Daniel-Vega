// Element
const burgerBtn = document.getElementsByClassName('btn-menu')[0];
const burgerBTNStyle = getComputedStyle(burgerBtn);
const sideBar = document.getElementsByClassName('sidebar')[0];
const mainMenu = document.getElementsByTagName('nav')[0];
let burgerMenu = false;

// Function
const showMenu = function (event) {
  if (!burgerMenu) {
    sideBar.classList.remove('hidden');
    //sideBar.style.width = '99vw';
    mainMenu.style.display = 'flex';
    //mainMenu.style.width = '99vw';
    //mainMenu.style.transition = '6s ease width';
    burgerBtn.textContent = 'X';
    burgerMenu = true;
  } else {
    sideBar.classList.add('hidden');
    //sideBar.style.width = '3.3rem';
    //mainMenu.style.display = 'none';
    burgerBtn.textContent = '☰';
    burgerMenu = false;
  }
  /* Old method
  if (!burgerMenu) {
    //sideBar.style.width = '99vw';
    mainMenu.style.display = 'flex';
    //mainMenu.style.width = '99vw';
    //mainMenu.style.transition = '6s ease width';
    burgerBtn.textContent = 'X';
    burgerMenu = true;
  } else {
    //sideBar.style.width = '3.3rem';
    //mainMenu.style.display = 'none';
    burgerBtn.textContent = '☰';
    burgerMenu = false;
  }
  */
};

const noMobile = function () {
  if (window.innerWidth > 480) {
    sideBar.classList.remove('hidden');
  } else {
    console.log(`bla`);
    sideBar.classList.add('hidden');
  }
};

// Execution
if (window.innerWidth <= 480) {
  //Alternativa: (burgerBTNStyle.visibility == 'visible')
  sideBar.classList.add('hidden');
}

// Event
burgerBtn.addEventListener('click', showMenu);
window.addEventListener('resize', noMobile);
