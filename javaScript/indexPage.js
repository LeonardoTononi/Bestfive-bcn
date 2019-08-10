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

const clickable = document.querySelectorAll('.click-bg');
clickable.forEach(elt => {
  elt.addEventListener('touchstart', () => {
    elt.style.background = 'rgb(239, 239, 239)';
    elt.style.transform = 'scale(1.1)';
  });
  elt.addEventListener('touchend', () => {
    elt.style.background = '#fff';
    elt.style.transform = 'scale(1)';
  });
});

// ============ GENERAL UTILITY ====================
// Detects if is IOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone;

// ============= LOAD LOGO INDEX PAGE =================
if (!isInStandaloneMode()) {
  window.addEventListener('load', function() {
    setInterval(() => {
      loader.className += ' hidden';
    }, 1000);
  });
} else {
  loader.remove();
}

// ============== BTN LANGUAGES =====================
btnLanguage_a.addEventListener('click', function() {
  if (languagesList_div.style.display == 'none') {
    languagesList_div.style.display = 'inline';
  } else {
    languagesList_div.style.display = 'none';
  }
});

// ============== PUPUP NOTIFICATION ==================

if (isIos() && !isInStandaloneMode()) {
  setTimeout(function() {
    popUp.style.display = 'inline';
    popUp.style.maxHeight = '350px';
    popUp.style.bottom = '10px';
    applications.style.opacity = '.2';
    skyline.style.opacity = '.2';
    navbar.style.opacity = '.2';
  }, 1500);
} else {
  popUp.style.display = 'none';
  nav.style.zIndex = '1';
  applications.style.opacity = '1';
  skyline.style.opacity = '1';
  navbar.style.opacity = '1';
}

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
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener);
  };

  document.addEventListener('click', outsideClickListener);
}

closeBtn_popUp.addEventListener('click', () => {
  popUp.style.maxHeight = '0px';
  popUp.style.bottom = '-80px';
  setInterval(function() {
    popUp.style.display = 'none';
  }, 500);
  applications.style.opacity = '1';
  skyline.style.opacity = '1';
  navbar.style.opacity = '1';
  nav.style.zIndex = '1';
});

hideOnClickOutside(popUp);

// =========== COMING SOON POP =============
function comingSoon() {
  const comingSoon_pop = document.querySelector('.coming-soon-pop');
  const button = document.querySelector('.got-btn');

  comingSoon_pop.style.display = 'block';
  comingSoon_pop.style.height = '150px';

  button.addEventListener('click', () => {
    comingSoon_pop.style.display = 'none';
    comingSoon_pop.style.height = '0';
  });
}
