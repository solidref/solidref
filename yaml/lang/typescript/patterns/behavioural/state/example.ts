interface State {
  handle1(): void;
  handle2(): void;
}

class Context {
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  transitionTo(state: State) {
    console.log(`Context: Transition to ${state.constructor.name}.`);
    this.state = state;
  }

  request1() {
    this.state.handle1();
  }

  request2() {
    this.state.handle2();
  }
}

class ConcreteStateA implements State {
  handle1() {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
  }

  handle2() {
    console.log('ConcreteStateA handles request2.');
  }
}

class ConcreteStateB implements State {
  handle1() {
    console.log('ConcreteStateB handles request1.');
  }

  handle2() {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
  }
}

// Client code
const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
