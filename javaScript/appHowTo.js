const icon_i = document.querySelectorAll('.fa-caret-right');
const answer_p = document.querySelectorAll('.answer');

for (i = 0; i < icon_i.length; i++) {
  icon_i[i].addEventListener('click', showHide);
}

function showHide() {
  answer_p[0].style.display = answer_p[0].style.display === 'block' ? '' : 'block';
  answer_p[0].style.display = answer_p[0].style.display === 'block' ? '' : 'block';
}

// Non riesco a far collegare il [0] del answer a far si che sia lo stesso di icon_i[i]


/*  Distribute(icon_i.item(i)); */

/* for (i = 0; i < icon_i.length; i++) {
  icon_i[i].addEventListener('click', function () {
    for (i = 0; i < answer_p.length; i++) {
      
    }
  });
} */