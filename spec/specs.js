describe('Pizza', function() {
  it("instantiates as a pizza object", function() {
    var testPizza = new Pizza(12, [1,2,3], 1);
    expect(Pizza()).to.be.instanceOf(Pizza);
  });

  it("creates new pizza that is the correct size", function() {
    var testPizza = new Pizza(12, [1,2,3], 1);
    expect(Pizza.size).to.equal(12);
  });

  it("creates new pizza that has the correct toppings", function() {
    var testPizza = new Pizza(12, [1,2,3], 1);
    expect(Pizza.toppings).to.equal([1,2,3]);
  });

  it("matches the toppings in the array to actual toppings correctly", function() {
    var testPizza = new Pizza(12, [1,2,3], 1);
    expect(Pizza.toppings.name[0]).to.equal("red sauce");
  });

  it("creates the correct quantity of the pizza", function() {
    var testPizza = new Pizza(12, [1,2,3], 1);
    expect(Pizza.quantity).to.equal(1);
  });
});
