abstract class Component {
  abstract operation(): string;
}

class ConcreteComponent extends Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}

abstract class Decorator extends Component {
  protected component: Component;

  constructor(component: Component) {
    super();
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

// Client code
let simple = new ConcreteComponent();
console.log(`Simple component: ${simple.operation()}`);

let decorator1 = new ConcreteDecoratorA(simple);
let decorator2 = new ConcreteDecoratorB(decorator1);
console.log(`Decorated component: ${decorator2.operation()}`);
