// VARIABLES

var longCult = [];
var latCult = [];


var map;
var request = new XMLHttpRequest;

var data;
var dataB;
var dataC;


// FONCTIONS

var appMap = {
  init: function () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 45.7724296,
        lng: 4.8749365
      },
      zoom: 15,
      disableDefaultUI: true
    });
    this.culture();
    this.velov();
    this.perso();
  },
  culture: function(){
    request.open('get', "json/culture.json", true);
    request.send();
    request.onload = this.traiteCulture;
  },
  traiteCulture: function(){
    data = JSON.parse(this.responseText);

    for(var i = 0; i<data.features.length; i++){
      if(
        (
          (data.features[i].geometry.coordinates[0] > 4.820777 ) && (data.features[i].geometry.coordinates[0] < 4.928752)
        )
          &&
        (
          (data.features[i].geometry.coordinates[1] > 45.753209) && (data.features[i].geometry.coordinates[1] < 45.792542)
        )
      ){
        var markerCulturel = new google.maps.Marker({
          position: {
            lat: data.features[i].geometry.coordinates[1],
            lng: data.features[i].geometry.coordinates[0]
          },
          map: map,
          icon : "img/markerCulturel.png"
        });
      }
      else {
        console.log("pas dans la périmètre")
      }
    }
  },
  velov: function(){
    request.open('get', "json/velov.json", true);
    request.send();
    request.onload = this.traiteVelov;
  },
  traiteVelov: function(){
    console.log("in");
    dataB = JSON.parse(this.responseText);

    for(var i = 0; i<dataB.features.length; i++){
          console.log("in");
      if(
        (
          (dataB.features[i].geometry.coordinates[0] > 4.820777 ) && (dataB.features[i].geometry.coordinates[0] < 4.928752)
        )
          &&
        (
          (dataB.features[i].geometry.coordinates[1] > 45.753209) && (dataB.features[i].geometry.coordinates[1] < 45.792542)
        )
      ){
        var markerVelov = new google.maps.Marker({
          position: {
            lat: dataB.features[i].geometry.coordinates[1],
            lng: dataB.features[i].geometry.coordinates[0]
          },
          map: map,
          icon : "img/markerTransport.png"
        });
      }
      else {
        console.log("pas dans la périmètre")
      }
    }
  },
  perso: function(){
    request.open('get', "json/perso.json", true);
    request.send();
    request.onload = this.traitePerso;
  },
  traitePerso: function(){
    dataC = JSON.parse(this.responseText);
    for(var i = 0; i<dataC.geoloc.length; i++){
          console.log("in");
      if(
        (
          (dataC.geoloc[i].Longitude > 4.820777 ) && (dataC.geoloc[i].Longitude < 4.928752)
        )
          &&
        (
          (dataC.geoloc[i].Latitude > 45.753209) && (dataC.geoloc[i].Latitude < 45.792542)
        )
      ){
        var markerVelov = new google.maps.Marker({
          position: {
            lat: dataC.geoloc[i].Latitude,
            lng: dataC.geoloc[i].Longitude
          },
          map: map,
          icon : "img/markerUser.png"
        });
      }
      else {
        console.log("pas dans la périmètre")
      }
    }
  }
}
