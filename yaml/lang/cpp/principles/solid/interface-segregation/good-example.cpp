class Worker {
public:
  void work() { /* ... */
  }
};

class Feeder {
public:
  void eat() { /* ... */
  }
};

class Human : Worker {};
class Robot : Worker {};

class Animal : Feeder {};
