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
    // La Cova Fumada
    {
      coords: {
        lat: 41.379294,
        lng: 2.189208
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>LocalTapas</p>
                     <h5>La Cova Fumada</h5>
                      <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.379294,2.189208&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Can Paixano
    {
      coords: {
        lat: 41.381815,
        lng: 2.18337
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Can Paixano</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.381815,2.183370&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bar Celta Pulperia</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.379938,2.180088&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Bar Celta Pulperia Due
    {
      coords: {
        lat: 41.386678,
        lng: 2.182337
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bar Celta Pulperia</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.386678, 2.182337&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bodega Vasconia</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.381087,2.179913&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>La Bombeta</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.380577,2.187703&amp;ll=">GO!</a>
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
