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
    // da Nanni
    {
      coords: {
        lat: 41.38318,
        lng: 2.177385
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                     <p>StreetFood</p>
                     <h5>Pizzeria da Nanni</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383180,2.177385&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // The fish and chips shop Universitat
    {
      coords: {
        lat: 41.378535,
        lng: 2.154525
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>The fish and chips shop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378535,2.154525&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // The fish and chips shop Gracia
    {
      coords: {
        lat: 41.39945,
        lng: 2.150471
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>The fish and chips shop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.399450,2.150471&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // The fish and chips shop Sant Antoni
    {
      coords: {
        lat: 41.37854,
        lng: 2.154513
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>The fish and chips shop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378540,2.154513&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // The fish and chips shop Gluten Free
    {
      coords: {
        lat: 41.386805,
        lng: 2.156696
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>The fish and chips shop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.386805,2.156696&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // La Parra
    {
      coords: {
        lat: 41.383025,
        lng: 2.165318
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>La Parra</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383025,2.165318&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bacoa Burger plaza real
    {
      coords: {
        lat: 41.380678,
        lng: 2.174705
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>Bacoa Burger</h5>
                  <div class="go-btn">
                      <a href="https://maps.google.com/maps?daddr=41.380678,2.174705&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bacoa Burger barceloneta
    {
      coords: {
        lat: 41.376764,
        lng: 2.190358
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>Bacoa Burger</h5>
                  <div class="go-btn">
                      <a href="https://maps.google.com/maps?daddr=41.376764,2.190358&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bacoa Burger Born Bajo
    {
      coords: {
        lat: 41.383516,
        lng: 2.183696
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>Bacoa Burger</h5>
                  <div class="go-btn">
                      <a href="https://maps.google.com/maps?daddr=41.383516,2.183696&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bacoa Burger Born Alto
    {
      coords: {
        lat: 41.385504,
        lng: 2.178871
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>Bacoa Burger</h5>
                  <div class="go-btn">
                      <a href="https://maps.google.com/maps?daddr=41.385504,2.178871&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Maoz
    {
      coords: {
        lat: 41.38084,
        lng: 2.174755
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(20, 20)
      },
      content: `<section class="maps-content">
                  <p>StreetFood</p>
                  <h5>Maoz</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.380840,2.174755&amp;ll=">GO!</a>
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
