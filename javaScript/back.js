function findMatches(wordToMatch, questions) {
  return questions.filter(question => {
    const regex = new RegExp(wordToMatch, 'gi');
    return question.q.match(regex) || question.a.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, questions);
  const html = matchArray.map(question => {
    const regex = new RegExp(this.value, 'gi');
    return `
    <div class="question">
       <h2><i class="fas fa-caret-right"></i>${question.q}</h2>
       <p class="answer">${question.a}</p>
    </div>
        `;
  }).join('');
  questions_div.innerHTML = html;
  if (this.value == "") {
    questions_div.innerHTML = `
    <div class="question">
      
    </div>`
  }
}

const search_input = document.forms['search-bar'].querySelector('input');
const questions_div = document.querySelector('#questions');

search_input.addEventListener('change', displayMatches);
search_input.addEventListener('keyup', displayMatches);


// HOW TO SEARCH BAR


/* search_input.addEventListener('keyup', function (e) {
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
}); */

// FILTERS LOGIC

const filter = document.querySelectorAll('.filter');

filter.forEach(elt => elt.addEventListener('click', function () {
  this.classList.toggle('active-filter');
  targetFilter = this;
  if (this.classList.contains('active-filter')) {
    displayMatches2(targetFilter);
  } else {
    questions_div.innerHTML = `
    <div class="question">
      
    </div>`
  }
}));

function displayMatches2(filter) {
  if (filter.classList.contains('active-filter')) {
    const matchArray = findMatches(filter.innerText, questions);
    const html = matchArray.map(question => {
      const regex = new RegExp(filter.innerText, 'gi');
      return `
        <div class="question">
           <h2><i class="fas fa-caret-right"></i>${question.q}</h2>
           <p class="answer">${question.a}</p>
        </div>
            `;
    }).join('');
    questions_div.innerHTML = html;
  }
}