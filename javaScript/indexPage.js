// ============= DOM SELECTORS =================
const nav = document.querySelector('.navbar');

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

const isRunningStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches;
};

// Detect if is android
const isAndroid = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android/.test(userAgent);
};

// ============= LOAD LOGO INDEX PAGE =================
if (!isRunningStandalone()) {
  window.addEventListener('load', function() {
    setInterval(() => {
      loader.className += ' hidden';
    }, 800);
  });
} else {
  loader.remove();
}

// ============== BTN LANGUAGES =====================
const btnLanguage_a = document.querySelector('.btn-lang');
const languagesList_div = document.querySelector('.languages');

btnLanguage_a.addEventListener('click', hideAndShowLang);
btnLanguage_a.addEventListener('touchstart', hideAndShowLang, {
  passive: true
});

function hideAndShowLang() {
  if (languagesList_div.style.display == 'none') {
    languagesList_div.style.display = 'inline';
  } else {
    languagesList_div.style.display = 'none';
  }
}

// ============== PUPUP NOTIFICATION ==================

if (isIos() && !isRunningStandalone()) {
  setTimeout(function() {
    showAddPopup();
  }, 1500);
} else {
  hidePopup();
}

if (isAndroid() && !isRunningStandalone()) {
  setTimeout(function() {
    const shareBtn = document.querySelector('.add-chrome');
    shareBtn.src = '/img/icon/menu-chrome-gray.png';
    showAddPopup();
  }, 1500);
} else {
  hidePopup();
}

function showAddPopup() {
  popUp.style.display = 'inline';
  popUp.style.maxHeight = '440px';
  popUp.style.bottom = '10px';
  applications.style.opacity = '.2';
  skyline.style.opacity = '.2';
  navbar.style.opacity = '.2';
  navbar.style.zIndex = '-2';
  applications.style.pointerEvents = 'none';
}

function hidePopup() {
  popUp.style.display = 'none';
  popUp.style.maxHeight = '0px';
  popUp.style.bottom = '-80px';
  applications.style.opacity = '1';
  skyline.style.opacity = '1';
  navbar.style.opacity = '1';
  navbar.style.zIndex = '2';
  setTimeout(() => {
    applications.style.pointerEvents = 'auto';
  }, 200);
}

// Effect offline popup
const isVisible = elem =>
  !!elem &&
  !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

function hideOnClickOutside(element) {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && isVisible(element)) {
      element.style.display = 'none';
      applications.style.opacity = '1';
      skyline.style.opacity = '1';
      navbar.style.opacity = '1';
      nav.style.zIndex = '1';
      setTimeout(() => {
        applications.style.pointerEvents = 'auto';
      }, 200);
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener);
    document.removeEventListener('touchstart', outsideClickListener, {
      passive: true
    });
  };

  document.addEventListener('click', outsideClickListener);
  document.addEventListener('touchstart', outsideClickListener, {
    passive: true
  });
}

closeBtn_popUp.addEventListener('click', closePopup);
function closePopup() {
  popUp.style.maxHeight = '0px';
  popUp.style.bottom = '-80px';
  setInterval(function() {
    popUp.style.display = 'none';
  }, 500);
  applications.style.opacity = '1';
  skyline.style.opacity = '1';
  navbar.style.opacity = '1';
  nav.style.zIndex = '1';
  setTimeout(() => {
    applications.style.pointerEvents = 'auto';
  }, 200);
}

hideOnClickOutside(popUp);

// =========== COMING SOON POP =============
// Prevent mini info bar add homescreen on chrome
window.addEventListener('beforeinstallprompt', e => e.preventDefault());

function comingSoon() {
  const comingSoon_pop = document.querySelector('.coming-soon-pop');
  const button = document.querySelector('.got-btn');

  comingSoon_pop.style.display = 'block';
  comingSoon_pop.style.height = '150px';
  applications.style.pointerEvents = 'none';

  button.addEventListener('click', closingPopSoon);
  button.addEventListener('touchstart', closingPopSoon, { passive: true });

  function closingPopSoon() {
    comingSoon_pop.style.display = 'none';
    comingSoon_pop.style.height = '0';

    setTimeout(() => {
      applications.style.pointerEvents = 'auto';
    }, 500);
  }
}
