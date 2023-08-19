# Assembly Script

A subset of TypeScript (a variation, to be precise) that targets WebAssembly, allowing developers to write WebAssembly using a syntax familiar to JavaScript/TypeScript developers.

## SOLID Principles

### Single Responsibility Principle (SRP)

```ts
// Bad example: A class handling both user data management and user notifications
class User {
  saveUserData(): void { /* ... */ }
  sendNotification(): void { /* ... */ }
}

// Good example: Splitting responsibilities into separate classes
class UserDataManager {
  saveUserData(): void { /* ... */ }
}

class UserNotification {
  sendNotification(): void { /* ... */ }
}
```

### Open/Closed Principle (OCP)

```ts
// Bad example: Modifying existing code to add new functionality
class Rectangle {
  width: f64;
  height: f64;
  computeArea(): f64 {
    return this.width * this.height;
  }
}

// Good example: Using abstraction to allow extension without modification
abstract class Shape {
  abstract computeArea(): f64;
}

class Circle extends Shape {
  radius: f64;
  override computeArea(): f64 {
    return 3.14 * this.radius * this.radius;
  }
}
```

### Liskov Substitution Principle (LSP)

```ts
// Bad example: Derived class changes the behavior of the base class
class Bird {
  fly(): void { /* ... */ }
}

class Ostrich extends Bird {
  override fly(): void {
    // Throw an error or handle differently
  }
}

// Good example: Derived classes maintain the behavior of the base class
class FlyingBird {
  fly(): void { /* ... */ }
}

class NonFlyingBird {
  walk(): void { /* ... */ }
}
```

### Interface Segregation Principle (ISP)

```ts
// Bad example: A bulky interface
interface Worker {
  work(): void;
  eat(): void;
}

// Good example: Segregated interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}
```

### Dependency Inversion Principle (DIP)

```ts
// Bad example: High-level module depending on a low-level module
class LightBulb {
  turnOn(): void { /* ... */ }
}

class Switch {
  private bulb: LightBulb;
  constructor(bulb: LightBulb) {
    this.bulb = bulb;
  }
  operate(): void {
    this.bulb.turnOn();
  }
}

// Good example: Both high-level and low-level modules depend on abstractions
interface Device {
  turnOn(): void;
}

class Fan implements Device {
  turnOn(): void { /* ... */ }
}

class Switch {
  private device: Device;
  constructor(device: Device) {
    this.device = device;
  }
  operate(): void {
    this.device.turnOn();
  }
}
```

## Other Principles

### DRY (Don't Repeat Yourself)

```ts
// Bad example: Repeated logic
function addTaxForFood(price: f64): f64 {
  return price + (price * 0.05);
}

function addTaxForElectronics(price: f64): f64 {
  return price + (price * 0.05);
}

// Good example: Single function for repeated logic
function addTax(price: f64, rate: f64 = 0.05): f64 {
  return price + (price * rate);
}
```

### KISS (Keep It Simple, Stupid)

```ts
// Bad example: Overcomplicated way to check even numbers
function isEven(num: i32): bool {
  return num % (num > 0 ? 2 : -2) == 0;
}

// Good example: Simplified approach
function isEven(num: i32): bool {
  return num % 2 == 0;
}
```

### YAGNI (You Aren't Gonna Need It)

```ts
// Bad example: Adding unnecessary features
class Car {
  drive(): void { /* ... */ }
  fly(): void { /* ... */ }  // Cars don't fly!
}

// Good example: Only implement what's needed
class Car {
  drive(): void { /* ... */ }
}
```

### Law of Demeter (Principle of Least Knowledge)

```ts
// Bad example: Accessing nested structures directly
class Wallet {
  money: f64 = 100.0;
}

class Person {
  wallet: Wallet = new Wallet();
}

function purchase(itemPrice: f64, buyer: Person): bool {
  if (buyer.wallet.money >= itemPrice) {
    // ...
    return true;
  }
  return false;
}

// Good example: Using encapsulation
class Wallet {
  private _money: f64 = 100.0;
  getAmount(): f64 {
    return this._money;
  }
}

class Person {
  wallet: Wallet = new Wallet();
  getMoneyAmount(): f64 {
    return this.wallet.getAmount();
  }
}

function purchase(itemPrice: f64, buyer: Person): bool {
  if (buyer.getMoneyAmount() >= itemPrice) {
    // ...
    return true;
  }
  return false;
}
```

### Separation of Concerns

```ts
// Bad example: Mixing data retrieval and presentation
class UserComponent {
  fetchUserData(): void { /* ... */ }
  render(): void { /* ... */ }
  calculateAge(): void { /* ... */ }
}

// Good example: Separating concerns into different modules
class UserDataService {
  fetchUserData(): void { /* ... */ }
}

class UserLogic {
  calculateAge(): void { /* ... */ }
}

class UserComponent {
  render(): void { /* ... */ }
}
```
