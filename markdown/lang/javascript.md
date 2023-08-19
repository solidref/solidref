# JavaScript (ECMAScript)

A collection of widely-accepted coding principles that guide software design and development.

## SOLID Principles

### Single Responsibility Principle (SRP)

```js
// Bad example: A class handling both user data management and user notifications
class User {
    saveUserData() { /* ... */ }
    sendNotification() { /* ... */ }
}

// Good example: Splitting responsibilities into separate classes
class UserDataManager {
    saveUserData() { /* ... */ }
}

class UserNotification {
    sendNotification() { /* ... */ }
}

```

### Open/Closed Principle (OCP)

```js
// Bad example: Modifying existing code to add new functionality
function AreaCalculator(shape) {
    if (shape.type === 'rectangle') {
        return shape.width * shape.height;
    } else if (shape.type === 'circle') {
        return 3.14 * shape.radius * shape.radius;
    }
}

// Good example: Using abstraction to allow extension without modification
function computeArea(shape) {
    return shape.computeArea();
}

const rectangle = {
    computeArea: function() {
        return this.width * this.height;
    },
    width: 10,
    height: 5
};

const circle = {
    computeArea: function() {
        return 3.14 * this.radius * this.radius;
    },
    radius: 5
};
```

### Liskov Substitution Principle (LSP)

```js
// Bad example: Derived class changes the behavior of the base class
class Bird {
    fly() { /* ... */ }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("Can't fly");
    }
}

// Good example: Derived classes maintain the behavior of the base class
class FlyingBird {
    fly() { /* ... */ }
}

class NonFlyingBird {
    walk() { /* ... */ }
}
```

### Interface Segregation Principle (ISP)

```js
// JavaScript doesn't have interfaces in the same way TypeScript does.
// But the principle can be illustrated using function requirements.

// Bad example: A function requiring many parameters
function createWorker(name, age, task, food) { /* ... */ }

// Good example: Breaking down the function into more specific ones
function createPerson(name, age) { /* ... */ }
function assignTask(worker, task) { /* ... */ }
function feedWorker(worker, food) { /* ... */ }
```

### Dependency Inversion Principle (DIP)

```js
// Bad example: High-level module depending on a low-level module
class LightBulb {
    turnOn() { /* ... */ }
}

class Switch {
    constructor(bulb) {
        this.bulb = bulb;
    }
    operate() {
        this.bulb.turnOn();
    }
}

// Good example: Both high-level and low-level modules depend on abstractions
class Switch {
    constructor(device) {
        this.device = device;
    }
    operate() {
        this.device.turnOn();
    }
}

const fan = {
    turnOn: function() { /* ... */ }
};
```

## Other Principles

### DRY (Don't Repeat Yourself)

```js
// Bad example: Repeated logic
function addTaxForFood(price) {
    return price + (price * 0.05);
}

function addTaxForElectronics(price) {
    return price + (price * 0.05);
}

// Good example: Single function for repeated logic
function addTax(price, rate = 0.05) {
    return price + (price * rate);
}
```

### KISS (Keep It Simple, Stupid)

```js
// Bad example: Overcomplicated way to check even numbers
function isEven(num) {
    return num % Math.abs(2) === 0;
}

// Good example: Simplified approach
function isEven(num) {
    return num % 2 === 0;
}
```

### YAGNI (You Aren't Gonna Need It)

```js
// Bad example: Adding unnecessary features
class Car {
    drive() { /* ... */ }
    fly() { /* ... */ }  // Cars don't fly!
}

// Good example: Only implement what's needed
class Car {
    drive() { /* ... */ }
}
```

### Law of Demeter (Principle of Least Knowledge)

```js
// Bad example: Accessing nested structures directly
class Wallet {
    constructor() {
        this.money = { amount: 100 };
    }
}

class Person {
    constructor() {
        this.wallet = new Wallet();
    }
}

function purchase(item, buyer) {
    if (buyer.wallet.money.amount >= item.price) { /* ... */ }
}

// Good example: Using encapsulation
class Wallet {
    constructor() {
        this._money = 100;
    }
    getAmount() {
        return this._money;
    }
}

class Person {
    constructor() {
        this.wallet = new Wallet();
    }
    getMoneyAmount() {
        return this.wallet.getAmount();
    }
}

function purchase(item, buyer) {
    if (buyer.getMoneyAmount() >= item.price) { /* ... */ }
}
```

### Separation of Concerns

```js
// Bad example: Mixing data retrieval and presentation
class UserComponent {
    fetchUserData() { /* ... */ }
    render() { /* ... */ }
    calculateAge() { /* ... */ }
}

// Good example: Separating concerns into different modules
class UserDataService {
    fetchUserData() { /* ... */ }
}

class UserLogic {
    calculateAge() { /* ... */ }
}

class UserComponent {
    render() { /* ... */ }
}
```
