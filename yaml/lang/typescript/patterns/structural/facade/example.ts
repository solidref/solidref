class Subsystem1 {
  operation1(): string {
    return 'Subsystem1: Ready!';
  }

  operationN(): string {
    return 'Subsystem1: Go!';
  }
}

class Subsystem2 {
  operation1(): string {
    return 'Subsystem2: Get ready!';
  }

  operationZ(): string {
    return 'Subsystem2: Fire!';
  }
}

class Facade {
  private subsystem1: Subsystem1;
  private subsystem2: Subsystem2;

  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();
    return result;
  }
}

// Client code
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
console.log(facade.operation());
