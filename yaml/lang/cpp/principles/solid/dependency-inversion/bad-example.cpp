class LightBulb {
public:
  void turnOn() {
    // Implementation...
  }
};

class Switch {
private:
  LightBulb *bulb; // Declare bulb as a pointer to LightBulb

public:
  Switch() {
    this->bulb = new LightBulb(); // Allocate a new LightBulb
  }

  ~Switch() {
    delete this->bulb; // Clean up the allocated LightBulb
  }

  void operate() {
    this->bulb->turnOn(); // Correct syntax for accessing members via pointer
  }
};
