interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log('Light turned on');
  }

  turnOff() {
    console.log('Light turned off');
  }
}

class TurnOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  submit(command: Command) {
    command.execute();
  }
}

// Client code
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);
const remote = new RemoteControl();

remote.submit(turnOnCommand);
remote.submit(turnOffCommand);
