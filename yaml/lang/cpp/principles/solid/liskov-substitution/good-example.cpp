class Bird {
public:
  void fly() { /* ... */
  }
};

class Sparrow : Bird {
public:
  void fly() { /* ... */
  }            // Sparrow, being a Bird, can fly
}
