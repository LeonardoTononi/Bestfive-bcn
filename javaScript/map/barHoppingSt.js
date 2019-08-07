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
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ]
  };

  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  let markers = [
    // Carrer de Blai
    {
      coords: {
        lat: 41.373677,
        lng: 2.164501
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>HoppingStreet</p>
                     <h5>Carrer de Blai</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.373677,2.164501&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Carrer del Parlament
    {
      coords: {
        lat: 41.376485,
        lng: 2.162581
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer del Parlament</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376485,2.162581&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Carrer de la Mercè
    {
      coords: {
        lat: 41.382905,
        lng: 2.175482
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer de la Mercè</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382905,2.175482&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Carrer de Joaquín Costa
    {
      coords: {
        lat: 41.382505,
        lng: 2.165831
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer de Joaquín Costa</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382505,2.165831&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Passeig del Born
    {
      coords: {
        lat: 41.38473,
        lng: 2.182853
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Passeig del Born</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.38473,2.182853&amp;ll=">GO!</a>
                  </div>
                </section>`
    }
  ];

  // ==========================
  //         GET LIVE LOCATION
  // ==========================

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(saveCoordinate);
    } else {
      // Nothing;
    }
  }

  function saveCoordinate(position) {
    markers.push({
      coords: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      iconImage: '',
      zIndex: 999
    });
  }
  getLocation();

  // Loop through markers
  setTimeout(function() {
    for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
  }, 1000);
  // Add marker function
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
      draggable: false,
      zIndex: props.zIndex,
      animation: google.maps.Animation.DROP
    });
    // Check content
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener(
        'click',
        function() {
          infoWindow.open(map, marker);
        },
        toggleBounce
      );
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

// ==========================
//  GET DETAILS GOOGLE MAPS
// ==========================
/* 
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

const barHoppingStArray = [
  laPlatilleriaID,
  caneteID,
  alcobaAzulID,
  nacionalID,
  calPepID
];

function logPlaceDetails() {
  var service = new google.maps.places.PlacesService(
    document.getElementById('map')
  );
  service.getDetails(laPlatilleriaID, function(place, status) {
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
  service.getDetails(caneteID, function(place, status) {
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
  service.getDetails(alcobaAzulID, function(place, status) {
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
  service.getDetails(nacionalID, function(place, status) {
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
  service.getDetails(calPepID, function(place, status) {
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
 */
function mapsSelector() {
  if (
    navigator.platform.indexOf('iPhone') != -1 ||
    navigator.platform.indexOf('iPad') != -1 ||
    navigator.platform.indexOf('iPod') != -1
  )
    window.open('maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=');
  else window.open('https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=');
}
