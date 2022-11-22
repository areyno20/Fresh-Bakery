var orderNumber= document.getElementById('quantity') ; 
var totalOrder= document.getElementById('totalorder') ; 
//totalOrder.addEventListener("click", orderInput);

var quantity1 = document.getElementById('quantity1')
var quantity2 = document.getElementById('quantity2')
var quantity3 = document.getElementById('quantity3')
var quantity4 = document.getElementById('quantity4')

const totalQuantity = [quantity1*30 + quantity2*15 + product3*10 + product4*5]

function orderInput(){

}

// delivery and pickup check boxes only one checkbox allowed

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