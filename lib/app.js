(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  var gems = [
    { name: 'Azurite', price: 110.5, images: [] },
    { name: 'Bloodstone', price: 8.97,
      images: [
              "http://hijk.it/image/0t1y1l3T1226/gem-01.gif",
              "http://hijk.it/image/1i2z0R1g1z0Z/gem-02.gif",
              "http://hijk.it/image/2c3h3m0I3n1c/gem-03.gif",
              "http://hijk.it/image/000Y2p0K2g1i/gem-04.gif",
              "http://hijk.it/image/1y0p2h0y1Z2g/gem-05.gif",
              "http://hijk.it/image/3l2L0p0d1v1m/gem-06.gif",
              "http://hijk.it/image/1228012u1w2V/gem-07.gif",
              "http://hijk.it/image/3G2J0f231V2w/gem-08.gif",
              "http://hijk.it/image/321Z3m391s02/gem-09.gif"
             ],
    },
    { name: 'Zircon', price: 1.45,
      images: [
              "http://hijk.it/image/0t1y1l3T1226/gem-01.gif",
              "http://hijk.it/image/1i2z0R1g1z0Z/gem-02.gif",
              "http://hijk.it/image/2c3h3m0I3n1c/gem-03.gif",
              "http://hijk.it/image/000Y2p0K2g1i/gem-04.gif",
              "http://hijk.it/image/1y0p2h0y1Z2g/gem-05.gif",
              "http://hijk.it/image/3l2L0p0d1v1m/gem-06.gif",
              "http://hijk.it/image/1228012u1w2V/gem-07.gif",
              "http://hijk.it/image/3G2J0f231V2w/gem-08.gif",
              "http://hijk.it/image/321Z3m391s02/gem-09.gif"
             ],
    },
  ];

})();
