interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}

class ConcreteVisitor1 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA) {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
  }

  visitConcreteComponentB(element: ConcreteComponentB) {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
  }
}

class Component {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

class ConcreteComponentA extends Component {
  exclusiveMethodOfConcreteComponentA() {
    return 'A';
  }
}

class ConcreteComponentB extends Component {
  specialMethodOfConcreteComponentB() {
    return 'B';
  }
}

// Client code
const components = [
  new ConcreteComponentA(),
  new ConcreteComponentB(),
];

const visitor1 = new ConcreteVisitor1();

components.forEach((c) => c.accept(visitor1));
