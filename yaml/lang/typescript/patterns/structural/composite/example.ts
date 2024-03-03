abstract class Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract add(component: Component): void;
  abstract remove(component: Component): void;
  abstract display(depth: number): void;
}

class Leaf extends Component {
  constructor(name: string) {
    super(name);
  }

  display(depth: number): void {
    console.log('-'.repeat(depth) + this.name);
  }

  add(component: Component): void {
    console.log('Cannot add to a leaf.');
  }

  remove(component: Component): void {
    console.log('Cannot remove from a leaf.');
  }
}

class Composite extends Component {
  private children: Component[];

  constructor(name: string) {
    super(name);
    this.children = [];
  }

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  display(depth: number): void {
    console.log('-'.repeat(depth) + this.name);
    for (const child of this.children) {
      child.display(depth + 2);
    }
  }
}

// Client code
const root = new Composite('root');
root.add(new Leaf('Leaf A'));
root.add(new Leaf('Leaf B'));

const comp = new Composite('Composite X');
comp.add(new Leaf('Leaf XA'));
comp.add(new Leaf('Leaf XB'));

root.add(comp);
root.add(new Leaf('Leaf C'));

const leaf = new Leaf('Leaf D');
root.add(leaf);
root.remove(leaf);

root.display(1);
