class Singleton {
  private static instance: Singleton;

  private constructor() { }

  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  // Some business logic
  someBusinessLogic() { }
}

// Client code
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log('Same instance?', instance1 === instance2); // true
