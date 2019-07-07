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
/* 

// SLIDES IMAGES

let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;

  let x = document.getElementsByClassName("platil_img");
  console.log(x.length);
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
} */