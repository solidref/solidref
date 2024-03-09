package main

import "fmt"

// Command defines the interface for executing commands
type Command interface {
	Execute()
}

// Light represents the receiver class that performs the actual actions
type Light struct{}

func (l *Light) TurnOn() {
	fmt.Println("Light is on")
}

func (l *Light) TurnOff() {
	fmt.Println("Light is off")
}

// TurnOnCommand is a concrete command to turn on the light
type TurnOnCommand struct {
	light *Light
}

func NewTurnOnCommand(light *Light) *TurnOnCommand {
	return &TurnOnCommand{light: light}
}

func (c *TurnOnCommand) Execute() {
	c.light.TurnOn()
}

// TurnOffCommand is a concrete command to turn off the light
type TurnOffCommand struct {
	light *Light
}

func NewTurnOffCommand(light *Light) *TurnOffCommand {
	return &TurnOffCommand{light: light}
}

func (c *TurnOffCommand) Execute() {
	c.light.TurnOff()
}

// RemoteControl acts as the invoker class that triggers the commands
type RemoteControl struct {
	commands []Command
}

func (r *RemoteControl) AddCommand(command Command) {
	r.commands = append(r.commands, command)
}

func (r *RemoteControl) ExecuteCommands() {
	for _, command := range r.commands {
		command.Execute()
	}
}

// Main function demonstrating the command design pattern
func main() {
	light := &Light{}

	turnOnCommand := NewTurnOnCommand(light)
	turnOffCommand := NewTurnOffCommand(light)

	remoteControl := &RemoteControl{}
	remoteControl.AddCommand(turnOnCommand)
	remoteControl.AddCommand(turnOffCommand)

	remoteControl.ExecuteCommands()
}

/*
This code demonstrates how the Command pattern can be used in a remote control
system to control a light. The Command interface defines the contract for executing
commands, and concrete command classes (TurnOnCommand and TurnOffCommand) encapsulate
the actions to be performed on the Light receiver object. The RemoteControl acts as
the invoker, which holds and triggers the commands. Pressing buttons on the remote
control executes the corresponding commands, resulting in the light being turned on
and off.
*/