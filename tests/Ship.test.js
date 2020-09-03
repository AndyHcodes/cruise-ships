const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("ship", () => {
  it("returns an object", () => {
    expect(new Ship("Dover")).toBeInstanceOf(Object);
  });
});

describe("starting point", () => {
  it("returns the starting point of the ship", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    expect(ship.currentPort).toEqual(port);
  });
});

describe("setting sail", () => {
  it("ship can set sail", () => {
    const ship = new Ship("Dover");
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe("docking", () => {
  it("ship can dock in a different port", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);
    const calais = new Port("Calais");
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
