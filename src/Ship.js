class Ship {
  constructor(location) {
    this.capacity = 50;
    this.passengers = 0;
    this.location = location;
  }
  addPassenger() {
    this.passengers += 1;
    this.capacity -= 1;
  }
}

module.exports = Ship;
