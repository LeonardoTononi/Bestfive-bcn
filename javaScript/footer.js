// FOOTER
const floatText_div = document.querySelector('.float-footer');
const footer = document.getElementById('foot');
const closeBtn_div = document.querySelector('.close-btn');

floatText_div.addEventListener('click', function() {
  if (footer.style.display == 'none') {
    floatText_div.style.display = 'none';
    footer.style.display = 'inline';
  } else {
    footer.style.display = 'none';
  }
});

closeBtn_div.addEventListener('click', function() {
  if (footer.style.display == 'inline') {
    floatText_div.style.display = 'inline';
    footer.style.display = 'none';
  } else {
    footer.style.display = 'inline';
  }
});
