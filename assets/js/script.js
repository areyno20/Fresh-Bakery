// Total Order
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