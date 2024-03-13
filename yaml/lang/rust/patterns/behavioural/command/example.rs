trait Command {
    fn execute(&self);
}

struct Light;

impl Light {
    fn turn_on(&self) {
        println!("Light is on");
    }

    fn turn_off(&self) {
        println!("Light is off");
    }
}

struct TurnOnCommand {
    light: Light,
}

impl TurnOnCommand {
    fn new(light: Light) -> Self {
        Self { light }
    }
}

impl Command for TurnOnCommand {
    fn execute(&self) {
        self.light.turn_on();
    }
}

struct TurnOffCommand {
    light: Light,
}

impl TurnOffCommand {
    fn new(light: Light) -> Self {
        Self { light }
    }
}

impl Command for TurnOffCommand {
    fn execute(&self) {
        self.light.turn_off();
    }
}

struct RemoteControl {
    commands: Vec<Box<dyn Command>>,
}

impl RemoteControl {
    fn new() -> Self {
        Self { commands: vec![] }
    }

    fn add_command(&mut self, command: Box<dyn Command>) {
        self.commands.push(command);
    }

    fn execute_commands(&self) {
        for command in &self.commands {
            command.execute();
        }
    }
}

fn main() {
    let light = Light;

    let turn_on_command = TurnOnCommand::new(light);
    let turn_off_command = TurnOffCommand::new(light);

    let mut remote_control = RemoteControl::new();
    remote_control.add_command(Box::new(turn_on_command));
    remote_control.add_command(Box::new(turn_off_command));

    remote_control.execute_commands();
}

// This code demonstrates how the Command pattern can be used in a remote control
// system to control a light. The Command trait defines the contract for executing
// commands, and concrete command structs (TurnOnCommand and TurnOffCommand) encapsulate
// actions to be performed on the Light receiver object. The RemoteControl acts as
// the invoker, which holds and triggers the commands. Pressing buttons on the remote
// control executes the corresponding commands, resulting in the light being turned on
// and off.