const expandBtn_li = document.querySelector('.more');
const expandImg_img = document.querySelector('.more-img');
const pros_ul = document.querySelector('.pros');
const cons_ul = document.querySelector('.cons');

expandBtn_li.addEventListener('click', function () {
  if (pros_ul.style.display == "none" & cons_ul.style.display == "none") {
    expandImg_img.style.transform = "rotate(180deg)";
    pros_ul.style.display = "inline-block";
    cons_ul.style.display = "inline-block";
  } else {
    expandImg_img.style.transform = "initial";
    pros_ul.style.display = "none";
    cons_ul.style.display = "none";
  }
});