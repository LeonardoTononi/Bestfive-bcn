// ==========================
//         INIT MAP
// ==========================
function initMap() {
  let options = {
    zoom: 14,
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
    // El Born
    {
      coords: {
        lat: 41.384274,
        lng: 2.18244
      },
      iconImage: {
        url: '/img/icon/shopping.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>Shopping</p>
                     <h5>El Born</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.384274,2.182440&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // El Raval
    {
      coords: {
        lat: 41.381737,
        lng: 2.168829
      },
      iconImage: {
        url: '/img/icon/shopping.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Shopping</p>
                  <h5>El Raval</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.381737,2.168829&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // La Roca Village
    {
      coords: {
        lat: 41.61016,
        lng: 2.343559
      },
      iconImage: {
        url: '/img/icon/shopping.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Shopping</p>
                  <h5>La Roca Village</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.610160,2.343559&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Paaseo De Gracia
    {
      coords: {
        lat: 41.393219,
        lng: 2.163756
      },
      iconImage: {
        url: '/img/icon/shopping.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Shopping</p>
                  <h5>Paaseo De Gracia</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.393219,2.163756&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Portal Del Angel
    {
      coords: {
        lat: 41.385386,
        lng: 2.173296
      },
      iconImage: {
        url: '/img/icon/shopping.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Shopping</p>
                  <h5>Portal Del Angel</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.385386,2.173296&amp;ll=">GO!</a>
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
