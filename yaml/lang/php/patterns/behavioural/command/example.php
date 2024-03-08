```php
<?php

// Define the command interface
interface Command {
  public function execute();
}

// Receiver class that performs the actual actions
class Light {
  public function turnOn() {
    echo 'Light is on<br>';
  }

  public function turnOff() {
    echo 'Light is off<br>';
  }
}

// Concrete command to turn on the light
class TurnOnCommand implements Command {
  private $light;

  public function __construct(Light $light) {
    $this->light = $light;
  }

  public function execute() {
    $this->light->turnOn();
  }
}

// Concrete command to turn off the light
class TurnOffCommand implements Command {
  private $light;

  public function __construct(Light $light) {
    $this->light = $light;
  }

  public function execute() {
    $this->light->turnOff();
  }
}

// Invoker class that triggers the commands
class RemoteControl {
  private $commands = [];

  public function addCommand(Command $command) {
    $this->commands[] = $command;
  }

  public function executeCommands() {
    foreach ($this->commands as $command) {
      $command->execute();
    }
  }
}

// Client code
function main() {
  // Create a light
  $light = new Light();

  // Create commands for turning the light on and off
  $turnOnCommand = new TurnOnCommand($light);
  $turnOffCommand = new TurnOffCommand($light);

  // Create a remote control and add the commands
  $remoteControl = new RemoteControl();
  $remoteControl->addCommand($turnOnCommand);
  $remoteControl->addCommand($turnOffCommand);

  // Press the buttons on the remote control to execute the commands
  $remoteControl->executeCommands();
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

main();
```