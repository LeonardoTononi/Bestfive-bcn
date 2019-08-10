function startMap() {
  // Map options
  let options = {
    zoom: 12,
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
    // ================================= LOCAL TAPAS ===========================================
    // La Cova Fumada
    {
      coords: {
        lat: 41.379294,
        lng: 2.189208
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>LocalTapas</p>
                     <h5>La Cova Fumada</h5>
                     <h2>Now: 
                        <span class="open">Open</span> (12.00 - 23.00)
                     </h2>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
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
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Can Paixano</h5>
                  <h2>Now: 
                     <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                     <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
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
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bar Celta Pulperia</h5>
                  <h2>Now: 
                     <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                     <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
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
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bodega Vasconia</h5>
                  <h2>Now: 
                     <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                     <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
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
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>La Bombeta</h5>
                  <h2>Now: 
                     <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                     <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    },

    // ================================= FANCY TAPAS ===========================================

    // La platilleria
    {
      coords: {
        lat: 41.371562,
        lng: 2.165384
      },
      iconImage: {
        url: '/img/icon/fancyTapas2.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>FancyTapas</p>
                     <h5>La platilleria</h5>
                     <h2>Now: 
                        <span class="open">Open</span> (12.00 - 23.00)
                     </h2>
                     <h1>
                       <a href="#">
                          <span class="open">GO!<span>
                       </a>
                     </h1>
                </section>`
    },
    // Bar canete
    {
      coords: {
        lat: 41.379161,
        lng: 2.173134
      },
      iconImage: {
        url: '/img/icon/fancyTapas2.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>FancyTapas</p>
                  <h5>Bar cañete</h5>
                  <h2>Now: 
                    <span class="open">Open</span> (18.00 - 23.00)
                  </h2>
                  <h1>
                    <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    },
    // La Alcoba Azul
    {
      coords: {
        lat: 41.382905,
        lng: 2.175482
      },
      iconImage: {
        url: '/img/icon/fancyTapas2.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>FancyTapas</p>
                  <h5>La Alcoba Azul</h5>
                  <h2>Now: 
                    <span class="open">Open</span> (12.00 - 23.00)
                  </h2>
                  <h1>
                    <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    },
    // El Nacional
    {
      coords: {
        lat: 41.390548,
        lng: 2.168283
      },
      iconImage: {
        url: '/img/icon/fancyTapas2.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>FancyTapas</p>
                  <h5>El Nacional</h5>
                  <h2>Now: 
                    <span class="open">Open</span> (10.00 - 23.00)
                  </h2>
                  <h1>
                    <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    }, // Cal Pep
    {
      coords: {
        lat: 41.383975,
        lng: 2.183409
      },
      iconImage: {
        url: '/img/icon/fancyTapas2.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>FancyTapas</p>
                  <h5>Cal Pep</h5>
                  <h2>Now: 
                    <span class="open">Open</span> (14.00 - 23.00)
                  </h2>
                  <h1>
                    <a href="#">
                       <span class="open"> GO! <span>
                    </a>
                  </h1>
                </section>`
    },

    // ================================= ICE CREAM ===========================================

    // Gocce di latte
    {
      coords: {
        lat: 41.383204,
        lng: 2.182705
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(18, 18)
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
        scaledSize: new google.maps.Size(18, 18)
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
        scaledSize: new google.maps.Size(18, 18)
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
        scaledSize: new google.maps.Size(18, 18)
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
        scaledSize: new google.maps.Size(18, 18)
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
    },
    // ================================= STREET FOOD ===========================================
    // Gallo Nero
    {
      coords: {
        lat: 41.383029,
        lng: 2.177472
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>CheapEats</p>
                     <h5>Gallo Nero</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=441.383029,2.177472&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // The fish and chips shop
    {
      coords: {
        lat: 41.378535,
        lng: 2.154525
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
                  <h5>The fish and chips shop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378535,2.154525&amp;ll=">GO!</a>
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
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
                  <h5>La Parra</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383025,2.165318&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bacoa Burger
    {
      coords: {
        lat: 41.380678,
        lng: 2.174705
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
                  <h5>Bacoa Burger</h5>
                  <div class="go-btn">
                      <a href="https://maps.google.com/maps?daddr=41.380678,2.174705&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Maoz
    {
      coords: {
        lat: 41.38084,
        lng: 2.174755
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/hamburger.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
                  <h5>Maoz</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.380840,2.174755&amp;ll=">GO!</a>
                  </div>
                </section>`
    },

    // ================================= HOPPING STREETS ===========================================
    // Carrer de Blai
    {
      coords: {
        lat: 41.373677,
        lng: 2.164501
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>HoppingStreet</p>
                     <h5>Carrer de Blai</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.373677,2.164501&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Carrer del Parlament
    {
      coords: {
        lat: 41.376485,
        lng: 2.162581
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer del Parlament</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376485,2.162581&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Carrer de la Mercè
    {
      coords: {
        lat: 41.382905,
        lng: 2.175482
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer de la Mercè</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382905,2.175482&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Carrer de Joaquín Costa
    {
      coords: {
        lat: 41.382505,
        lng: 2.165831
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Carrer de Joaquín Costa</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382505,2.165831&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Passeig del Born
    {
      coords: {
        lat: 41.38473,
        lng: 2.182853
      },
      iconImage: {
        url: 'https://img.icons8.com/offices/80/000000/running-rabbit.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>HoppingStreet</p>
                  <h5>Passeig del Born</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.38473,2.182853&amp;ll=">GO!</a>
                  </div>
                </section>`
    },

    // ================================= BEACH ===========================================
    // Barceloneta
    {
      coords: {
        lat: 41.378399,
        lng: 2.192519
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                     <p>Beach</p>
                     <h5>Platja Barceloneta</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378399,2.192519&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Bogatell
    {
      coords: {
        lat: 41.394434,
        lng: 2.207097
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja del Bogatell</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.394434,2.207097&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Platja de la Nova Icària
    {
      coords: {
        lat: 41.390398,
        lng: 2.202294
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja de la Nova Icària</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.390398,2.202294&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Platja de la marbella
    {
      coords: {
        lat: 41.398589,
        lng: 2.21256
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja de la marbella</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.398589,2.212560&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Platja del Somorrostro
    {
      coords: {
        lat: 41.3855099,
        lng: 2.1947129
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/beach.png',
        scaledSize: new google.maps.Size(18, 18)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja del Somorrostro</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.38473,2.182853&amp;ll=">GO!</a>
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
