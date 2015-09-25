describe('Pizza', function() {
  it("instantiates as a pizza object", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Black Olives","Ham"], 1);
    expect(testPizza).to.be.instanceOf(Pizza);
  });

  it("creates new pizza that is the correct size", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Black Olives","Ham"], 1);
    expect(testPizza.size).to.equal(12);
  });

  it("creates new pizza that has the correct toppings", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Black Olives","Ham"], 1);
    expect(testPizza.toppings).to.eql(["Red Sauce","Black Olives","Ham"]);
  });

  it("matches the toppings in the array to actual toppings correctly", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Black Olives","Ham"], 1);
    expect(testPizza.toppings[0]).to.equal("Red Sauce");
  });

  it("creates the correct quantity of the pizza", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Black Olives","Ham"], 1);
    expect(testPizza.quantity).to.equal(1);
  });

  it("correctly adds the price for added toppings", function() {
    var testPizza = new Pizza(12, ["White Sauce", "Seafood", "Spinach", "Onions", "Artichokes"], 1);
    expect(testPizza.calcToppingsPrice()).to.equal(5);
  });

  it("correctly returns the base price for a pizza depending on size", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Regular Cheese"], 1); //these toppings have price = 0
    expect(testPizza.calcPrice()).to.equal(11.99);
  });

  it("correctly returns the total price depending on quantity, rounded to two decimals ", function() {
    var testPizza = new Pizza(12, ["Red Sauce","Regular Cheese"], 5); //these toppings have price = 0
    expect(testPizza.calcQuantityPrice()).to.equal(59.95);
  });

});