interface Mediator {
  send(message: string, colleague: Colleague): void;
}

abstract class Colleague {
  protected mediator: Mediator | null = null;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  send(message: string) {
    if (this.mediator) {
      this.mediator.send(message, this);
    }
  }

  abstract receive(message: string): void;
}

// Concrete Colleagues
class ConcreteColleague1 extends Colleague {
  receive(message: string) {
    console.log(`${this.constructor.name} received message: ${message}`);
  }
}

class ConcreteColleague2 extends Colleague {
  receive(message: string) {
    console.log(`${this.constructor.name} received message: ${message}`);
  }
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  register(colleague: Colleague) {
    this.colleagues.push(colleague);
    colleague.setMediator(this);
  }

  send(message: string, sender: Colleague) {
    this.colleagues.forEach(colleague => {
      if (colleague !== sender) {
        colleague.receive(message);
      }
    });
  }
}

// Client code
const mediator = new ConcreteMediator();
const colleague1 = new ConcreteColleague1();
const colleague2 = new ConcreteColleague2();

mediator.register(colleague1);
mediator.register(colleague2);

colleague1.send('Hello from Colleague 1');
colleague2.send('Hello from Colleague 2');
