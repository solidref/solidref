using System;
using System.Threading.Tasks;

public interface ITrafficLightState {
    Task ChangeStateAsync(TrafficLight trafficLight);
}

public class RedState : ITrafficLightState {
    public async Task ChangeStateAsync(TrafficLight trafficLight) {
        Console.WriteLine("Traffic light is now RED. Stop!");
        // Transition to the next state (Yellow) after a certain duration
        await Task.Delay(3000);
        trafficLight.SetState(new YellowState());
    }
}

public class YellowState : ITrafficLightState {
    public async Task ChangeStateAsync(TrafficLight trafficLight) {
        Console.WriteLine("Traffic light is now YELLOW. Prepare to stop or proceed with caution.");
        // Transition to the next state (Green) after a certain duration
        await Task.Delay(2000);
        trafficLight.SetState(new GreenState());
    }
}

public class GreenState : ITrafficLightState {
    public async Task ChangeStateAsync(TrafficLight trafficLight) {
        Console.WriteLine("Traffic light is now GREEN. Go!");
        // Transition to the next state (Red) after a certain duration
        await Task.Delay(4000);
        trafficLight.SetState(new RedState());
    }
}

public class TrafficLight {
    private ITrafficLightState _state;

    public TrafficLight() {
        // Initial state is Red
        _state = new RedState();
    }

    public void SetState(ITrafficLightState state) {
        _state = state;
        var _ = _state.ChangeStateAsync(this); // Async call without awaiting
    }
}

class Program {
    static void Main(string[] args) {
        var trafficLight = new TrafficLight();
        // Simulate traffic light behavior by changing its state
        trafficLight.SetState(new GreenState());

        Console.ReadLine(); // Keep the console open
    }
}

/*
 * The ITrafficLightState interface defines the common behavior for all traffic light states.
 * Each concrete state implements this interface and provides its own implementation of the
 * ChangeStateAsync method.
 *
 * Concrete state classes (RedState, YellowState, and GreenState) represent different states
 * of the traffic light and define how the traffic light behaves in each state.
 *
 * The TrafficLight class acts as the context and maintains a reference to the current state.
 * It provides a method SetState to change the state of the traffic light.
 *
 * In the client code, we create a TrafficLight object and change its state to simulate the
 * behavior of a traffic light system.
 */