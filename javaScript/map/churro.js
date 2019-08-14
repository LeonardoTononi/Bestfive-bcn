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
    // Granja Viader
    {
      coords: {
        lat: 41.383048,
        lng: 2.170836
      },
      iconImage: {
        url: '/img/icon/churro.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>Churros</p>
                     <h5>Granja M Viader</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383048,2.170836&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Granja Dulcinea
    {
      coords: {
        lat: 41.382496,
        lng: 2.173434
      },
      iconImage: {
        url: '/img/icon/churro.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Churros</p>
                  <h5>Granja Dulcinea</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382496,2.173434&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // La Pallaresa
    {
      coords: {
        lat: 41.382911,
        lng: 2.17278
      },
      iconImage: {
        url: '/img/icon/churro.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Churros</p>
                  <h5>La Pallaresa</h5>
                 <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382911,2.172780&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // La Nena
    {
      coords: {
        lat: 41.40265,
        lng: 2.158809
      },
      iconImage: {
        url: '/img/icon/churro.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Churros</p>
                  <h5>La Nena</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.402650,2.158809&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Xurreria Trébol
    {
      coords: {
        lat: 41.397893,
        lng: 2.16089
      },
      iconImage: {
        url: '/img/icon/churro.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>Churros</p>
                  <h5>Xurreria Trébol</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.397893,2.160890&amp;ll=">GO!</a>
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
