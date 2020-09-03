const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("port", () => {
  it("returns an object", () => {
    const port = new Port("Calais");
    expect(new Port("Calais")).toBeInstanceOf(Object);
  });
});

describe("port name", () => {
  it("returns the port name", () => {
    const port = new Port("Calais");
    expect(port.name).toEqual("Calais");
  });
});
