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
    fontBtn.classList.add('fontButtonActive');
    footer.classList.add('bigFontsFooter');
    main.classList.add('bigFontsMain');
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.add('bigFontsBtns');
    });
    bigFontsSt = true;
  } else {
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
  // Gets image from `path`and inserts it as img tag in
  // `image-container`.
  const imageZoomed = document.createElement('img');
  imageZoomed.classList.add('image');
  imageZoomed.src = path;
  imageModalContainer.appendChild(imageZoomed);
  // Change classes. See CSS for more details.
  modalContainer.classList.remove('modal-close');
  modalContainer.classList.add('modal-open');
};

const closeModal = function () {
  const deleteImage = imageModalContainer.firstChild;

  setTimeout(function () {
    imageModalContainer.removeChild(deleteImage);
    modalContainer.classList.remove('modal-open');
  }, 200);
  modalContainer.classList.add('modal-close');
};

// Execution
if (window.innerWidth <= 480) {
  // Executed once to hide menu after loading the web.
  //Alternative: (burgerBtnStyle.visibility == 'visible')
  sideBar.classList.add('hidden');
}

// Event
//    Responsivity
burgerBtn.addEventListener('click', showMenu);
window.addEventListener('resize', noMobile);
//    Big Fonts
fontBtn.addEventListener('click', bigFonts);

//    Modal Images
modalClose.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);
Array.from(modalTrigger).forEach((index) => {
  index.addEventListener('click', function (e) {
    let zoomingImage = index.firstElementChild.src;
    openModal(zoomingImage);
  });
});
