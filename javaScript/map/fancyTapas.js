// ==========================
//         INIT MAP 
// ==========================
function initMap() {
  let options = {
    zoom: 13,
    center: {
      lat: 41.3887,
      lng: 2.1589
    },
    styles: [{
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      }
    ]
  };

  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  let markers = [
    // La platilleria
    {
      coords: {
        lat: 41.371562,
        lng: 2.165384
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: `<section class="maps-content">
                     <p>FancyTapas</p>
                     <h5>La platilleria</h5>
                     <h2>Now: 
                        <span class="open">Open</span> (12.00 - 23.00)
                     </h2>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
                </section>`
    },
    // Bar canete
    {
      coords: {
        lat: 41.379161,
        lng: 2.173134
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: `<section class="maps-content">
                  <p>FancyTapas</p>
                  <h5>Bar cañete</h5>
                  <h2>Now: 
                    <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                    <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    },
    // La Alcoba Azul
    {
      coords: {
        lat: 41.382905,
        lng: 2.175482
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>La Alcoba Azul</h5><h2>Now: <span class="open">Open</span> (11.00 - 23.00)</h2><h1><a href="#"><span class="open"> GO! <span></a></h1></section>'
    },
    // El Nacional
    {
      coords: {
        lat: 41.390548,
        lng: 2.168283
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>El Nacional</h5><h2>Now: <span class="close">Close</span> (11.00 - 23.00)</h2><h1><a href="#"><span class="close"> GO! <span></a></h1></section>'
    }, // Cal Pep
    {
      coords: {
        lat: 41.383975,
        lng: 2.183409
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>Cal Pep</h5><h2>Now: <span class="open">Open</span> (19.00 - 23.00)</h2><h1><a href="#"><span class="open"> GO! <span></a></h1></section>'
    },

  ];

  // Loop through markers 
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add marker function 
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    // Check content 
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      }, toggleBounce);
    }
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

const place_div = document.querySelectorAll('.place');
const now = document.querySelectorAll('.now');
const weeklyHours = document.querySelectorAll('.weekly-hours');
const goBtn_span = document.querySelectorAll('.goBtn');

const laPlatilleriaID = {
  placeId: 'ChIJS3TrRV2ipBIRh7qXj5lHy3s',
  fields: ['opening_hours']
};
const caneteID = {
  placeId: 'ChIJGcsrQViipBIRY_vN9Piydxw',
  fields: ['opening_hours']
};
const alcobaAzulID = {
  placeId: 'ChIJ8dubNviipBIRfwWByME5Om0',
  fields: ['opening_hours']
};
const nacionalID = {
  placeId: 'ChIJM5FFbvKipBIRdWugDh577Ao',
  fields: ['opening_hours']
};
const calPepID = {
  placeId: 'ChIJbd9pOf6ipBIRt8JasLJbTHI',
  fields: ['opening_hours']
};

const fancyTapasArray = [laPlatilleriaID, caneteID, alcobaAzulID, nacionalID, calPepID];

function logPlaceDetails() {
  var service = new google.maps.places.PlacesService(document.getElementById('map'));
  service.getDetails(laPlatilleriaID, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      const weeklyData = `
        <ul>
            <li class="today">${place.opening_hours.weekday_text[0]}</li>
            <li class="today">${place.opening_hours.weekday_text[1]}</li>
            <li class="today">${place.opening_hours.weekday_text[2]}</li>
            <li class="today">${place.opening_hours.weekday_text[3]}</li>
            <li class="today">${place.opening_hours.weekday_text[4]}</li>
            <li class="today">${place.opening_hours.weekday_text[5]}</li>
            <li class="today">${place.opening_hours.weekday_text[6]}</li>
        </ul>`;
      weeklyHours[0].innerHTML = weeklyData;

      if (place.opening_hours.open_now === true) {
        now[0].innerText = 'Open';
        now[0].classList.add('open');
      } else {
        goBtn_span[0].classList.remove('open');
        goBtn_span[0].classList.add('close');
        now[0].innerText = 'Closed';
        now[0].classList.add('close');
      }
    }
  });
  service.getDetails(caneteID, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      const weeklyData = `
        <ul>
            <li class="today">${place.opening_hours.weekday_text[0]}</li>
            <li class="today">${place.opening_hours.weekday_text[1]}</li>
            <li class="today">${place.opening_hours.weekday_text[2]}</li>
            <li class="today">${place.opening_hours.weekday_text[3]}</li>
            <li class="today">${place.opening_hours.weekday_text[4]}</li>
            <li class="today">${place.opening_hours.weekday_text[5]}</li>
            <li class="today">${place.opening_hours.weekday_text[6]}</li>
        </ul>`;
      weeklyHours[1].innerHTML = weeklyData;
      if (place.opening_hours.open_now === true) {
        now[1].innerText = 'Open';
        now[1].classList.add('open');
      } else {
        goBtn_span[1].classList.remove('open');
        goBtn_span[1].classList.add('close');
        now[1].innerText = 'Closed';
        now[1].classList.add('close');
      }
    }
  });
  service.getDetails(alcobaAzulID, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      const weeklyData = `
        <ul>
            <li class="today">${place.opening_hours.weekday_text[0]}</li>
            <li class="today">${place.opening_hours.weekday_text[1]}</li>
            <li class="today">${place.opening_hours.weekday_text[2]}</li>
            <li class="today">${place.opening_hours.weekday_text[3]}</li>
            <li class="today">${place.opening_hours.weekday_text[4]}</li>
            <li class="today">${place.opening_hours.weekday_text[5]}</li>
            <li class="today">${place.opening_hours.weekday_text[6]}</li>
        </ul>`;
      weeklyHours[2].innerHTML = weeklyData;
      if (place.opening_hours.open_now === true) {
        now[2].innerText = 'Open';
        now[2].classList.add('open');
      } else {
        goBtn_span[2].classList.remove('open');
        goBtn_span[2].classList.add('close');
        now[2].innerText = 'Closed';
        now[2].classList.add('close');
      }
    }
  });
  service.getDetails(nacionalID, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      const weeklyData = `
        <ul>
            <li class="monday">${place.opening_hours.weekday_text[0]}</li>
            <li class="tuesday">${place.opening_hours.weekday_text[1]}</li>
            <li class="wednesday">${place.opening_hours.weekday_text[2]}</li>
            <li class="thursdai">${place.opening_hours.weekday_text[3]}</li>
            <li class="friday">${place.opening_hours.weekday_text[4]}</li>
            <li class="saturday">${place.opening_hours.weekday_text[5]}</li>
            <li class="sunday">${place.opening_hours.weekday_text[6]}</li>
        </ul>`;
      weeklyHours[3].innerHTML = weeklyData;
      if (place.opening_hours.open_now === true) {
        now[3].innerText = 'Open';
        now[3].classList.add('open');
      } else {
        goBtn_span[3].classList.remove('open');
        goBtn_span[3].classList.add('close');
        now[3].innerText = 'Closed';
        now[3].classList.add('close');
      }
    }
  });
  service.getDetails(calPepID, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      const weeklyData = `
        <ul>
            <li class="today">${place.opening_hours.weekday_text[0]}</li>
            <li class="today">${place.opening_hours.weekday_text[1]}</li>
            <li class="today">${place.opening_hours.weekday_text[2]}</li>
            <li class="today">${place.opening_hours.weekday_text[3]}</li>
            <li class="today">${place.opening_hours.weekday_text[4]}</li>
            <li class="today">${place.opening_hours.weekday_text[5]}</li>
            <li class="today">${place.opening_hours.weekday_text[6]}</li>
        </ul>`;
      weeklyHours[4].innerHTML = weeklyData;
      if (place.opening_hours.open_now === true) {
        now[4].innerText = 'Open';
        now[4].classList.add('open');
      } else {
        goBtn_span[4].classList.remove('open');
        goBtn_span[4].classList.add('close');
        now[4].innerText = 'Closed';
        now[4].classList.add('close');
      }
    }
  });
}

function mapsSelector() {
  if ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
  else
    window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
}