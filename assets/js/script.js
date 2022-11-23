// Total Order
var orderNumber= document.getElementById('quantity') ; 
var totalOrder= document.getElementById('totalorder') ; 

//totalOrder.addEventListener("click", orderInput);

var quantity1 = document.getElementById('quantity1');
var quantity2 = document.getElementById('quantity2');
var quantity3 = document.getElementById('quantity3');
var quantity4 = document.getElementById('quantity4');

const totalQuantity = [quantity1*30 + quantity2*15 + product3*10 + product4*5]

function orderInput(){

}

var map = document.getElementById('map');

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

var origin2 = 'St Patrick Station, Toronto, Canada';
var destinationA = 'Finch Station, Toronto, Canada';

var service = new google.maps.DistanceMatrixService();

service.getDistanceMatrix(
  {
    origins: [origin2],
    destinations: [destinationA],
    travelMode: 'DRIVING',
    drivingOptions: {
        departureTime: new Date(Date.now()),
        trafficModel: 'bestguess'
    },
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: true,
    avoidTolls: true,
  }, callback);

function callback(response, status) {
  if (status == 'OK') {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
  $('#travelTime').text(`Estimated Travel Time: ${duration}`);
  console.log(duration);
}

// delivery and pickup check boxes only one checkbox allowed
// $("input:checkbox").on('click', function() {
//     var box= $(this);
//     if (box.is(":checked")) {
//       var group = "input:checkbox[name='" + box.attr("name") + "']";
//       $(group).prop("checked", false);
//       box.prop("checked", true);
//     } else {
//       box.prop("checked", false);
//     }
//   });

// Order Form Auto Complete
var autocomplete = google.maps.places.Autocomplete;
var nameEl = document.querySelector("#name")
var streetEl= document.querySelector("#street-address") 
var cityEl = document.querySelector("#postal-code")
var postalEl = document.querySelector("#city")
var countryEl = document.querySelector("#country")