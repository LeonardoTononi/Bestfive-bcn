// ============= DOM SELECTORS =================
const nav = document.querySelector('.navbar');
const btnLanguage_a = document.querySelector('.btn-lang');
const languagesList_div = document.querySelector('.languages');
const popUp = document.getElementById('popUp');
const loader = document.querySelector('.loader');
const applications = document.querySelector('.applications');
const skyline = document.querySelector('.skyline');
const navbar = document.querySelector('.navbar');
const closeBtn_popUp = document.querySelector('.closeBtn');

// ============ GENERAL UTILITY ====================
// Detects if is IOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// ============= LOAD LOGO INDEX PAGE =================
if (!isInStandaloneMode()) {
  window.addEventListener('load', function () {
    setInterval(() => {
      loader.className += " hidden";
    }, 1000);
  });
} else {
  loader.remove();
}

// ============== BTN LANGUAGES =====================
btnLanguage_a.addEventListener('click', function () {
  if (languagesList_div.style.display == "none") {
    languagesList_div.style.display = "inline";
  } else {
    languagesList_div.style.display = "none";
  }
});

// ============== PUPUP NOTIFICATION ==================

if (isIos() && !isInStandaloneMode()) {
  popUp.style.display = "inline";
  applications.style.opacity = ".2";
  skyline.style.opacity = ".2";
  navbar.style.opacity = ".2";
} else {
  popUp.style.display = "none";
  nav.style.zIndex = "1";
  applications.style.opacity = "1";
  skyline.style.opacity = "1";
  navbar.style.opacity = "1";
}

const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

function hideOnClickOutside(element) {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
      element.style.display = 'none';
      applications.style.opacity = "1";
      skyline.style.opacity = "1";
      navbar.style.opacity = "1";
      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

closeBtn_popUp.addEventListener('click', () => {
  applications.style.opacity = "1";
  skyline.style.opacity = "1";
  navbar.style.opacity = "1";
  nav.style.zIndex = "1";
  popUp.style.display = "none"
});

hideOnClickOutside(popUp);