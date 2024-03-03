class Prototype {
  primitive: number;
  component: Date;
  circularReference: { prototype: Prototype };

  clone(): this {
    const clone = Object.create(this);
    clone.component = Object.create(this.component);

    // Clone each property if needed (deep copy)
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class ConcretePrototype1 extends Prototype {
  constructor() {
    super();
    this.primitive = 245;
    this.component = new Date();
    this.circularReference = {
      prototype: this,
    };
  }
}

// Client code
const p1 = new ConcretePrototype1();
const p2 = p1.clone();

console.log('p1:', p1);
console.log('p2:', p2);
console.log('Same component?', p1.component === p2.component); // false, deep copy
