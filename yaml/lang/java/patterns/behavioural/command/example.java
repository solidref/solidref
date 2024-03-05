// Command.java
interface Command {
  void execute();
}

// Light.java (Receiver)
class Light {
  public void turnOn() {
    System.out.println("Light is on");
  }

  public void turnOff() {
    System.out.println("Light is off");
  }
}

// TurnOnCommand.java (Concrete Command)
class TurnOnCommand implements Command {
  private Light light;

  public TurnOnCommand(Light light) {
    this.light = light;
  }

  @Override
  public void execute() {
    this.light.turnOn();
  }
}

// TurnOffCommand.java (Concrete Command)
class TurnOffCommand implements Command {
  private Light light;

  public TurnOffCommand(Light light) {
    this.light = light;
  }

  @Override
  public void execute() {
    this.light.turnOff();
  }
}

// RemoteControl.java (Invoker)
class RemoteControl {
  private Command[] commands = new Command[2]; // Assuming one slot for each command for simplicity

  public void setCommand(int slot, Command command) {
    this.commands[slot] = command;
  }

  public void executeCommand(int slot) {
    if (commands[slot] != null) {
      commands[slot].execute();
    }
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    Light light = new Light(); // Receiver

    Command turnOnCommand = new TurnOnCommand(light); // Concrete Command
    Command turnOffCommand = new TurnOffCommand(light); // Concrete Command

    RemoteControl remoteControl = new RemoteControl(); // Invoker
    remoteControl.setCommand(0, turnOnCommand);
    remoteControl.setCommand(1, turnOffCommand);

    remoteControl.executeCommand(0); // Executes TurnOnCommand
    remoteControl.executeCommand(1); // Executes TurnOffCommand
  }
}


/**
 * This code demonstrates how the Command pattern can be used in a remote control
 * system to control a light. The Command interface defines the contract for executing
 * commands, and concrete command classes (TurnOnCommand and TurnOffCommand) encapsulate
 * the actions to be performed on the Light receiver object. The RemoteControl acts as
 * the invoker, which holds and triggers the commands. Pressing buttons on the remote
 * control executes the corresponding commands, resulting in the light being turned on
 * and off.
 */
