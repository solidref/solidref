class Bird {
  fly() { /* ... */ }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Can't fly");  // Ostrich, being a Bird, should not alter the expected behavior of the fly method
  }
}
