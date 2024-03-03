#include <iostream>

class Device {
public:
  virtual void turnOn() = 0;
  virtual ~Device() {} // Virtual destructor for safe polymorphic use
};

class Fan : public Device { // Fan now properly inherits from Device
public:
  void turnOn() override { // Ensure we are overriding a base class method
    std::cout << "Fan turned on.\n";
  }
};

class Switch {
public:
  Device *device;

  Switch(Device *device) : device(device) {} // Use initializer list

  void operate() { device->turnOn(); }
};

int main() {
  Fan fan;                 // Stack allocation to avoid manual memory management
  Switch wallSwitch(&fan); // Pass address of fan
  wallSwitch.operate();    // This should now work correctly

  // No need to delete anything since we're not using 'new'
  return 0; // Return type of main should be int
}
