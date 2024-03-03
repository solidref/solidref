abstract class AbstractClass {
  templateMethod() {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  baseOperation1() {
    console.log("AbstractClass says: I am doing the bulk of the work");
  }

  baseOperation2() {
    console.log("AbstractClass says: But I let subclasses override some operations");
  }

  baseOperation3() {
    console.log("AbstractClass says: But I am doing the bulk of the work anyway");
  }

  abstract requiredOperation1(): void;
  abstract requiredOperation2(): void;

  hook1() { }
  hook2() { }
}

class ConcreteClass1 extends AbstractClass {
  requiredOperation1() {
    console.log("ConcreteClass1 says: Implemented Operation1");
  }

  requiredOperation2() {
    console.log("ConcreteClass1 says: Implemented Operation2");
  }
}

class ConcreteClass2 extends AbstractClass {
  requiredOperation1() {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }

  requiredOperation2() {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }

  hook1() {
    console.log("ConcreteClass2 says: Overridden Hook1");
  }
}

// Client code
console.log('Same client code can work with different subclasses:');
new ConcreteClass1().templateMethod();
console.log('');
new ConcreteClass2().templateMethod();
