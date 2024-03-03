interface Strategy {
  execute(data: any): string;
}

class ConcreteStrategyA implements Strategy {
  execute(data: any): string {
    return `Strategy A with data ${data}`;
  }
}

class ConcreteStrategyB implements Strategy {
  execute(data: any): string {
    return `Strategy B with data ${data}`;
  }
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data: any): string {
    return this.strategy.execute(data);
  }
}

// Client code
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy('123'));

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy('456'));
