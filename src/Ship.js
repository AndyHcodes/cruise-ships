class Ship {
  constructor(currentPort) {
    this.capacity = 50;
    this.passengers = 0;
    this.currentPort = currentPort;
  }
  setSail() {
    this.currentPort = "";
  }
  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;
