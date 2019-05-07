// LOAD LOGO INDEX PAGE
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.className += " hidden";
});



// BTN LANGUAGES
const btnLanguage_a = document.getElementById('btn-lang');
const languagesList_div = document.getElementById('languages-section');
const cleanBtn_a = document.getElementById('clean-lang');

btnLanguage_a.addEventListener('click', function () {
  if (languagesList_div.style.display == "none") {
    /* languagesList_div.style.opacity = "1"; */
    languagesList_div.style.display = "inline";

    cleanBtn_a.addEventListener('click', function () {
      languagesList_div.style.display = "none";
      /* languagesList_div.style.opacity = "0"; */
    });
  } else {
    languagesList_div.style.display = "none";
  }
});