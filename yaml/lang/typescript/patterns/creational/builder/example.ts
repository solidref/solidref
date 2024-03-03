class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
  }
}

interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
}

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA() {
    this.product.parts.push('PartA');
  }

  buildPartB() {
    this.product.parts.push('PartB');
  }

  buildPartC() {
    this.product.parts.push('PartC');
  }

  getResult() {
    return this.product;
  }
}

class Product {
  parts: string[];

  constructor() {
    this.parts = [];
  }
}

// Client code
const builder = new ConcreteBuilder();
const director = new Director(builder);

director.construct();
const product = builder.getResult();
console.log(product.parts);
