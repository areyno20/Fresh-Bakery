var orderNumber= document.getElementById('quantity') ; 
var totalOrder= document.getElementById('totalorder') ; 
var map = document.getElementById('map');
//totalOrder.addEventListener("click", orderInput);

var quantity1 = document.getElementById('quantity1');
var quantity2 = document.getElementById('quantity2');
var quantity3 = document.getElementById('quantity3');
var quantity4 = document.getElementById('quantity4');

const totalQuantity = [quantity1*30 + quantity2*15 + product3*10 + product4*5]

function orderInput(){

}


//Displays the location of the store at the bottom
function initMap(){
  document.getElementById("map").display
    var location = {lat: 43.659815, lng: -79.408903}
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 4,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    
  }
  initMap();

  function distancebetween(){
    //calculation between the initmap and user location input
  }
// delivery and pickup check boxes only one checkbox allowed
