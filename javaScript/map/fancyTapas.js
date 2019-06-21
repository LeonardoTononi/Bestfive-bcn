function fancyTapasInitMap() {
  let options = {
    zoom: 13,
    center: {
      lat: 41.3887,
      lng: 2.1589
    },
    styles: [{
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      }
    ]
  };

  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  let markers = [
    // La platilleria
    {
      coords: {
        lat: 41.371562,
        lng: 2.165384
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>La platilleria</h5><h2>Now: <span class="open">Open</span> (12.00 - 23.00)</h2><h1><a href="#"><span class="open"> GO! <span></a></h1></section>'
    },
    // Bar canete
    {
      coords: {
        lat: 41.379161,
        lng: 2.173134
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>Bar cañete</h5><h2>Now: <span class="open">Open</span> (18.00 - 23.00)</h2><h1><a href="#"><span class="open"> GO! <span></a></h1></section>'
    },
    // Bar Resolis
    {
      coords: {
        lat: 41.380420,
        lng: 2.167989
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>Bar Resolis</h5><h2>Now: <span class="open">Open</span> (11.00 - 23.00)</h2><h1><a href="#"><span class="open"> GO! <span></a></h1></section>'
    },
    // Cal Pep
    {
      coords: {
        lat: 41.383975,
        lng: 2.183409
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>Cal Pep</h5><h2>Now: <span class="open">Open</span> (19.00 - 23.00)</h2><h1><a href="#"><span class="open"> GO! <span></a></h1></section>'
    },
    // Bar Brutal
    {
      coords: {
        lat: 41.384772,
        lng: 2.179837
      },
      iconImage: 'https://img.icons8.com/color/40/000000/tapas.png',
      content: '<section class="maps-content"><p>FancyTapas</p><h5>Can Cisa Bar Brutal</h5><h2>Now: <span class="close">Close</span> (11.00 - 23.00)</h2><h1><a href="#"><span class="close"> GO! <span></a></h1></section>'
    }

  ];

  // Loop through markers 
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add marker function 
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    // Check content 
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      }, toggleBounce);
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