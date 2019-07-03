//LOAD LOGO INDEX PAGE
/* window.addEventListener('load', function () {
  setInterval(() => {
    const loader = document.querySelector('.loader');
    loader.className += " hidden";
  }, 1000);
}); */

// BTN LANGUAGES
const btnLanguage_a = document.querySelector('.btn-lang');
const languagesList_div = document.querySelector('.languages');

btnLanguage_a.addEventListener('click', function () {
  if (languagesList_div.style.display == "none") {
    languagesList_div.style.display = "inline";
  } else {
    languagesList_div.style.display = "none";
  }
});

// Popup add home screen for IOS 

// Detects if device is on iOS 
const popUp = document.getElementById('popUp');

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
const nav = document.querySelector('.navbar');
if (isIos() && !isInStandaloneMode()) {
  popUp.style.display = "inline";
  setInterval(function () {
    nav.style.zIndex = "1";
    popUp.style.display = "none";
  }, 5000);
} else {
  popUp.style.display = "none";
  nav.style.zIndex = "1";
}