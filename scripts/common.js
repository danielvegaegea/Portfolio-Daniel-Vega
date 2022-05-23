// Element

//    Mobile Burger Menu
const burgerBtn = document.getElementsByClassName('btn-menu')[0];
const sideBar = document.getElementsByClassName('sidebar')[0];
let burgerMenuSt = false;

//    Font Button
const fontBtn = document.getElementsByClassName('btn-font')[0];
let bigFontsSt = false;
const sideBtns = document.getElementsByClassName('navButton');
const footer = document.getElementsByTagName('footer')[0];
const main = document.getElementsByTagName('main')[0];

//    Modal
let modalTrigger = document.getElementsByClassName('zoom');
//let modalTrigger = document.getElementsByClassName('zoom')[0];
const modalContainer = document.getElementsByClassName('modal-container')[0];
const imageModalContainer = document.getElementsByClassName(
  'modal-image-container',
)[0];
const modalClose = document.getElementsByClassName('close-btn')[0];
let modal = document.querySelectorAll('.modal')[0];

//    Disabled but maintained as alternative.
//const burgerBtnStyle = getComputedStyle(burgerBtn);
//getElementsByClassName('navButton');
//const mainMenu = document.getElementsByTagName('nav')[0];

// Function
const showMenu = function (event) {
  // If the burger button push, toggle the menu hiding by setting
  // classes in several tags.
  if (!burgerMenuSt) {
    sideBar.classList.remove('hidden');
    burgerBtn.textContent = 'X';
    burgerMenuSt = true;
  } else {
    sideBar.classList.add('hidden');
    burgerBtn.textContent = '☰';
    burgerMenuSt = false;
  }
};

const bigFonts = function (event) {
  // If button push, sets classes to increase font-size in several tags
  // and sets the button as active.
  if (!bigFontsSt) {
    console.log(`A`);
    fontBtn.classList.add('fontButtonActive');
    footer.classList.add('bigFontsFooter');
    main.classList.add('bigFontsMain');
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.add('bigFontsBtns');
    });
    bigFontsSt = true;
  } else {
    console.log(`B`);
    fontBtn.classList.remove('fontButtonActive');
    footer.classList.remove('bigFontsFooter');
    main.classList.remove('bigFontsMain');
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.remove('bigFontsBtns');
    });
    bigFontsSt = false;
  }
};

const noMobile = function () {
  // Watches the width of the system to toggle the hiding of the
  // sidebar.
  if (window.innerWidth > 480) {
    sideBar.classList.remove('hidden');
  } else {
    sideBar.classList.add('hidden');
  }
};

const openModal = function (path) {
  console.log(`a`);
  console.log(path);
  const imageZoomed = document.createElement('img');
  imageZoomed.classList.add('image');
  imageZoomed.src = path;
  imageModalContainer.appendChild(imageZoomed);
  console.log('c');
  modalContainer.classList.remove('modal-close');
  modalContainer.classList.add('modal-open');
  //wrong
  //modalContainer.classList.toggle('modal-close');
};

const closeModal = function () {
  console.log(`b`);
  const deleteImage = imageModalContainer.firstChild;
  imageModalContainer.removeChild(deleteImage);
  modalContainer.classList.remove('modal-open');
  modalContainer.classList.add('modal-close');
  //wrong
  //modalContainer.classList.toggle('modal-close');
};

// Execution
if (window.innerWidth <= 480) {
  // Executed once to hide menu after loading the web.
  //Alternative: (burgerBtnStyle.visibility == 'visible')
  sideBar.classList.add('hidden');
}

// Event
burgerBtn.addEventListener('click', showMenu);
fontBtn.addEventListener('click', bigFonts);
window.addEventListener('resize', noMobile);
Array.from(modalTrigger).forEach((index) => {
  //console.log(index);
  index.addEventListener('click', function (e) {
    let zoomingImage = index.firstElementChild.src;
    openModal(zoomingImage);
  });
  //modalTrigger[index.addEventListener('click', openModal);
});
modalClose.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);

//bigFontsBtn
//bigFonts
