// HIDE AND SHOW PROS AND CONS
const weeklyHours_span = document.querySelector('.weekly-hours');
const expandBtn_img = document.querySelectorAll('.arrowBtn');
expandBtn_img.forEach(img => {
  img.addEventListener('click', effectImg);
});

function effectImg(e) {
  this.classList.toggle('rotateImg');
  this.nextElementSibling.style.visibility = 'visible';
  if (!this.classList.contains('rotateImg')) {
    this.nextElementSibling.style.visibility = 'hidden';
  } else {
    this.nextElementSibling.style.visibility = 'visible';
  }
}

// CHANGE ICON INSTALL APP IF IS ANDROID

const isRunningStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches;
};

// Detect if is android
const isAndroid = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android/.test(userAgent);
};

if (isAndroid() && !isRunningStandalone()) {
  const shareBtn = document.querySelector('.add-chrome');
  shareBtn.src = '/img/icon/menu-chrome-gray.png';
}

if (isRunningStandalone()) {
  const cardInstall = document.querySelector('.card-install-app');
  cardInstall.style.display = 'none';
}

// SHOW AND HIDE TEXT
const showBtn = document.querySelectorAll('.show');
const hideBtn = document.querySelectorAll('.hide');
const fadeDiv = document.querySelectorAll('.fade');
const text = document.querySelectorAll('.place_tips p');

showBtn.forEach(btn => {
  btn.addEventListener('click', showText);
});

hideBtn.forEach(btn => {
  btn.addEventListener('click', hideText);
});

function showText(e) {
  this.style.display = 'none';
  this.nextElementSibling.style.display = 'block';
  this.nextElementSibling.nextElementSibling.style.maxHeight = '100%';
  this.nextElementSibling.nextElementSibling.nextElementSibling.style.marginTop =
    '0';
  this.nextElementSibling.nextElementSibling.nextElementSibling.style.height =
    '30px';
}

function hideText(e) {
  this.style.display = 'none';
  this.previousElementSibling.style.display = 'block';
  this.nextElementSibling.style.maxHeight = '130px';
  this.nextElementSibling.nextElementSibling.style.marginTop = '-100px';
  this.nextElementSibling.nextElementSibling.style.height = '100px';
}
