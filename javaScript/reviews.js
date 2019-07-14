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

const getDirection = document.querySelector('go_btn').href;

const laPlatilleria = {
  lat: 41.371567,
  long: 2.165384
}

function getPlatilleria(lat, long) {
  if ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)) {
    window.open("https://maps.google.com/maps?daddr=41.371562,2.165384&amp;ll=");
    myWindow.close();
  } else {
    window.open("https://maps.google.com/maps?daddr=41.371562,2.165384&amp;ll=");
    myWindow.close();
  }
}

/* function getPlatilleria() {
  window.open("https://maps.google.com/maps?daddr=41.371562,2.165384&amp;ll=")
} */