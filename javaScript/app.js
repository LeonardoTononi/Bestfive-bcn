// BACK BUTTON EFFECTS
const backIcon_div = document.getElementById('back');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 100) {
    backIcon_div.style.display = "inline-block";
  } else {
    backIcon_div.style.display = "none";
  }
});
// UP BUTTON EFFECTS
const scrollUp_div = document.getElementById('up');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 150) {
    scrollUp_div.style.display = "inline-block";
  } else {
    scrollUp_div.style.display = "none";
  }
});
/* // EFFECT PAGE
window.sr = ScrollReveal();
sr.reveal('.place', {
  duration: 1000,
  origin: 'bottom',
}); */

// HOW TO SEARCH BAR
const searchBar_input = document.forms['search-bar'].querySelector('input');
searchBar_input.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase();
  const answers_p = document.getElementsByTagName('p');
  Array.from(answers_p).forEach(function (answer) {
    const text = answer.textContent;
    if (text.toLowerCase().indexOf(term) != -1) {
      answer.parentElement.style.display = 'block';
    } else {
      answer.parentElement.style.display = 'none';
    }
  });
});