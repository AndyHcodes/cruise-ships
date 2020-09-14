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
    const dover = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
