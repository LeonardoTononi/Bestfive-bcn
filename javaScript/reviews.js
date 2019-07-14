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

function getDirection(mapsURL) {
  if ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    window.open(`maps://${mapsURL}`);
  else /* else use Google */
    window.open(`https://${mapsURL}`);
}

getDirection(`maps.google.com/maps?daddr=41.3715617,2.1631936&amp;ll=`);

/* 41.3715617, 2.1631936 */