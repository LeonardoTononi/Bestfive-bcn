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

// FOOTER 
const floatText_div = document.querySelector('.float-footer');
const footer = document.getElementById('foot');
const closeBtn_div = document.querySelector('.close-btn');
const infoBottom_div = document.getElementById('info-bottom');

floatText_div.addEventListener('click', function () {
  if (footer.style.display == "none") {
    infoBottom_div.style.visibility = "visible";
    floatText_div.style.display = "none";
    footer.style.display = "inline";
  } else {
    footer.style.display = "none";
  }
});

closeBtn_div.addEventListener('click', function () {
  if (footer.style.display == "inline") {
    infoBottom_div.style.visibility = "hidden";
    setInterval(function () {
      floatText_div.style.display = "inline";
      footer.style.display = "none";
    }, 300);
  } else {
    footer.style.display = "inline";
  }
});