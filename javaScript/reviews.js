// HIDE AND SHOW PROS AND CONS

const expandBtn_img = document.querySelectorAll('.more-img');
expandBtn_img.forEach(img => img.addEventListener('click', effectImg));

function effectImg(e) {
  this.classList.toggle('rotateImg');
  this.parentElement.nextElementSibling.classList.toggle('hide');
}

// GET INFORMATION FROM GOOGLE MAPS FOR OPENING HOURS 

const place_div = document.querySelectorAll('.place');
const now = document.querySelectorAll('.now');
const weeklyHours = document.querySelectorAll('.weekly-hours');


const laPlatilleriaID = 'ChIJS3TrRV2ipBIRh7qXj5lHy3s';
const caneteID = 'ChIJGcsrQViipBIRY_vN9Piydxw';
const resolisID = 'ChIJM4r5ZF-ipBIRqCl27q6hy2w';
const calPepID = 'ChIJbd9pOf6ipBIRt8JasLJbTHI';
const canCisaBarBrutalID = 'ChIJdXhLpf6ipBIRzHMdlLjKdWQ';

const fancyTapasArray = [laPlatilleriaID, caneteID, resolisID, calPepID, canCisaBarBrutalID];

function logPlaceDetails() {
  var service = new google.maps.places.PlacesService(document.getElementById('map'));
  service.getDetails({
    // La platilleria
    placeId: 'ChIJS3TrRV2ipBIRh7qXj5lHy3s'
  }, function (place, status) {
    const weeklyData = `
  <ul>
      <li>${place.opening_hours.weekday_text[0]}</li>
      <li>${place.opening_hours.weekday_text[1]}</li>
      <li>${place.opening_hours.weekday_text[2]}</li>
      <li>${place.opening_hours.weekday_text[3]}</li>
      <li>${place.opening_hours.weekday_text[4]}</li>
      <li>${place.opening_hours.weekday_text[5]}</li>
      <li>${place.opening_hours.weekday_text[6]}</li>
  </ul>`;
    weeklyHours[0].innerHTML = weeklyData;
    if (place.opening_hours.open_now === true) {
      now[0].innerText = 'Open';
      now[0].classList.add('open');
    } else {
      now[0].innerText = 'Closed';
      now[0].classList.add('close');
    }
  });
}