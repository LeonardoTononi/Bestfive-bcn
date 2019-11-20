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
