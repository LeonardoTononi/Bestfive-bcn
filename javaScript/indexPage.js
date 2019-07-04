// ============= DOM SELECTORS =================
const nav = document.querySelector('.navbar');
const btnLanguage_a = document.querySelector('.btn-lang');
const languagesList_div = document.querySelector('.languages');
const popUp = document.getElementById('popUp');
const loader = document.querySelector('.loader');

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
  setInterval(function () {
    nav.style.zIndex = "1";
    popUp.style.display = "none";
  }, 5000);
} else {
  popUp.style.display = "none";
  nav.style.zIndex = "1";
}