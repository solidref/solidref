using System;
using System.Threading;

public interface ITrafficLightState
{
    void ChangeState(TrafficLight trafficLight);
}

public class RedState : ITrafficLightState
{
    public void ChangeState(TrafficLight trafficLight)
    {
        Console.WriteLine("Traffic light is now RED. Stop!");
        // Transition to the next state (Yellow) after a certain duration
        new Timer(_ => {
            trafficLight.SetState(new YellowState());
        }, null, 3000, Timeout.Infinite);
    }
}

public class YellowState : ITrafficLightState
{
    public void ChangeState(TrafficLight trafficLight)
    {
        Console.WriteLine("Traffic light is now YELLOW. Prepare to stop or proceed with caution.");
        // Transition to the next state (Green) after a certain duration
        new Timer(_ => {
            trafficLight.SetState(new GreenState());
        }, null, 2000, Timeout.Infinite);
    }
}

public class GreenState : ITrafficLightState
{
    public void ChangeState(TrafficLight trafficLight)
    {
        Console.WriteLine("Traffic light is now GREEN. Go!");
        // Transition to the next state (Red) after a certain duration
        new Timer(_ => {
            trafficLight.SetState(new RedState());
        }, null, 4000, Timeout.Infinite);
    }
}

public class TrafficLight
{
    private ITrafficLightState _state;

    public TrafficLight()
    {
        // Initial state is Red
        this._state = new RedState();
    }

    public void SetState(ITrafficLightState state)
    {
        this._state = state;
        this._state.ChangeState(this);
    }
}

class Program
{
    static void Main(string[] args)
    {
        TrafficLight trafficLight = new TrafficLight();

        // Simulate traffic light behavior by changing its state
        trafficLight.SetState(new GreenState());

        // Prevent the console from closing immediately
        Console.ReadLine();
    }
}