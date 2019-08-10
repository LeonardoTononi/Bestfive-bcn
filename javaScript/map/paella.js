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
    // 7 Portes
    {
      coords: {
        lat: 41.382138,
        lng: 2.183262
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>Paella</p>
                     <h5>7 Portes</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382138,2.183262&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // El Glop
    {
      coords: {
        lat: 41.389507,
        lng: 2.170556
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>El Glop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.389507,2.170556&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Can Solé
    {
      coords: {
        lat: 41.378884,
        lng: 2.188393
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>Can Solé</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378884,2.188393&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Litoral
    {
      coords: {
        lat: 41.352229,
        lng: 2.157799
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>Litoral</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.352229,2.157799&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Can Ros
    {
      coords: {
        lat: 41.3839,
        lng: 2.177833
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>Can Ros</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.377338,2.189372&amp;ll=">GO!</a>
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
