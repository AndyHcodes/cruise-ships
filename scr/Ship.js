class Ship {
  constructor(type) {
    this.capacity = 50;
    this.passengers = 0;
  }
  addPassenger() {
    this.passengers += 1;
    this.capacity -= 1;
  }
}

module.exports = Ship;
