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
}, {
  q: "How to take the cable car up montjuic?",
  a: `There are 2 cable cars, one that takes you from the port to the mountain and another one that has 3 stops on the mountain with views of the city. <br>
      <span class="option">Port cable car:</span>Sebastian tower on the beach (Passeig Don Joan Borbó Comte Barcelona, S/N, 08039 Barcelona). <br>
      <span class="option">Mountain cable car:</span> Avenida de Miramar, 30 (08038 Barcelona) <br>
      Buy ticket at <a href="https://www.holabarcelona.com/tickets/cable-car-montjuic-barcelona" target="_blank">www.holabarcelona.com</a>`
}, {
  q: "How to get to Montserrat? Time / Price?",
  a: `Go to metro España (<span class="metroL3">L3</span> or <span class="metroL1">L1</span>). You can buy a Ticket there from ticket booths just in front of Line <span class="train">R5</span> to Manresa. We recommend buy Montserrat <span class="train">R5</span> + Aeri (Aeri is the cable car that goes up the mountain. views are amazing! <br>
      <span class="option">Time:</span> 1 hour to Montserrat (every hour from 8:36 to 16:36) + 20min for Aeri Funicular. <br>
      <span class="option">Price:</span> 22€ adult round trip. <br>`
}, {
  q: "How to use the public transport (subway-bus)?",
  a: `Go to any Metro station and on the ticket booths buy the ticket that is most convinent for you, we reccomend: <br>
        T10 card: it costs 10,20€ and it has 10 rides, you can use them in metro, bus, and funicular up Montjuic. You can also share it as long as you validate all rides. `
}, {
  q: "How to get to Sitges?",
  a: `You can start in the Railway stop on Passeig de Gracia or in the Railway in Sants Estació.`
}, {
  q: "How to get to the airport?",
  a: `<span class="option">Option 1:</span> <span class="aereobus">Aerobus</span> (blue bus), starts from Plaza Cataluña every 10min (from 5am to 1am),  stops in Paza España in between. <span class="aereobus">A1</span> goes to Terminal 1 and <span class="aereobus">A2</span> goes to Terminal 2. One way ride is 5,90€. <br>
      <span class="option">Option 2:</span> public transport: metro, bus or train. cheapest option but slowest. Metro will take you at least 3 line changes (1 hour at least). Bus stops all the time, at least 45-55 min to the airport. Train is good but only goes to Terminal 2, you can take it in Passeig de Gracia or in Barcelona Sants train station. <br>
      <span class="option">Option 3:</span> <span class="taxi">Taxi</span>, it will cost you around 30€ .`
}, {
  q: "How to get to Barcelona centre from the airport?",
  a: `<span class="option">Option 1:</span> <span class="aereobus">Aerobus</span> (blue bus), you get on it outside of the airport and it goes         directly to city center. Stops in Plaza España and then in Plaza Cataluña. One way ride is 5,90€  <br>
      <span class="option">Option 2:</span> public transport (metro, bus or train). Cheapest option but slowest. Metro will take you at least 3 line changes. Bus stops all the time, at least 45-50 min ti the city center. Train is good but only runs from T2 to Barcelona center. Nearest stop from the city center is Passeig de Gracia. <br>
      <span class="option">Option 3:</span> <span class="taxi">Taxi</span>, it will cost you around 30€ .`
}, {
  q: "What time is the magic fountain show?",
  a: `<span class="option">From 1 November to 6 January:</span> Thursday, Friday and Saturday (20 pm / 20.30). <br>
      <span class="option">From 7 January to 28 February:</span> Every day (closed).<br>
      <span class="option">From 1 March to 31 March:</span> Thursday, Friday and Saturday (20 pm / 20.30).<br>
      <span class="option">From 1 April to 31 May:</span> Thursday, Friday and Saturday (21 pm / 21.30).<br>
      <span class="option">From 1 June to 30 September:</span> From Wednesday to Sunday (21.30 / 22 h).<br>
      <span class="option">From 1 October to 31 October:</span> Thursday, Friday and Saturday (21 pm / 21.30).<br>
      Surprise surprise...it's free!`
}, {
  q: "How much is magic mountain show?",
  a: `Surprise surprise...it's free for everyone!`
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