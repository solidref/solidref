interface Implementation {
  operationImplementation(): string;
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

class ImplementationA implements Implementation {
  operationImplementation(): string {
    return 'ImplementationA: Here\'s the result on the platform A.';
  }
}

class ImplementationB implements Implementation {
  operationImplementation(): string {
    return 'ImplementationB: Here\'s the result on the platform B.';
  }
}

// Client code
let implementation: Implementation = new ImplementationA();
let abstraction: Abstraction = new Abstraction(implementation);
console.log(abstraction.operation());

implementation = new ImplementationB();
abstraction = new ExtendedAbstraction(implementation);
console.log(abstraction.operation());
