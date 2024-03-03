class Flyweight {
  private sharedState: any;

  constructor(sharedState: any) {
    this.sharedState = sharedState;
  }

  operation(uniqueState: any): void {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}

class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight };

  constructor(initialFlyweights: any[]) {
    this.flyweights = {};
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  private getKey(state: any): string {
    return state.join('_');
  }

  getFlyweight(sharedState: any): Flyweight {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }
}

// Client code
const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
]);

factory.getFlyweight(['Chevrolet', 'Camaro2018', 'pink']).operation(['A001', 'Jul 30, 2020']);
factory.getFlyweight(['Mercedes Benz', 'C300', 'black']).operation(['B002', 'May 18, 2021']);

console.log('\nAdding new car to pool');
factory.getFlyweight(['BMW', 'M5', 'red']).operation(['C003', 'Mar 15, 2022']);
