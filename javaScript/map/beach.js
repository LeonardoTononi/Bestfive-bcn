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
    // Barceloneta
    {
      coords: {
        lat: 41.378399,
        lng: 2.192519
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>Beach</p>
                     <h5>Platja Barceloneta</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378399,2.192519&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bogatell
    {
      coords: {
        lat: 41.394434,
        lng: 2.207097
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja del Bogatell</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.394434,2.207097&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Platja de la Nova Icària
    {
      coords: {
        lat: 41.390398,
        lng: 2.202294
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja de la Nova Icària</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.390398,2.202294&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Platja de la marbella
    {
      coords: {
        lat: 41.398589,
        lng: 2.21256
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja de la marbella</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.398589,2.212560&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Platja del Somorrostro
    {
      coords: {
        lat: 41.3855099,
        lng: 2.1947129
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja del Somorrostro</h5>
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
