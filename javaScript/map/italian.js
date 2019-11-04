// ==========================
//         INIT MAP
// ==========================
function initMap() {
  let options = {
    zoom: 13,
    center: {
      lat: 41.380574,
      lng: 2.185043
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
    // Madre Lievito
    {
      coords: {
        lat: 41.39763,
        lng: 2.203284
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>Madre Lievito</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.397630,2.203284&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Le Cucine Mandarosso
    {
      coords: {
        lat: 41.386932,
        lng: 2.17621
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>Le Cucine Mandarosso</h5>
                    <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.386932,2.176210&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Frankie Gallo cha cha cha
    {
      coords: {
        lat: 41.378556,
        lng: 2.17246
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>Frankie Gallo <br> Cha Cha Cha</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378556,2.172460&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // La Bella Napoli
    {
      coords: {
        lat: 41.374362,
        lng: 2.163734
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>La Bella Napoli</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.374362,2.163734&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Benzina
    {
      coords: {
        lat: 41.376175,
        lng: 2.162777
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>Benzina</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376175,2.162777&amp;ll=">GO!</a>
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
