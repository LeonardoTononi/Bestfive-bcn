const questions = [{
  q: "How to buy ticket for Sagrada Familia?",
  a: `Go to <a href="http://www.sagradafamilia.org/tickets" target="_blank">www.sagradafamilia.org</a>,  select your ticket preference and the date`
}, {
  q: "How to get to Sagrada Familia?",
  a: `
           <span class="option">Option 1:</span> take the metro <span class="metroL2">L2</span> or <span class="metroL5">L5</span> to Sagrada Familia stop. <br>
           <span class="option">Option 2:</span> From plaza Catalunya take bus 50. <br>
           <span class="option">Option 3:</span> From plaza Catalunya a Taxi is about 10 euros.`
}, {
  q: "How much costs a ticket for Sagrada Familia?",
  a: `17€ Fast track ticket. <br>
        25€ fast track ticket + audioguide. <br>
        32€ fast track ticket + audioguide + one tower. <br>
        40€ fast track ticket + tour guide. <br>
        51€ fast track ticket + tour guide + one tower. <br>`
}, {
  q: "How to buy ticket for Park Guell?",
  a: `Go to <a href="https://parkguell.barcelona/en/buy-tickets" target="_blank">www.parkguell.barcelona</a>, select your ticket preference and the date.`
}, {
  q: "How to get to Park Guell?",
  a: ` 
         <span class="option">Option 1:</span> Take bus 24 from plaza Catalunya.<br>
         <span class="option">Option 2:</span> Take the metro <span class="metroL3">L3</span> to Vallcarca, walk down road and turn left to street Gloria and take the mechanical stairs that go up hill.<br>
         <span class="option">Option 3:</span> From plaza Catalunya a Taxi is about 10 euros (20mins).`
}, {
  q: "How much is a ticket to Park Guell?",
  a: "It's 10€ (7€ reduced, free for children 0-6 years old."
}, {
  q: "How much does the Picasso Museum ticket cost?",
  a: `<span class="option">Collection:</span> 12€ (7€ reduced). <br>
  <span class="option">Collection + temporary exhibiton:</span> 14 € (7,5 €reduced). <br>
  <span class="option">Free entrance:</span> <br>
  - Thursday afternoons, from 6.00pm to 9.30pm. <br>
  - First Sunday of each month, from 9am to 8.30pm. <br>
  Buy or book the free entrance at <a href="http://www.bcn.cat/museupicasso/en/visiting/planning.html" target="_blank">www.bcn.cat/museupicasso</a>`
}, {
  q: "Where can I buy tickets for the Picasso Museum?",
  a: `Buy or book the free entrance at <a href="http://www.bcn.cat/museupicasso/en/visiting/planning.html" target="_blank">www.bcn.cat/museupicasso</a>`
}, {
  q: "When is the Barcelona Cathedral free entrance?",
  a: `Between 8:30 and 12:45 every day except for Sundays (mass service). <br>From 12:45 to 17:45 it costs 7€.`
}, {
  q: "How much does the cable car to Montjuic cost?",
  a: `There are 2 cable cars, one that takes you from the port to the mountain and another one that has 3 stops on the mountain with views of the city. <br>
      <span class="option">Port cable car:</span> 11€ one way, 16,50€, way and back (buy tickets on counter with cash). <br>
      <span class="option">Mountain cable car:</span> 12,70€ (you can purchase online with 20% discount). <br>
      Buy ticket at <a href="https://www.holabarcelona.com/tickets/cable-car-montjuic-barcelona" target="_blank">www.holabarcelona.com</a>`
}];



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