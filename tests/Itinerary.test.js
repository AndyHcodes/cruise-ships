const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("itinerary", () => {
  it("returns an object", () => {
    expect(new Itinerary("Carlisle")).toBeInstanceOf(Object);
  });
});

describe("port itinerary", () => {
  it("returns the itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
