function Pizza(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.calcToppingsPrice = function() {

  var toppingsMap = new Map();
  toppingsMap.set ("Red Sauce", 0.0)
  toppingsMap.set ("BBQ Sauce", 0.0)
  toppingsMap.set ("White Sauce", 0.0)
  toppingsMap.set ("Pepperoni", 1.0)
  toppingsMap.set ("Ham", 1.0)
  toppingsMap.set ("Grilled Chicken", 2.0)
  toppingsMap.set ("Sausage", 1.0)
  toppingsMap.set ("Seafood", 3.0)
  toppingsMap.set ("Mushrooms", 0.5)
  toppingsMap.set ("Black Olives", 0.5)
  toppingsMap.set ("Onions", 0.5)
  toppingsMap.set ("Spinach", 0.5)
  toppingsMap.set ("Jalapenos", 0.5)
  toppingsMap.set ("Artichokes", 1.0)
  toppingsMap.set ("Banana Peppers", 0.5)
  toppingsMap.set ("Regular Cheese", 0.0)
  toppingsMap.set ("Mozzarella", 1.0)
  toppingsMap.set ("Feta Cheese", 1.5)
  toppingsMap.set ("Vegan Cheese", 1.5)

  var totalToppingsPrice = 0;
  for (var key of toppingsMap.keys()){
    for(var i = 0; i < this.toppings.length; i++)

    if (key == this.toppings[i] ){
      var toppingPrice = toppingsMap.get(key);
      totalToppingsPrice = totalToppingsPrice + toppingPrice;
    }
  }
  return totalToppingsPrice;  
}

Pizza.prototype.calcPrice = function () {
  var totalToppingsPrice = this.calcToppingsPrice(); 
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

  return +(parseFloat(basePrice + totalToppingsPrice).toFixed(2)); //+avoids string conversion
}

Pizza.prototype.calcQuantityPrice = function() {
  return this.calcPrice() * this.quantity; 
}



////// UI /////////