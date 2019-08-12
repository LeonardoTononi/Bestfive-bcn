// ==========================
//         INIT MAP
// ==========================
function initMap() {
  let options = {
    zoom: 6,
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
    // Cadaques casa Dali
    {
      coords: {
        lat: 42.293225,
        lng: 3.285977
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>DayTrip</p>
                     <h5>Cadaques <br />
                        Casa Dali</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=42.293225,3.285977&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Girona Museo Dali
    {
      coords: {
        lat: 42.267999,
        lng: 2.959655
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>Girona Museo Dali</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=42.267999,2.959655&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // San Pol de Mar
    {
      coords: {
        lat: 41.603985,
        lng: 2.624428
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>San Pol de Mar</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.603985,2.624428&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Montserrat
    {
      coords: {
        lat: 41.595877,
        lng: 1.829835
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>Montserrat</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.595877,1.829835&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Sitges
    {
      coords: {
        lat: 41.237436,
        lng: 1.805738
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>Sitges</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.237436,1.805738&amp;ll=">GO!</a>
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

function mapsSelector() {
  if (
    navigator.platform.indexOf('iPhone') != -1 ||
    navigator.platform.indexOf('iPad') != -1 ||
    navigator.platform.indexOf('iPod') != -1
  )
    window.open('maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=');
  else window.open('https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=');
}
