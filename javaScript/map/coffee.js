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
    // Café El Magnífico
    {
      coords: {
        lat: 41.383537,
        lng: 2.181004
      },
      iconImage: {
        url: '/img/icon/coffee.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>Coffee</p>
                     <h5>Café El Magnífico</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383537,2.181004&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Departure
    {
      coords: {
        lat: 41.383568,
        lng: 2.164958
      },
      iconImage: {
        url: '/img/icon/coffee.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Coffee</p>
                  <h5>Departure</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383568,2.164958&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Federal Cafe
    {
      coords: {
        lat: 41.378,
        lng: 2.177776
      },
      iconImage: {
        url: '/img/icon/coffee.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Coffee</p>
                  <h5>Federal Cafe</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378000,2.177776&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Federal Cafe Parlament
    {
      coords: {
        lat: 41.376802,
        lng: 2.162845
      },
      iconImage: {
        url: '/img/icon/coffee.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Coffee</p>
                  <h5>Federal Cafe Parlament</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376802,2.162845&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Satan's Coffee Corner
    {
      coords: {
        lat: 41.38265,
        lng: 2.175211
      },
      iconImage: {
        url: '/img/icon/coffee.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Coffee</p>
                  <h5>Satan's Coffee Corner</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382650,2.175211&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // SlowMov
    {
      coords: {
        lat: 41.39817,
        lng: 2.154821
      },
      iconImage: {
        url: '/img/icon/coffee.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Coffee</p>
                  <h5>SlowMov</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.398170,2.154821&amp;ll=">GO!</a>
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
