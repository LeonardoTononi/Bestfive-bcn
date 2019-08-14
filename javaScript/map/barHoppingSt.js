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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(20, 20)
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(20, 20)
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
        lat: 41.379878,
        lng: 2.180129
      },
      iconImage: {
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer de la Mercè</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.379878,2.180129&amp;ll=">GO!</a>
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(20, 20)
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(20, 20)
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
      navigator.geolocation.getCurrentPosition(saveCoordinate);
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

function mapsSelector() {
  if (
    navigator.platform.indexOf('iPhone') != -1 ||
    navigator.platform.indexOf('iPad') != -1 ||
    navigator.platform.indexOf('iPod') != -1
  )
    window.open('maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=');
  else window.open('https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=');
}
