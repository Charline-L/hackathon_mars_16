// LINKE

var menu = document.getElementsByTagName("nav")[0].offsetLeft;
var menu = false;


var page = ["villeurbanne.html"]


// MENU

function menuOpen(){
  if(!menu){
    document.getElementsByTagName("nav")[0].classList.remove("fermerMenu");
    document.getElementsByTagName("nav")[0].classList.add("ouvrirMenu");
    menu = true
  }
  else {
    document.getElementsByTagName("nav")[0].classList.remove("ouvrirMenu");
    document.getElementsByTagName("nav")[0].classList.add("fermerMenu");
    menu = false
  }
}


// MARKER + MAP

var appMap = {
  init: function () {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.7546102, lng: 4.8573142},
      zoom: 13,
      disableDefaultUI: true
    });

    var markerVilleurbanne = new google.maps.Marker({
      position: {
        lat: 45.7676951,
        lng: 4.881084
      },
      map: map,
      customInfo: 0
    });
    markerVilleurbanne.addListener("click", appMap.quartier);
  },
  quartier: function(){
    redirection(this.customInfo);
  }
}





// REDIRECTION

function redirection(a){
  document.location = page[0];
}
