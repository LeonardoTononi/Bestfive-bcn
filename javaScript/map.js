function initMap() {
  // Map options 
  let options = {
    zoom: 12,
    center: {
      lat: 41.3887,
      lng: 2.1589
    }
  };
  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Add marker
  /*  let marker = new google.maps.Marker({
    position: {
      lat: 41.378038,
      lng: 2.177780
    },
    map: map,
    icon: 'https://img.icons8.com/color/25/000000/cafe.png'
  });

  let infoWindow = new google.maps.InfoWindow({
    content: '<h3>Federal Café</h3><p>Good coffè and good place to work!</p>'
  });

  marker.addListener('click', function () {
    infoWindow.open(map, marker);
  }); */

  // Add marker function 
  function addMarker(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: 'https://img.icons8.com/color/25/000000/cafe.png'
    });
  }

  addMarker({
    lat: 41.378038,
    lng: 2.177780
  });
}