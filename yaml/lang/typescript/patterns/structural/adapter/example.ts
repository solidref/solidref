class Target {
  request(): string {
    return 'Target: The default target\'s behavior.';
  }
}

class Adaptee {
  specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// Client code
const target = new Target();
console.log(target.request());

const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('After using Adapter...');
const adapter = new Adapter(adaptee);
console.log(adapter.request());
