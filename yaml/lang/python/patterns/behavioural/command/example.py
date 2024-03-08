from abc import ABC, abstractmethod

# Define the command interface
class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

# Receiver class that performs the actual actions
class Light:
    def turnOn(self):
        print('Light is on')
    
    def turnOff(self):
        print('Light is off')

# Concrete command to turn on the light
class TurnOnCommand(Command):
    def __init__(self, light: Light):
        self.light = light
    
    def execute(self):
        self.light.turnOn()

# Concrete command to turn off the light
class TurnOffCommand(Command):
    def __init__(self, light: Light):
        self.light = light
    
    def execute(self):
        self.light.turnOff()

# Invoker class that triggers the commands
class RemoteControl:
    def __init__(self):
        self.commands = []
    
    def addCommand(self, command: Command):
        self.commands.append(command)
    
    def executeCommands(self):
        for command in self.commands:
            command.execute()

# Client code
def main():
    # Create a light
    light = Light()

    # Create commands for turning the light on and off
    turnOnCommand = TurnOnCommand(light)
    turnOffCommand = TurnOffCommand(light)

    # Create a remote control and add the commands
    remoteControl = RemoteControl()
    remoteControl.addCommand(turnOnCommand)
    remoteControl.addCommand(turnOffCommand)

    # Press the buttons on the remote control to execute the commands
    remoteControl.executeCommands()

# This code demonstrates how the Command pattern can be used in a remote control
# system to control a light. The Command interface defines the contract for executing
# commands, and concrete command classes (TurnOnCommand and TurnOffCommand) encapsulate
# the actions to be performed on the Light receiver object. The RemoteControl acts as
# the invoker, which holds and triggers the commands. Pressing buttons on the remote
# control executes the corresponding commands, resulting in the light being turned on
# and off.