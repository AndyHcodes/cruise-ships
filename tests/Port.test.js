const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("port and ships", () => {
  let port;
  let ship;

  beforeEach(() => {
    port = new Port("Calais");
    ship = "titanic";
  });

  it("returns an object", () => {
    expect(new Port("Calais")).toBeInstanceOf(Object);
  });

  it("returns the port name", () => {
    expect(port.name).toEqual("Calais");
  });

  it("can add a ship", () => {
    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it("removes a ship", () => {
    const ship1 = "QE2";

    port.addShip(ship);
    port.addShip(ship1);

    port.removeShip(ship1);

    expect(port.ships).not.toContain(ship1);
    expect(port.ships.length).toBe(1);
  });
});
