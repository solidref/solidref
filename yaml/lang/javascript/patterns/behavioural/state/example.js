class RedState {
  changeState(trafficLight) {
    console.log("Traffic light is now RED. Stop!");
    setTimeout(() => {
      trafficLight.setState(new YellowState());
    }, 3000);
  }
}

class YellowState {
  changeState(trafficLight) {
    console.log("Traffic light is now YELLOW. Prepare to stop or proceed with caution.");
    setTimeout(() => {
      trafficLight.setState(new GreenState());
    }, 2000);
  }
}

class GreenState {
  changeState(trafficLight) {
    console.log("Traffic light is now GREEN. Go!");
    setTimeout(() => {
      trafficLight.setState(new RedState());
    }, 4000);
  }
}

class TrafficLight {
  constructor() {
    this.state = new RedState();
    this.state.changeState(this); // Start with the initial state
  }

  setState(state) {
    this.state = state;
    this.state.changeState(this);
  }
}

// Client code
function main() {
  const trafficLight = new TrafficLight();
  // The initial state will automatically transition due to the state behavior
}

main();

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
