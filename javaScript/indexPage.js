// LOAD LOGO INDEX PAGE
window.addEventListener('load', function () {
  setInterval(() => {
    const loader = document.querySelector('.loader');
    loader.className += " hidden";
  }, 1000);
});

//SCROLL APP CHANGE BACKGROUND
const scrollDown_div = document.querySelector('.downScroll');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 5) {
    scrollDown_div.style.background = "#fff";
    scrollDown_div.style.boxShadow = "2px 2px 16px -8px #484848";
    /* scrollDown_div.style.borderBottom = ".2px solid #484848"; */
  } else {
    scrollDown_div.style.background = "transparent";
    scrollDown_div.style.boxShadow = "none";
    /* scrollDown_div.style.borderBottom = "none"; */
  }
});

// BTN LANGUAGES
const btnLanguage_a = document.querySelector('.btn-lang');
const languagesList_div = document.querySelector('.languages');

btnLanguage_a.addEventListener('click', function () {
  if (languagesList_div.style.display == "none") {
    languagesList_div.style.display = "inline";
    cleanBtn_a.addEventListener('click', function () {
      languagesList_div.style.display = "none";
    });
  } else {
    languagesList_div.style.display = "none";
  }
});

// FOOTER 
const floatText_div = document.querySelector('.float-footer');
const footer = document.getElementById('foot');
const closeBtn_div = document.querySelector('.close-btn');

floatText_div.addEventListener('click', function () {
  if (footer.style.display == "none") {
    floatText_div.style.display = "none";
    footer.style.display = "inline";
  } else {
    footer.style.display = "none";
  }
});

closeBtn_div.addEventListener('click', function () {
  if (footer.style.display == "inline") {
    floatText_div.style.display = "inline";
    footer.style.display = "none";
  } else {
    footer.style.display = "inline";
  }
});