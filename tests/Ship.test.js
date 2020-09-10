const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("with ports and an itinerary", () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);

    expect(Ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const itinerary = new Itinerary([dover]);

    expect(ship.currentPort).toBe(dover);
  });

  it("can set sail", () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });

  it("can dock at a different port", () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });

  it("can't sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});
