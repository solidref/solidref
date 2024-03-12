#include <stdio.h>
#include <stdlib.h>

// Forward declaration for mutual referencing
struct Command;

// Define the command interface in C by structuring function pointers
typedef struct Command {
  void (*execute)(struct Command*);
  void *state; // Generic state to enable closure-like behavior
} Command;

// Receiver class that performs the actual actions
typedef struct Light {
  void (*turnOn)(struct Light*);
  void (*turnOff)(struct Light*);
} Light;

// Function implementations for the Light
void lightTurnOn(Light *light) {
  printf("Light is on\n");
}

void lightTurnOff(Light* light) {
  printf("Light is off\n");
}

// Initializes a Light object
Light* newLight() {
  Light* light = (Light*)malloc(sizeof(Light));
  light->turnOn = lightTurnOn;
  light->turnOff = lightTurnOff;
  return light;
}

// Concrete command to turn on the light
typedef struct {
  Command base;
  Light* light;
} TurnOnCommand;

// Concrete command to turn off the light
typedef struct {
  Command base;
  Light* light;
} TurnOffCommand;

// Execute methods for commands
void turnOnExecute(Command* command) {
  TurnOnCommand* cmd = (TurnOnCommand*)command;
  cmd->light->turnOn(cmd->light);
}

void turnOffExecute(Command* command) {
  TurnOffCommand* cmd = (TurnOffCommand*)command;
  cmd->light->turnOff(cmd->light);
}

// Factory functions to create command instances
Command* newTurnOnCommand(Light* light) {
  TurnOnCommand* cmd = (TurnOnCommand*)malloc(sizeof(TurnOnCommand));
  cmd->base.execute = turnOnExecute;
  cmd->light = light;
  return (Command*)cmd;
}

Command* newTurnOffCommand(Light* light) {
  TurnOffCommand* cmd = (TurnOffCommand*)malloc(sizeof(TurnOffCommand));
  cmd->base.execute = turnOffExecute;
  cmd->light = light;
  return (Command*)cmd;
}

// Invoker class that triggers the commands
typedef struct {
  Command** commands;
  int size;
} RemoteControl;

// Adds a command to the remote control
void addCommand(RemoteControl* rc, Command* command) {
  rc->commands[rc->size++] = command;
}

// Executes all added commands
void executeCommands(RemoteControl* rc) {
  for (int i = 0; i < rc->size; i++) {
    rc->commands[i]->execute(rc->commands[i]);
  }
}

// Initializes a RemoteControl object
RemoteControl* newRemoteControl(int capacity) {
  RemoteControl* rc = (RemoteControl*)malloc(sizeof(RemoteControl));
  rc->commands = (Command**)malloc(sizeof(Command*) * capacity);
  rc->size = 0;
  return rc;
}

// Client code
int main() {
  Light* light = newLight();

  Command* turnOnCommand = newTurnOnCommand(light);
  Command* turnOffCommand = newTurnOffCommand(light);

  RemoteControl* remoteControl = newRemoteControl(2);
  addCommand(remoteControl, turnOnCommand);
  addCommand(remoteControl, turnOffCommand);

  // Press the buttons on the remote control to execute the commands
  executeCommands(remoteControl);

  // Clean up
  free(light);
  free(turnOnCommand);
  free(turnOffCommand);
  free(remoteControl->commands);
  free(remoteControl);

  return 0;
}