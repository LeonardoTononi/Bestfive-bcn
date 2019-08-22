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
