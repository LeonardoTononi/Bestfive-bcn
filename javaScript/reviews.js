const expandBtn_img = document.querySelectorAll('.more-img');
const pros_ul = document.querySelectorAll('.pros');
const cons_ul = document.querySelectorAll('.cons');

expandBtn_img[0].addEventListener('click', function () {
  if (pros_ul[0].style.display == "none" & cons_ul[0].style.display == "none") {
    pros_ul[0].style.display = "inline-block";
    cons_ul[0].style.display = "inline-block";
    expandBtn_img[0].style.transform = "rotate(180deg)";
  } else {
    pros_ul[0].style.display = "none";
    cons_ul[0].style.display = "none";
    expandBtn_img[0].style.transform = "initial";
  }
});

expandBtn_img[1].addEventListener('click', function () {
  if (pros_ul[1].style.display == "none" & cons_ul[1].style.display == "none") {
    pros_ul[1].style.display = "inline-block";
    cons_ul[1].style.display = "inline-block";
    expandBtn_img[1].style.transform = "rotate(180deg)";
  } else {
    pros_ul[1].style.display = "none";
    cons_ul[1].style.display = "none";
    expandBtn_img[1].style.transform = "initial";
  }
});
expandBtn_img[2].addEventListener('click', function () {
  if (pros_ul[2].style.display == "none" & cons_ul[2].style.display == "none") {
    pros_ul[2].style.display = "inline-block";
    cons_ul[2].style.display = "inline-block";
    expandBtn_img[2].style.transform = "rotate(180deg)";
  } else {
    pros_ul[2].style.display = "none";
    cons_ul[2].style.display = "none";
    expandBtn_img[2].style.transform = "initial";
  }
});
expandBtn_img[3].addEventListener('click', function () {
  if (pros_ul[3].style.display == "none" & cons_ul[3].style.display == "none") {
    pros_ul[3].style.display = "inline-block";
    cons_ul[3].style.display = "inline-block";
    expandBtn_img[3].style.transform = "rotate(180deg)";
  } else {
    pros_ul[3].style.display = "none";
    cons_ul[3].style.display = "none";
    expandBtn_img[3].style.transform = "initial";
  }
});
expandBtn_img[4].addEventListener('click', function () {
  if (pros_ul[4].style.display == "none" & cons_ul[4].style.display == "none") {
    pros_ul[4].style.display = "inline-block";
    cons_ul[4].style.display = "inline-block";
    expandBtn_img[4].style.transform = "rotate(180deg)";
  } else {
    pros_ul[4].style.display = "none";
    cons_ul[4].style.display = "none";
    expandBtn_img[4].style.transform = "initial";
  }
});

/* 
function showProsCons(e) {
  if (e.target.classList.contains('.more-img')) {
    if (e.target.parentElement.nextElement.style.display = 'none') {
      e.target.parentElement.nextElement.style.display = 'inline-block';
      e.target.parentElement.nextElement.nextElement.style.display = 'inline-block';
    }
  }
} */