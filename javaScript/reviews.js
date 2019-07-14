// HIDE AND SHOW PROS AND CONS

const expandBtn_img = document.querySelectorAll('.arrowBtn');
expandBtn_img.forEach(img => img.addEventListener('click', effectImg));

function effectImg(e) {
  this.classList.toggle('rotateImg');
  this.nextElementSibling.style.visibility = "visible";
  if (!this.classList.contains("rotateImg")) {
    this.nextElementSibling.style.visibility = "hidden";
  } else {
    this.nextElementSibling.style.visibility = "visible";
  }
}

// GET DIRECTIONS 

const laPlatilleria = {
  lat: 41.3715617,
  long: 2.1631936
}

/* function getDirection(lat, long) {
  if ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)) {
    window.open(`maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
  } else {
    window.open(`https://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
  }
} */

function getDirection(lat, long) {
  window.open(`maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`) ||
    window.open(`https://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`)
}