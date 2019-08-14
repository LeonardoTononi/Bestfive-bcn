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
    // Sagrada Familia
    {
      coords: {
        lat: 41.403572,
        lng: 2.174418
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Church</p>
                     <h5>Sagrada Familia</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.403572,2.174418&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Santa Maria del Mar
    {
      coords: {
        lat: 41.383898,
        lng: 2.182085
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Santa Maria del Mar</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383898,2.182085&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Santa Maria del Pi
    {
      coords: {
        lat: 41.382147,
        lng: 2.173948
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Santa Maria del Pi</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382147,2.173948&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Catedral de Barcelona
    {
      coords: {
        lat: 41.383937,
        lng: 2.176202
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Catedral de Barcelona</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383937,2.176202&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Monasterio Sant Pau del Camp
    {
      coords: {
        lat: 41.376204,
        lng: 2.169478
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Platja del Somorrostro</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376204,2.169478&amp;ll=">GO!</a>
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
