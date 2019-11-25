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
    // Biocenter
    {
      coords: {
        lat: 41.382516,
        lng: 2.169379
      },
      iconImage: {
        url: '/img/icon/vegan.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Vegan</p>
                     <h5>Biocenter</h5>
                      <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382516,2.169379&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // La Trocadero
    {
      coords: {
        lat: 41.405019,
        lng: 2.173586
      },
      iconImage: {
        url: '/img/icon/vegan.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Vegan</p>
                  <h5>La Trocadero</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.405019,2.173586&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Rasoterra
    {
      coords: {
        lat: 41.381329,
        lng: 2.178106
      },
      iconImage: {
        url: '/img/icon/vegan.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Vegan</p>
                  <h5>Rasoterra</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.381329,2.178106&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Roots and Roll
    {
      coords: {
        lat: 41.395298,
        lng: 2.171127
      },
      iconImage: {
        url: '/img/icon/vegan.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Vegan</p>
                  <h5>Roots and Roll</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.395298,2.171127&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // The Green Spot
    {
      coords: {
        lat: 41.381828,
        lng: 2.183873
      },
      iconImage: {
        url: '/img/icon/vegan.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Vegan</p>
                  <h5>The Green Spot</h5>
                   <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.381828,2.183873&amp;ll=">GO!</a>
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
