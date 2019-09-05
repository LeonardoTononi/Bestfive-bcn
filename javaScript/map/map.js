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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>LocalTapas</p>
                     <h5>La Cova Fumada</h5>
                     <div class="go-btn">
                       <a href="https://maps.google.com/maps?daddr=41.379294,2.189208&amp;ll=">
                          GO!
                       </a>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Can Paixano</h5>
                  <div class="go-btn">
                     <a href="https://maps.google.com/maps?daddr=41.381815,2.183370&amp;ll=">
                       GO!
                    </a>
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
    // Bar Celta Pulperia
    {
      coords: {
        lat: 41.379938,
        lng: 2.180088
      },
      iconImage: {
        url: '/img/icon/localTapas.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bar Celta Pulperia</h5>
                  <div class="go-btn">
                     <a href="https://maps.google.com/maps?daddr=41.379938,2.180088&amp;ll=">GO!
                    </a>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>Bodega Vasconia</h5>
                  <div class="go-btn">
                     <a href="https://maps.google.com/maps?daddr=41.381087,2.179913&amp;ll=">
                       GO!
                    </a>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>LocalTapas</p>
                  <h5>La Bombeta</h5>
                  <div class="go-btn">
                     <a href="https://maps.google.com/maps?daddr=41.380577,2.187703&amp;ll=">
                       GO!
                    </a>
                  </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>WowTapas</p>
                     <h5>La platilleria</h5>
                     <div class="go-btn">
                       <a href="https://maps.google.com/maps?daddr=41.371562,2.165384&amp;ll=">
                          GO!
                       </a>
                     </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>WowTapas</p>
                  <h5>Bar cañete</h5>
                  <div class="go-btn">
                    <a href="https://maps.google.com/maps?daddr=41.379161,2.173134&amp;ll=">
                       GO!
                    </a>
                  </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>WowTapas</p>
                  <h5>La Alcoba Azul</h5>
                  <div class="go-btn">
                    <a href="https://maps.google.com/maps?daddr=41.382905,2.175482&amp;ll=">
                       GO!
                    </a>
                  </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>WowTapas</p>
                  <h5>El Nacional</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.390548,2.168283&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Cal Pep
    {
      coords: {
        lat: 41.383975,
        lng: 2.183409
      },
      iconImage: {
        url: '/img/icon/fancyTapas2.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>WowTapas</p>
                  <h5>Cal Pep</h5>
                  <div class="go-btn">
                    <a href="https://maps.google.com/maps?daddr=41.383975,2.183409&amp;ll=">
                       GO!
                    </a>
                  </div>
                </section>`
    },

    // ================================= ICE CREAM ===========================================

    // Oggi Gelato
    {
      coords: {
        lat: 41.386571,
        lng: 2.173393
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Oggi Gelato</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.386571,2.173393&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // Gocce di latte
    {
      coords: {
        lat: 41.383204,
        lng: 2.182705
      },
      iconImage: {
        url: '/img/icon/ice-cream.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Gocce di Latte</h5>
                    <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383204,2.182705&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Paral•lelo</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.396990,2.156378&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>DelaCrem</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.387996,2.161797&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>IceCream</p>
                     <h5>Gelaaati! di marco</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383209,2.177303&amp;ll=">GO!</a>
                     </div>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>CheapEats</p>
                     <h5>Gallo Nero</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=441.383029,2.177472&amp;ll=">GO!</a>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>CheapEats</p>
                  <h5>Bacoa Burger</h5>
                  <div class="go-btn">
                      <a href="https://maps.google.com/maps?daddr=41.385504,2.178871&amp;ll=">GO!</a>
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
        scaledSize: new google.maps.Size(30, 30)
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(30, 30)
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(30, 30)
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
        lat: 41.379878,
        lng: 2.180129
      },
      iconImage: {
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(30, 30)
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(30, 30)
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
        url: '/img/icon/rabbit.png',
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Beach</p>
                  <h5>Platja del Somorrostro</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.38473,2.182853&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    {
      coords: {
        lat: 41.403572,
        lng: 2.174418
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Church</p>
                     <h5>Sagrada Familia</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.403572,2.174418&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Santa Maria del Mar
    {
      coords: {
        lat: 41.383898,
        lng: 2.182085
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Santa Maria del Mar</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383898,2.182085&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Santa Maria del Pi
    {
      coords: {
        lat: 41.382147,
        lng: 2.173948
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Santa Maria del Pi</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382147,2.173948&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Catedral de Barcelona
    {
      coords: {
        lat: 41.383937,
        lng: 2.176202
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Catedral de Barcelona</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383937,2.176202&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Monasterio Sant Pau del Camp
    {
      coords: {
        lat: 41.376204,
        lng: 2.169478
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Platja del Somorrostro</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376204,2.169478&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // ================================= CHURCH ===========================================
    {
      coords: {
        lat: 41.403572,
        lng: 2.174418
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Church</p>
                     <h5>Sagrada Familia</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.403572,2.174418&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Santa Maria del Mar
    {
      coords: {
        lat: 41.383898,
        lng: 2.182085
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Santa Maria del Mar</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383898,2.182085&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Santa Maria del Pi
    {
      coords: {
        lat: 41.382147,
        lng: 2.173948
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Santa Maria del Pi</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382147,2.173948&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Catedral de Barcelona
    {
      coords: {
        lat: 41.383937,
        lng: 2.176202
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Catedral de Barcelona</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383937,2.176202&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Monasterio Sant Pau del Camp
    {
      coords: {
        lat: 41.376204,
        lng: 2.169478
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/cathedral.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Church</p>
                  <h5>Platja del Somorrostro</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376204,2.169478&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // ================================= MUSEUM ===========================================

    // Picasso Museum
    {
      coords: {
        lat: 41.385221,
        lng: 2.180896
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Museum</p>
                     <h5>Picasso Museum</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.385221,2.180896&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Fundación miró
    {
      coords: {
        lat: 41.368645,
        lng: 2.159842
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>Fundación <br> Joan Miró</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.368645,2.159842&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // MACBA
    {
      coords: {
        lat: 41.38286,
        lng: 2.166633
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>MACBA</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382860,2.166633&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // MNAC
    {
      coords: {
        lat: 41.368863,
        lng: 2.153274
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>MNAC</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.368863,2.153274&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // MUHBA
    {
      coords: {
        lat: 41.3839,
        lng: 2.177833
      },
      iconImage: {
        url: '/img/icon/picasso.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Museum</p>
                  <h5>MUHBA</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383900,2.1778333&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // ================================= CHURRO ===========================================
    // Granja Viader
    {
      coords: {
        lat: 41.383048,
        lng: 2.170836
      },
      iconImage: {
        url: '/img/icon/churro.png',
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Churros</p>
                  <h5>Xurreria Trébol</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.397893,2.160890&amp;ll=">GO!</a>
                  </div>
                </section>`
    },

    // ================================= ITALIAN ===========================================
    // Madre Lievito
    {
      coords: {
        lat: 41.39763,
        lng: 2.203284
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
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
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>La Bella Napoli</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.374362,2.163734&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // La pizza del Sortidor
    {
      coords: {
        lat: 41.372748,
        lng: 2.16246
      },
      iconImage: {
        url: '/img/icon/spaghetti.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Italian</p>
                     <h5>La pizza <br> del Sortidor</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.372748,2.162460&amp;ll=">GO!</a>
                     </div>
                </section>`
    },
    // ================================= PAELLA ===========================================
    // 7 Portes
    {
      coords: {
        lat: 41.382138,
        lng: 2.183262
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Paella</p>
                     <h5>7 Portes</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.382138,2.183262&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // El Glop
    {
      coords: {
        lat: 41.404891,
        lng: 2.15954
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>El Glop</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.404891,2.159540&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Can Solé
    {
      coords: {
        lat: 41.378884,
        lng: 2.188393
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>Can Solé</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.378884,2.188393&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Litoral
    {
      coords: {
        lat: 41.37607,
        lng: 2.190066
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>Litoral</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.376070,2.190066">GO!</a>
                  </div>
                </section>`
    }, // Can Ros
    {
      coords: {
        lat: 41.377313,
        lng: 2.189371
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/paella.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Paella</p>
                  <h5>Can Ros</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.377313,2.189371&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // ================================= TERRACE ===========================================
    // Bar Central
    {
      coords: {
        lat: 41.38355,
        lng: 2.168818
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>Terrace</p>
                     <h5>Bar Central</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.383550,2.168818&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // El Jardí
    {
      coords: {
        lat: 41.380953,
        lng: 2.170089
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>El Jardí</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.380953,2.170089&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Antic Teatre
    {
      coords: {
        lat: 41.387167,
        lng: 2.175944
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>Antic Teatre</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.387167,2.175944&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Flax and Kale
    {
      coords: {
        lat: 41.38519,
        lng: 2.165476
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>Flax and Kale</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.385190,2.165476&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // La Caseta del Migdia
    {
      coords: {
        lat: 41.359686,
        lng: 2.16074
      },
      iconImage: {
        url: 'https://img.icons8.com/color/96/000000/summer.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>Terrace</p>
                  <h5>La Caseta <br> del Migdia</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.359686,2.160740&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // ================================= DAY TRIP ===========================================
    // Cadaques casa Dali
    {
      coords: {
        lat: 42.293225,
        lng: 3.285977
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                     <p>DayTrip</p>
                     <h5>Cadaques <br />
                        Casa Dali</h5>
                     <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=42.293225,3.285977&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Girona Museo Dali
    {
      coords: {
        lat: 42.267999,
        lng: 2.959655
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>Girona Museo Dali</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=42.267999,2.959655&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // San Pol de Mar
    {
      coords: {
        lat: 41.603985,
        lng: 2.624428
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>San Pol de Mar</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.603985,2.624428&amp;ll=">GO!</a>
                  </div>
                </section>`
    },
    // Montserrat
    {
      coords: {
        lat: 41.595877,
        lng: 1.829835
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>Montserrat</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.595877,1.829835&amp;ll=">GO!</a>
                  </div>
                </section>`
    }, // Sitges
    {
      coords: {
        lat: 41.237436,
        lng: 1.805738
      },
      iconImage: {
        url: '/img/icon/tour-bus.png',
        scaledSize: new google.maps.Size(30, 30)
      },
      content: `<section class="maps-content">
                  <p>DayTrip</p>
                  <h5>Sitges</h5>
                  <div class="go-btn">
                        <a href="https://maps.google.com/maps?daddr=41.237436,1.805738&amp;ll=">GO!</a>
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
