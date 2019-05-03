// LOAD LOGO INDEX PAGE
const bodyIndex_div = document.getElementById('content-body');
const logoLoader_div = document.getElementById('img-logo-loader');



// BTN LANGUAGES
const btnLanguage_a = document.getElementById('btn-lang');
const languagesList_div = document.getElementById('languages');

btnLanguage_a.addEventListener('click', function () {
  if (languagesList_div.style.display == "none") {
    languagesList_div.style.display = "inline-block";
  } else {
    languagesList_div.style.display = "none";
  }
});