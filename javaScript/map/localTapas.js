// ==========================
//         INIT MAP 
// ==========================
function initMap() {
  let options = {
    zoom: 13,
    center: {
      lat: 41.3887,
      lng: 2.1789
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
    // La Cova Fumada
    {
      coords: {
        lat: 41.379294,
        lng: 2.189208
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(40, 40),
      },
      content: `<section class="maps-content">
                     <p>LocalTapas</p>
                     <h5>La Cova Fumada</h5>
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
    // Can Paixano
    {
      coords: {
        lat: 41.381815,
        lng: 2.183370
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(40, 40),
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Can Paixano</h5>
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
    // Bar Celta Pulperia
    {
      coords: {
        lat: 41.379938,
        lng: 2.180088
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(40, 40),
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bar Celta Pulperia</h5>
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
    // Bodega Vasconia
    {
      coords: {
        lat: 41.381087,
        lng: 2.179913
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(40, 40),
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bodega Vasconia</h5>
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
    // La Bombeta
    {
      coords: {
        lat: 41.380577,
        lng: 2.187703
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(40, 40),
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>La Bombeta</h5>
                  <h2>Now: 
                     <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                     <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    }

  ];

  // ==========================
  //         GET LIVE LOCATION
  // ==========================

  function getLocation() {
    console.log("getting live location");
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
    })
  }
  getLocation();
  /*
  setInterval(() => getLocation(), 2000); */

  // Loop through markers
  setTimeout(function () {
    for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
  }, 1000)

  // Add marker function 
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
      draggable: false,
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

const covaFumadaID = {
  placeId: 'ChIJvdFY9amjpBIRVecxFX2krK0',
  fields: ['opening_hours']
};
const canPaixanoID = {
  placeId: 'ChIJI1v-6f-ipBIRTeac1KdrUcg',
  fields: ['opening_hours']
};
const celtaPulperiaID = {
  placeId: 'ChIJgRiL71WipBIRnjR7UYyv0lA',
  fields: ['opening_hours']
};
const bodegaVasconiaID = {
  placeId: 'ChIJQxfpUP-ipBIREELTr1GFoLg',
  fields: ['opening_hours']
};
const bombetaID = {
  placeId: 'ChIJAR8SngCjpBIRw77ZED15xAY',
  fields: ['opening_hours']
};