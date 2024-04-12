using System;
using System.Collections.Generic;

// Define the command interface
public interface ICommand
{
    void Execute();
}

// Receiver class that performs the actual actions
public class Light
{
    public void TurnOn()
    {
        Console.WriteLine("Light is on");
    }

    public void TurnOff()
    {
        Console.WriteLine("Light is off");
    }
}

// Concrete command to turn on the light
public class TurnOnCommand : ICommand
{
    private Light _light;

    public TurnOnCommand(Light light)
    {
        this._light = light;
    }

    public void Execute()
    {
        _light.TurnOn();
    }
}

// Concrete command to turn off the light
public class TurnOffCommand : ICommand
{
    private Light _light;

    public TurnOffCommand(Light light)
    {
        this._light = light;
    }

    public void Execute()
    {
        _light.TurnOff();
    }
}

// Invoker class that triggers the commands
public class RemoteControl
{
    private List<ICommand> _commands = new List<ICommand>();

    public void AddCommand(ICommand command)
    {
        _commands.Add(command);
    }

    public void ExecuteCommands()
    {
        foreach (var command in _commands)
        {
            command.Execute();
        }
    }
}

public class Program
{
    // Client code
    public static void Main()
    {
        // Create a light
        Light light = new Light();

        // Create commands for turning the light on and off
        TurnOnCommand turnOnCommand = new TurnOnCommand(light);
        TurnOffCommand turnOffCommand = new TurnOffCommand(light);

        // Create a remote control and add the commands
        RemoteControl remoteControl = new RemoteControl();
        remoteControl.AddCommand(turnOnCommand);
        remoteControl.AddCommand(turnOffCommand);

        // Press the buttons on the remote control to execute the commands
        remoteControl.ExecuteCommands();
    }
}
// This code demonstrates how the Command pattern can be used in a remote control
// system to control a light. The ICommand interface defines the contract for executing
// commands, and concrete command classes (TurnOnCommand and TurnOffCommand) encapsulate
// the actions to be performed on the Light receiver object. The RemoteControl acts as
// the invoker, which holds and triggers the commands. Pressing buttons on the remote
// control executes the corresponding commands, resulting in the light being turned on
// and off.