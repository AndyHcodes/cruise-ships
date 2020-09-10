class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(shipName) {
    this.ships.push(shipName);
  }

  removeShip(shipName) {
    const arrayWithoutShip = this.ships.filter((ship) => {
      return ship !== shipName;
    });
    this.ships = arrayWithoutShip;
  }
}

module.exports = Port;
