// Element

//    Mobile Burger Menu
const burgerBtn = document.getElementsByClassName('btn-menu')[0];
const sideBar = document.getElementsByClassName('sidebar')[0];
let burgerMenuSt = false;

//    Font Button
const fontBtn = document.getElementsByClassName('btn-font')[0];
let bigFontsSt = false;
let bigFontsLocalSt = localStorage.getItem('bigFontsMode');
const sideBtns = document.getElementsByClassName('nav-btn');
const footer = document.getElementsByTagName('footer')[0];
const main = document.getElementsByTagName('main')[0];

//    Dark Theme Button
const thmBtn = document.getElementsByClassName('btn-thm')[0];
let dkThemeSt = false;
let dkThemeLocalSt = localStorage.getItem('darkThemeMode');
const bodyTg = document.getElementsByTagName('body')[0];

//    Modal
let modalTrigger = document.getElementsByClassName('zoom');
const modalContainer = document.getElementsByClassName('modal-container')[0];
const imageModalContainer = document.getElementsByClassName(
  'modal-image-container',
)[0];
const modalClose = document.getElementsByClassName('close-btn')[0];

//    Disabled but maintained as alternative.
//const burgerBtnStyle = getComputedStyle(burgerBtn);
//getElementsByClassName('nav-btn');
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

  if (event == undefined) {
    //Triggered if the local key is true when loading the page.
    bigFontsSt = false;
  }

  if (!bigFontsSt) {
    // Addomg 'font-btm-active' class when proced.
    fontBtn.classList.add('font-btn-active');
    footer.classList.add('big-fonts-footer');
    main.classList.add('big-fonts-main');
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.add('big-fonts-btn');
    });

    // Setting flags.
    bigFontsSt = true;
    bigFontsLocalSt = true;
  } else {
    // Removing 'font-btm-active' class when proced.
    fontBtn.classList.remove('font-btn-active');
    footer.classList.remove('big-fonts-footer');
    main.classList.remove('big-fonts-main');
    Array.from(sideBtns).forEach((sideBtn) => {
      sideBtn.classList.remove('big-fonts-btn');
    });

    // Setting flags.
    bigFontsSt = false;
    bigFontsLocalSt = false;
  }
  // Saving the flag to Local Storage.
  localStorage.setItem('bigFontsMode', bigFontsSt);
};

const darkTheme = function (event) {
  // If button push, sets classes to set the Dark theme and sets the button
  //  as active.
  if (!dkThemeSt) {
    // Adding 'dark-theme' class when proced.
    bodyTg.classList.add('dark-theme');
    // Setting flags.
    dkThemeSt = true;
  } else {
    // Removing 'dark-theme' class when proced.
    bodyTg.classList.remove('dark-theme');
    // Setting Flags
    dkThemeSt = false;
  }
  // Saving the flag to Local Storage.
  localStorage.setItem('darkThemeMode', dkThemeSt);
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

const openModal = function (path, caption) {
  // Gets image from `path`and inserts it as img tag in
  // `image-container`.
  const imageZoomed = document.createElement('img');
  const imageCaption = document.createElement('span');
  imageZoomed.classList.add('image');
  imageCaption.classList.add('image-caption');
  imageZoomed.src = path;
  imageCaption.innerHTML = caption;
  imageModalContainer.appendChild(imageZoomed);
  imageModalContainer.appendChild(imageCaption);
  // Change classes. See CSS for more details.
  modalContainer.classList.remove('modal-close');
  modalContainer.classList.add('modal-open');
};

const closeModal = function () {
  const deleteImage = imageModalContainer.firstChild;
  const deleteText = imageModalContainer.lastChild;
  setTimeout(function () {
    imageModalContainer.removeChild(deleteImage);
    imageModalContainer.removeChild(deleteText);
    modalContainer.classList.remove('modal-open');
  }, 200);
  modalContainer.classList.add('modal-close');
};

// Execution

//    WIDTTH CONTROL
if (window.innerWidth <= 480) {
  // Executed once to hide menu after loading the web.
  //Alternative: (burgerBtnStyle.visibility == 'visible')
  sideBar.classList.add('hidden');
}

//    BIG FONTS AND DARK THEME CONTROL
// checks the Local Storage flags and makes the changes according to them.
if (bigFontsLocalSt == 'true') {
  bigFonts();
}
if (dkThemeLocalSt == 'true') {
  darkTheme();
}

// Event
//    Responsivity
burgerBtn.addEventListener('click', showMenu);
window.addEventListener('resize', noMobile);
//    Big Fonts
fontBtn.addEventListener('click', bigFonts);
//    Dark Theme
thmBtn.addEventListener('click', darkTheme);
//    Modal Images
modalClose.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);
Array.from(modalTrigger).forEach((index) => {
  index.addEventListener('click', function (e) {
    let zoomingImage = index.firstElementChild.src;
    let caption = index.lastElementChild.innerHTML;
    openModal(zoomingImage, caption);
  });
});
