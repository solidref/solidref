abstract class Handler {
  protected nextHandler: Handler | null = null;

  constructor(nextHandler: Handler | null = null) {
    this.nextHandler = nextHandler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

// Concrete Handlers
class ConcreteHandler1 extends Handler {
  handle(request: string): string | null {
    if (request === 'handle1') {
      return 'Handled by ConcreteHandler1';
    }
    return super.handle(request);
  }
}

class ConcreteHandler2 extends Handler {
  handle(request: string): string | null {
    if (request === 'handle2') {
      return 'Handled by ConcreteHandler2';
    }
    return super.handle(request);
  }
}

// Client code
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2(handler1);

console.log(handler2.handle('handle2'));
console.log(handler2.handle('handle1'));
