// HIDE AND SHOW PROS AND CONS

const expandBtn_img = document.querySelectorAll('.more-img');
const pros_ul = document.querySelectorAll('.pros');
const cons_ul = document.querySelectorAll('.cons');

expandBtn_img[0].addEventListener('click', function () {
  if (pros_ul[0].style.display == "none" & cons_ul[0].style.display == "none") {
    pros_ul[0].style.display = "inline-block";
    cons_ul[0].style.display = "inline-block";
    expandBtn_img[0].style.transform = "rotate(180deg)";
  } else {
    pros_ul[0].style.display = "none";
    cons_ul[0].style.display = "none";
    expandBtn_img[0].style.transform = "initial";
  }
});

expandBtn_img[1].addEventListener('click', function () {
  if (pros_ul[1].style.display == "none" & cons_ul[1].style.display == "none") {
    pros_ul[1].style.display = "inline-block";
    cons_ul[1].style.display = "inline-block";
    expandBtn_img[1].style.transform = "rotate(180deg)";
  } else {
    pros_ul[1].style.display = "none";
    cons_ul[1].style.display = "none";
    expandBtn_img[1].style.transform = "initial";
  }
});
expandBtn_img[2].addEventListener('click', function () {
  if (pros_ul[2].style.display == "none" & cons_ul[2].style.display == "none") {
    pros_ul[2].style.display = "inline-block";
    cons_ul[2].style.display = "inline-block";
    expandBtn_img[2].style.transform = "rotate(180deg)";
  } else {
    pros_ul[2].style.display = "none";
    cons_ul[2].style.display = "none";
    expandBtn_img[2].style.transform = "initial";
  }
});
expandBtn_img[3].addEventListener('click', function () {
  if (pros_ul[3].style.display == "none" & cons_ul[3].style.display == "none") {
    pros_ul[3].style.display = "inline-block";
    cons_ul[3].style.display = "inline-block";
    expandBtn_img[3].style.transform = "rotate(180deg)";
  } else {
    pros_ul[3].style.display = "none";
    cons_ul[3].style.display = "none";
    expandBtn_img[3].style.transform = "initial";
  }
});
expandBtn_img[4].addEventListener('click', function () {
  if (pros_ul[4].style.display == "none" & cons_ul[4].style.display == "none") {
    pros_ul[4].style.display = "inline-block";
    cons_ul[4].style.display = "inline-block";
    expandBtn_img[4].style.transform = "rotate(180deg)";
  } else {
    pros_ul[4].style.display = "none";
    cons_ul[4].style.display = "none";
    expandBtn_img[4].style.transform = "initial";
  }
});

// GET INFORMATION FROM GOOGLE MAPS FOR OPENING HOURS 

const now = document.querySelectorAll('.now');
const weeklyHours = document.querySelectorAll('.weekly-hours');

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