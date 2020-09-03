const Ship = require("../src/Ship.js");

describe("ship", () => {
  it("returns an object", () => {
    expect(new Ship("Luxury", "Hull")).toBeInstanceOf(Object);
  });
});

describe("starting point", () => {
  it("returns the starting point of the ship", () => {
    const ship = new Ship("Hull");
    expect(ship.location).toEqual("Hull");
  });
});
