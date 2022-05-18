// Element
const burgerBtn = document.getElementsByClassName('btn-menu')[0];
const burgerBTNStyle = getComputedStyle(burgerBtn);
const sideBar = document.getElementsByClassName('sidebar')[0];
const fontBtn = document.getElementsByClassName('btn-font')[0];
const bigFontsSt = false;
const sideBtns = document.getElementsByClassName('navButton');
const mainMenu = document.getElementsByTagName('nav')[0];
let burgerMenuSt = false;

// Function
const showMenu = function (event) {
  if (!burgerMenuSt) {
    sideBar.classList.remove('hidden');
    burgerBtn.textContent = 'X';
    burgerMenuSt = true;
  } else {
    sideBar.classList.add('hidden');
    burgerBtn.textContent = '☰';
    burgerMenuSt = false;
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
const bigFonts = function (event) {
  if (!burgerMenuSt) {
    console.log(`A`);
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.remove('bigFontsBtn');
    });

    burgerMenuSt = true;
  } else {
    console.log(`B`);
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.add('bigFontsBtn');
    });
    burgerMenuSt = false;
  }
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
fontBtn.addEventListener('click', bigFonts);
window.addEventListener('resize', noMobile);

//bigFontsBtn
//bigFonts
