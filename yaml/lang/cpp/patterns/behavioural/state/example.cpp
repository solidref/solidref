#include <iostream>
#include <memory>

class TrafficLight; // Forward declaration

// Abstract class defining the common behavior for all traffic light states
class TrafficLightState {
public:
  virtual void changeState(TrafficLight &trafficLight) = 0;
  virtual ~TrafficLightState() {}
};

// Forward declaration of concrete states
class RedState;
class YellowState;
class GreenState;

// Context class representing the traffic light
class TrafficLight {
  std::shared_ptr<TrafficLightState> state;

public:
  TrafficLight()
      : state(std::make_shared<RedState>()) {} // Initial state is Red

  void setState(std::shared_ptr<TrafficLightState> newState) {
    state = newState;
    state->changeState(*this);
  }
};

// Concrete state representing the "Red" state of the traffic light
class RedState : public TrafficLightState {
public:
  void changeState(TrafficLight &trafficLight) override {
    std::cout << "Traffic light is now RED. Stop!" << std::endl;
    // Transition to YellowState would go here
  }
};

// Concrete state representing the "Yellow" state of the traffic light
class YellowState : public TrafficLightState {
public:
  void changeState(TrafficLight &trafficLight) override {
    std::cout << "Traffic light is now YELLOW. Prepare to stop or proceed with "
                 "caution."
              << std::endl;
    // Transition to GreenState would go here
  }
};

// Concrete state representing the "Green" state of the traffic light
class GreenState : public TrafficLightState {
public:
  void changeState(TrafficLight &trafficLight) override {
    std::cout << "Traffic light is now GREEN. Go!" << std::endl;
    // Transition to RedState would go here
  }
};

int main() {
  TrafficLight trafficLight;

  // Simulate traffic light behavior by changing its state
  // Note: In the real world, the state transitions would be triggered by the
  // states themselves or external events, not directly like this
  trafficLight.setState(std::make_shared<GreenState>());
  trafficLight.setState(std::make_shared<YellowState>());
  trafficLight.setState(std::make_shared<RedState>());

  return 0;
}

/**
 * The TrafficLightState interface defines the common behavior for all traffic
 * light states. Each concrete state implements this interface and provides its
 * own implementation of the changeState method.
 *
 * Concrete state classes (RedState, YellowState, and GreenState) represent
 * different states of the traffic light and define how the traffic light
 * behaves in each state.
 *
 * The TrafficLight class acts as the context and maintains a reference to the
 * current state. It provides a method setState to change the state of the
 * traffic light.
 *
 * In the client code, we create a TrafficLight object and change its state to
 * simulate the behavior of a traffic light system.
 */
