// Define the command interface
interface Command {
  execute(): void;
}

// Receiver class that performs the actual actions
class Light {
  turnOn(): void {
    console.log('Light is on');
  }

  turnOff(): void {
    console.log('Light is off');
  }
}

// Concrete command to turn on the light
class TurnOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

// Concrete command to turn off the light
class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// Invoker class that triggers the commands
class RemoteControl {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    this.commands.forEach(command => command.execute());
  }
}

// Client code
function main() {
  // Create a light
  const light = new Light();

  // Create commands for turning the light on and off
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);

  // Create a remote control and add the commands
  const remoteControl = new RemoteControl();
  remoteControl.addCommand(turnOnCommand);
  remoteControl.addCommand(turnOffCommand);

  // Press the buttons on the remote control to execute the commands
  remoteControl.executeCommands();
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
