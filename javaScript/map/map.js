function startMap() {
  // Map options 
  let options = {
    zoom: 12,
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
    // COFFEWORK - FEDERAL CAFE 
    {
      coords: {
        lat: 41.378038,
        lng: 2.177780
      },
      iconImage: 'https://img.icons8.com/color/25/000000/cafe.png',
      content: '<h3>Federal Café</h3><p>Good coffè and good place to work!</p>'
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