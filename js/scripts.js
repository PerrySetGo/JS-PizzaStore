function Pizza(size, pizzaToppings) {
  this.size = size;
  this.pizzaToppings = pizzaToppings;
}


Pizza.prototype.calcToppingsPrice = function() {
  var toppingsMap = new Map();
  toppingsMap.set ("Red Sauce", 0)
  toppingsMap.set ("BBQ Sauce", 0)
  toppingsMap.set ("White Sauce", 0)
  toppingsMap.set ("Pepperoni", 1)
  toppingsMap.set ("Ham", 1)
  toppingsMap.set ("Grilled Chicken", 2)
  toppingsMap.set ("Sausage", 1)
  toppingsMap.set ("Seafood", 3)
  toppingsMap.set ("Mushrooms", 0.5)
  toppingsMap.set ("Black Olives", 0.5)
  toppingsMap.set ("Onions", 0.5)
  toppingsMap.set ("Spinach", 0.5)
  toppingsMap.set ("Jalapenos", 0.5)
  toppingsMap.set ("Artichokes", 1)
  toppingsMap.set ("Banana Peppers", 0.5)
  toppingsMap.set ("Regular Cheese", 0)
  toppingsMap.set ("Mozzarella", 1)
  toppingsMap.set ("Feta Cheese", 1.5)
  toppingsMap.set ("Vegan Cheese", 1.5)

  var totalToppingsPrice = 0;
  for (var key of toppingsMap.keys()){
    for(var i = 0; i < this.pizzaToppings.length; i++)

    if (key == this.pizzaToppings[i] ){
      var toppingPrice = toppingsMap.get(key);
      totalToppingsPrice = totalToppingsPrice + toppingPrice;
    }
  }
  return totalToppingsPrice;  
}

Pizza.prototype.calcPrice = function () {
  var basePrice = 0;
  switch(this.size) {
    case 8:
        basePrice = 7.99; 
        break;
    case 12:
        basePrice = 11.99; 
        break;
    case 15:
        basePrice = 13.99;
        break;
    default: //18
        basePrice = 18.99
  }

  return basePrice;
}


////// UI /////////
$(document).ready(function(event) {
  $('#calculatePrice').click(function(event){
  event.preventDefault();

  var pizzaToppings = [];
  inputs = document.getElementsByClassName("topping");

    for (var i = inputs.length -1 ; i>= 0; i--){
        if (inputs[i].type === "checkbox" && inputs[i].checked){
              pizzaToppings.push(inputs[i].value);  
            }
        }
          debugger; 
    var pizzaSize = parseInt($('input[name=size]:checked').val());
    var quantity = parseInt($('input#quantity').val());
    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    var toppingPrice = newPizza.calcToppingsPrice();
    var basePrice = newPizza.calcPrice(toppingPrice);
    var pricePer =  toppingPrice + basePrice; 
    $('#pricePer').text("$" + pricePer); 
    var priceTotal = quantity * pricePer; 
    $('#priceTotal').text("$" + priceTotal); 
  });

  $('#placeOrder').click(function(event) {
      event.preventDefault();
          $(".orderPlaced").show();
       
      });
});