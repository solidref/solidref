#include <chrono>
#include <iostream>
#include <memory>
#include <thread>

class TrafficLight;

// Abstract State class
class TrafficLightState {
public:
  virtual void enter(TrafficLight &light) = 0;
  virtual ~TrafficLightState() {}
};

// Forward declarations of concrete state classes to resolve circular dependency
class RedState;
class YellowState;
class GreenState;

class TrafficLight {
  std::shared_ptr<TrafficLightState> state;

public:
  TrafficLight() : state(nullptr) {}
  void changeState(std::shared_ptr<TrafficLightState> newState) {
    state = newState;
    state->enter(*this);
  }
  void setState(std::shared_ptr<TrafficLightState> newState) {
    state = newState;
  }
};

// Concrete State Classes

// Red State
class RedState : public TrafficLightState {
public:
  void enter(TrafficLight &light) override {
    std::cout << "Red Light - STOP" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(3)); // Simulate time delay
    light.changeState(std::make_shared<YellowState>());
  }
};

// Yellow State
class YellowState : public TrafficLightState {
public:
  void enter(TrafficLight &light) override {
    std::cout << "Yellow Light - PREPARE" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(2)); // Simulate time delay
    light.changeState(std::make_shared<GreenState>());
  }
};

// Green State
class GreenState : public TrafficLightState {
public:
  void enter(TrafficLight &light) override {
    std::cout << "Green Light - GO" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(4)); // Simulate time delay
    light.changeState(std::make_shared<RedState>());
  }
};

int main() {
  TrafficLight light;
  light.changeState(std::make_shared<RedState>());

  // The loop will continue indefinitely, simulating the continuous operation
  // of a traffic light. In a real application, you might want to provide a
  // mechanism to stop the system gracefully.
  return 0;
}

/**
 * Encapsulation of State and Behavior: Each state class (RedState, YellowState,
 * GreenState) encapsulates both the behavior of the traffic light in that state
 * and the logic for transitioning to the next state.
 *
 * Use of Smart Pointers: The example uses std::shared_ptr for state management,
 * simplifying memory management and ownership semantics.
 *
 * Simulated Time Delays: Utilizes std::this_thread::sleep_for along with
 * std::chrono::seconds to introduce realistic delays between state transitions,
 * mimicking the operation of an actual traffic light system.
 *
 * This C++ example showcases a practical application of the State Design
 * Pattern, where state transitions are self-managed by each state, providing a
 * clean and modular design that isolates state-specific logic within separate
 * classes.
 */
