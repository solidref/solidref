// TrafficLightState.java
interface TrafficLightState {
  void changeState(TrafficLight trafficLight);
}

// RedState.java
class RedState implements TrafficLightState {
  @Override
  public void changeState(TrafficLight trafficLight) {
    System.out.println("Traffic light is now RED. Stop!");
    // In a real application, consider using a Timer for state transition
  }
}

// YellowState.java
class YellowState implements TrafficLightState {
  @Override
  public void changeState(TrafficLight trafficLight) {
    System.out.println("Traffic light is now YELLOW. Prepare to stop or proceed with caution.");
    // In a real application, consider using a Timer for state transition
  }
}

// GreenState.java
class GreenState implements TrafficLightState {
  @Override
  public void changeState(TrafficLight trafficLight) {
    System.out.println("Traffic light is now GREEN. Go!");
    // In a real application, consider using a Timer for state transition
  }
}

// TrafficLight.java
class TrafficLight {
  private TrafficLightState state;

  public TrafficLight() {
    // Initial state is Red
    this.state = new RedState();
    this.state.changeState(this);
  }

  public void setState(TrafficLightState state) {
    this.state = state;
    this.state.changeState(this);
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    TrafficLight trafficLight = new TrafficLight();

    // Manually trigger state transitions
    trafficLight.setState(new GreenState());
    trafficLight.setState(new YellowState());
    trafficLight.setState(new RedState());
  }
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
