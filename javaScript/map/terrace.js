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
    // Bar Central
    {
      coords: {
        lat: 41.38355,
        lng: 2.168818
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>Terrace</p>
                     <h5>Bar Central</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383550,2.168818&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // El Jardí
    {
      coords: {
        lat: 41.380953,
        lng: 2.170089
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>El Jardí</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.380953,2.170089&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Antic Teatre
    {
      coords: {
        lat: 41.387167,
        lng: 2.175944
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>Antic Teatre</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.387167,2.175944&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Flax and Kale
    {
      coords: {
        lat: 41.38519,
        lng: 2.165476
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>Flax and Kale</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.385190,2.165476&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // La Caseta del Migdia
    {
      coords: {
        lat: 41.359686,
        lng: 2.16074
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>La Caseta <br> del Migdia</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.359686,2.160740&amp;ll=">GO!</a>
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
