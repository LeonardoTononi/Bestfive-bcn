const backIcon_div = document.getElementById('back');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 100) {
    backIcon_div.style.display = "inline-block";
  } else {
    backIcon_div.style.display = "none";
  }
});