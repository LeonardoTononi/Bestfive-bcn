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
    // Picasso Museum
    {
      coords: {
        lat: 41.385221,
        lng: 2.180896
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>Museum</p>
                     <h5>Picasso Museum</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.385221,2.180896&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Fundación miró
    {
      coords: {
        lat: 41.368645,
        lng: 2.159842
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>Fundación <br> Joan Miró</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.368645,2.159842&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // MACBA
    {
      coords: {
        lat: 41.38286,
        lng: 2.166633
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>MACBA</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382860,2.166633&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // MNAC
    {
      coords: {
        lat: 41.368863,
        lng: 2.153274
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>MNAC</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.368863,2.153274&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // MUHBA
    {
      coords: {
        lat: 41.3839,
        lng: 2.177833
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>MUHBA</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383900,2.1778333&amp;ll=">GO!</a>
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
