#include <iostream>
#include <memory> // For std::unique_ptr
#include <vector>

// Define the Command interface
class Command {
public:
  virtual void execute() = 0;
  virtual ~Command() {}
};

// Receiver class that performs the actual actions
class Light {
public:
  void turnOn() const { std::cout << "Light is on" << std::endl; }

  void turnOff() const { std::cout << "Light is off" << std::endl; }
};

// Concrete command to turn on the light
class TurnOnCommand : public Command {
private:
  Light &light;

public:
  TurnOnCommand(Light &light) : light(light) {}

  void execute() override { light.turnOn(); }
};

// Concrete command to turn off the light
class TurnOffCommand : public Command {
private:
  Light &light;

public:
  TurnOffCommand(Light &light) : light(light) {}

  void execute() override { light.turnOff(); }
};

// Invoker class that triggers the commands
class RemoteControl {
private:
  std::vector<std::unique_ptr<Command>> commands;

public:
  void addCommand(std::unique_ptr<Command> command) {
    commands.push_back(std::move(command));
  }

  void executeCommands() {
    for (const auto &command : commands) {
      command->execute();
    }
  }
};

// Client code
int main() {
  Light light;

  // Create a remote control and add the commands
  RemoteControl remoteControl;
  remoteControl.addCommand(std::make_unique<TurnOnCommand>(light));
  remoteControl.addCommand(std::make_unique<TurnOffCommand>(light));

  // Press the buttons on the remote control to execute the commands
  remoteControl.executeCommands();

  return 0;
}

/**
 * This code demonstrates how the Command pattern can be used in a remote
 * control system to control a light. The Command interface defines the contract
 * for executing commands, and concrete command classes (TurnOnCommand and
 * TurnOffCommand) encapsulate the actions to be performed on the Light receiver
 * object. The RemoteControl acts as the invoker, which holds and triggers the
 * commands. Pressing buttons on the remote control executes the corresponding
 * commands, resulting in the light being turned on and off.
 */
