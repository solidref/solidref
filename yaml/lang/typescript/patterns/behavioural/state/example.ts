// Interface defining the common behavior for all traffic light states
interface TrafficLightState {
  changeState(trafficLight: TrafficLight): void;
}

// Concrete state representing the "Red" state of the traffic light
class RedState implements TrafficLightState {
  changeState(trafficLight: TrafficLight): void {
    console.log("Traffic light is now RED. Stop!");
    // Transition to the next state (Yellow) after a certain duration
    setTimeout(() => {
      trafficLight.setState(new YellowState());
    }, 3000);
  }
}

// Concrete state representing the "Yellow" state of the traffic light
class YellowState implements TrafficLightState {
  changeState(trafficLight: TrafficLight): void {
    console.log("Traffic light is now YELLOW. Prepare to stop or proceed with caution.");
    // Transition to the next state (Green) after a certain duration
    setTimeout(() => {
      trafficLight.setState(new GreenState());
    }, 2000);
  }
}

// Concrete state representing the "Green" state of the traffic light
class GreenState implements TrafficLightState {
  changeState(trafficLight: TrafficLight): void {
    console.log("Traffic light is now GREEN. Go!");
    // Transition to the next state (Red) after a certain duration
    setTimeout(() => {
      trafficLight.setState(new RedState());
    }, 4000);
  }
}

// Context class representing the traffic light
class TrafficLight {
  private state: TrafficLightState;

  constructor() {
    // Initial state is Red
    this.state = new RedState();
  }

  // Method to change the state of the traffic light
  setState(state: TrafficLightState): void {
    this.state = state;
    this.state.changeState(this);
  }
}

// Client code
function main() {
  const trafficLight = new TrafficLight();

  // Simulate traffic light behavior by changing its state
  trafficLight.setState(new GreenState());
}

/**
 * The TrafficLightState interface defines the common behavior for all traffic light states.
 * Each concrete state implements this interface and provides its own implementation of the
 * changeState method.
 *
 * Concrete state classes (RedState, YellowState, and GreenState) represent different states
 * of the traffic light and define how the traffic light behaves in each state.
 *
 * The TrafficLight class acts as the context and maintains a reference to the current state.
 * It provides a method setState to change the state of the traffic light.
 *
 * In the client code, we create a TrafficLight object and change its state to simulate the
 * behavior of a traffic light system.
 */
