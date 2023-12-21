import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CenteredToolbar} from '../../components/Header';
import Page from '../../components/Page';
import Box from '@mui/material/Box';
import Code from '../generic/Code';
import {useParams} from 'react-router-dom';
import SyntaxHighlighter from '../../components/code/SyntaxHighlighter';

export default function DesignPatternsBehavioural() {
  const {principle = 'dry'} = useParams<{principle: string}>();

  const [expanded, setExpanded] = React.useState<string[]>([principle]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    console.log(newExpanded);
    if (newExpanded) {
      setExpanded([...new Set([...expanded, panel])]);
    } else {
      setExpanded(expanded.filter((x) => x !== panel));
    }
    console.log(expanded);
  };

  return (
    <>
      <CenteredToolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h2">
          <i>Behavioral</i> Design Patterns
          <br /> in Software Development
        </Typography>
        <Typography variant="h6"></Typography>
      </CenteredToolbar>
      <Page>
        <Box sx={{flexGrow: 1}}>
          <Typography variant="subtitle1" gutterBottom>
            Behavioral design patterns are fundamental to the structure and organization of software systems. They focus
            on how objects interact and communicate with each other, leading to efficient problem-solving and an
            enhanced understanding of the system's dynamics. Below, we explore several key behavioral design patterns,
            providing insights into their purposes, structures, and applications. To illustrate these patterns, I'll use
            pseudo-code or JavaScript where appropriate.
          </Typography>
          <Accordion expanded={expanded.includes('Observer')} onChange={handleChange('Observer')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h5">Observer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>
                The Observer pattern is one of the most widely used behavioral patterns. It defines a one-to-many
                dependency between objects, allowing an object to notify other objects about changes in its state.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Concept
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                In this pattern, an object, known as the 'subject,' maintains a list of its dependents, 'observers,' and
                notifies them automatically of any state changes. This is particularly useful in scenarios where a
                change in one object requires changing others, and you don't know how many objects need to be changed.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Structure
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Subject: Holds references to observers and provides an interface for attaching and detaching them.
                Observer: Defines an updating interface for objects that need to be notified of a subject's changes.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                In JavaScript, you can implement the Observer pattern as follows:
              </Typography>

              <SyntaxHighlighter language="javascript">
                {`class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log(\`Observer received data: \${data}\`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello Observers!");`}
              </SyntaxHighlighter>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('Strategy')} onChange={handleChange('Strategy')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h5">Strategy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" gutterBottom>
                The Strategy pattern enables selecting an algorithm's behavior at runtime. Instead of implementing a
                single algorithm directly, code receives run-time instructions specifying which of a family of
                algorithms to use.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Concept
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.
                Strategy lets the algorithm vary independently from clients that use it. It's useful when there are
                multiple ways to achieve a task, and the best approach depends on the context.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Structure
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Strategy: An interface common to all supported algorithms. ConcreteStrategy: Implements different
                algorithms following the Strategy interface. Context: Maintains a reference to a Strategy object and
                communicates with this object to call the algorithm defined by the Strategy.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Using pseudo-code for the Strategy pattern:
              </Typography>
              <SyntaxHighlighter language="javascript">
                {`interface Strategy {
    execute(data);
}

class ConcreteStrategyA implements Strategy {
    execute(data) {
        // Implementation of algorithm A
    }
}

class ConcreteStrategyB implements Strategy {
    execute(data) {
        // Implementation of algorithm B
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        this.strategy.execute(data);
    }
}

// Usage
const strategyA = new ConcreteStrategyA();
const context = new Context(strategyA);
context.executeStrategy("data");`}
              </SyntaxHighlighter>

              <Typography variant="subtitle1" gutterBottom>
                This pattern offers flexibility in choosing which algorithm to run at runtime and isolates the algorithm
                implementation from the code that uses it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('Command')} onChange={handleChange('Command')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h5">Command</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                The Command pattern encapsulates a request as an object, thereby allowing users to parameterize clients
                with queues, requests, and operations. It also allows for the support of undoable operations.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Concept
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                The key idea here is to provide a means to separate the responsibilities of issuing commands from
                anything executing commands, decoupling sender and receiver. Commands are first-class objects with their
                own lifetime and can be composed and passed around like any other objects.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Structure
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Command: Declares an interface for executing an operation. ConcreteCommand: Defines a binding between a
                Receiver object and an action. Client: Creates a ConcreteCommand object and sets its receiver. Invoker:
                Asks the command to carry out the request. Receiver: Knows how to perform the operations associated with
                carrying out a request.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Here's a simple implementation in pseudo-code:
              </Typography>
              <SyntaxHighlighter language="javascript">
                {`interface Command {
    execute();
}

class Light {
    turnOn() { /* ... */ }
    turnOff() { /* ... */ }
}

class TurnOnCommand implements Command {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}

class TurnOffCommand implements Command {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}

class RemoteControl {
    submit(command) {
        command.execute();
    }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.submit(turnOnCommand); // Turns the light on
remote.submit(turnOffCommand); // Turns the light off`}
              </SyntaxHighlighter>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded.includes('State')} onChange={handleChange('State')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h5">State</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom>
                The State pattern allows an object to alter its behavior when its internal state changes. The object
                will appear to change its class.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Concept
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                It's particularly useful in scenarios where an object's behavior is influenced by its state, and it must
                change its behavior at runtime depending on that state. This pattern puts each branch of the conditional
                in a separate class.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Structure
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                State: An interface defining an action that is associated with a state of the Context. ConcreteStates:
                Classes that implement the State interface and define behavior for a state of the Context. Context:
                Maintains an instance of a ConcreteState subclass that defines the current state.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Example
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                An implementation in JavaScript could look like this:
              </Typography>

              <SyntaxHighlighter language="javascript">
                {`class State {
    handle(context) {
        // Handle request here
    }
}

class ConcreteStateA extends State {
    handle(context) {
        console.log('Handling in the state A');
        context.state = new ConcreteStateB();
    }
}

class ConcreteStateB extends State {
    handle(context) {
        console.log('Handling in the state B');
        context.state = new ConcreteStateA();
    }
}

class Context {
    constructor() {
        this.state = new ConcreteStateA();
    }

    request() {
        this.state.handle(this);
    }
}

// Usage
const context = new Context();
context.request(); // Handling in the state A
context.request(); // Handling in the state B`}
              </SyntaxHighlighter>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Page>
    </>
  );
}
