// Command interface
class Command {
  execute() { }
}

// Concrete Command
class TurnOnCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver.turnOn();
  }
}

class TurnOffCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver.turnOff();
  }
}

// Receiver
class Light {
  turnOn() {
    console.log("The light is on");
  }

  turnOff() {
    console.log("The light is off");
  }
}

// Invoker
class RemoteControl {
  submit(command) {
    command.execute();
  }
}

// Client code
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.submit(turnOnCommand); // The light is on
remote.submit(turnOffCommand); // The light is off

/**
 * This code demonstrates how the Command pattern can be used in a remote control
 * system to control a light. The Command interface defines the contract for executing
 * commands, and concrete command classes (TurnOnCommand and TurnOffCommand) encapsulate
 * the actions to be performed on the Light receiver object. The RemoteControl acts as
 * the invoker, which holds and triggers the commands. Pressing buttons on the remote
 * control executes the corresponding commands, resulting in the light being turned on
 * and off.
 */
