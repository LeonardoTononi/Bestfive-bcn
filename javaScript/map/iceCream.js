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
    // Gocce di latte
    {
      coords: {
        lat: 41.383204,
        lng: 2.182705
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Gocce di Latte</h5>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
                </section>`
    },
    // Parallelo
    {
      coords: {
        lat: 41.39699,
        lng: 2.156378
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Paral•lelo</h5>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
                </section>`
    },
    // DelaCrem
    {
      coords: {
        lat: 41.387996,
        lng: 2.161797
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>DelaCrem</h5>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
                </section>`
    },
    // Gelaaati!
    {
      coords: {
        lat: 41.383209,
        lng: 2.177303
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Gelaaati! di marco</h5>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
                </section>`
    },
    // Oggi Gelato
    {
      coords: {
        lat: 41.386571,
        lng: 2.173393
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(40, 40)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Oggi Gelato</h5>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
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
