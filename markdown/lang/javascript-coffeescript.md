# CoffeeScript

Offers a more concise syntax and additional features not present in JavaScript. It compiles directly into JavaScript. Its syntax influenced many of the updates in ES6.

## SOLID Principles

### Single Responsibility Principle (SRP)

```coffee
# Bad example: A class handling both user data management and user notifications
class User
    saveUserData: -> # ...
    sendNotification: -> # ...

# Good example: Splitting responsibilities into separate classes
class UserDataManager
    saveUserData: -> # ...

class UserNotification
    sendNotification: -> # ...
```

### Open/Closed Principle (OCP)

```coffee
# Bad example: Modifying existing code to add new functionality
class Rectangle
    computeArea: -> @width * @height

# Good example: Using abstraction to allow extension without modification
class Shape
    computeArea: ->

class Circle extends Shape
    computeArea: -> 3.14 * @radius * @radius
```

### Liskov Substitution Principle (LSP)

```coffee
# Bad example: Derived class changes the behavior of the base class
class Bird
    fly: -> # ...

class Ostrich extends Bird
    fly: -> throw new Error("Can't fly")

# Good example: Derived classes maintain the behavior of the base class
class FlyingBird
    fly: -> # ...

class NonFlyingBird
    walk: -> # ...
```

### Interface Segregation Principle (ISP)

```coffee
# CoffeeScript doesn't have interfaces in the same way TypeScript does.
# But the principle can be illustrated using function requirements.

# Bad example: A function requiring many parameters
createWorker = (name, age, task, food) -> # ...

# Good example: Breaking down the function into more specific ones
createPerson = (name, age) -> # ...
assignTask = (worker, task) -> # ...
feedWorker = (worker, food) -> # ...
```

### Dependency Inversion Principle (DIP)

```coffee
# Bad example: High-level module depending on a low-level module
class LightBulb
    turnOn: -> # ...

class Switch
    constructor: (@bulb) ->
    operate: -> @bulb.turnOn()

# Good example: Both high-level and low-level modules depend on abstractions
class Device
    turnOn: ->

class Fan extends Device
    turnOn: -> # ...

class Switch
    constructor: (@device) ->
    operate: -> @device.turnOn()
```

## Other Principles

### DRY (Don't Repeat Yourself)

```coffee
# Bad example: Repeated logic
addTaxForFood = (price) -> price + (price * 0.05)
addTaxForElectronics = (price) -> price + (price * 0.05)

# Good example: Single function for repeated logic
addTax = (price, rate = 0.05) -> price + (price * rate)
```

### KISS (Keep It Simple, Stupid)

```coffee
# Bad example: Overcomplicated way to check even numbers
isEven = (num) -> num % Math.abs(2) == 0

# Good example: Simplified approach
isEven = (num) -> num % 2 == 0
```

### YAGNI (You Aren't Gonna Need It)

```coffee
# Bad example: Adding unnecessary features
class Car
    drive: -> # ...
    fly: -> # ... Cars don't fly!

# Good example: Only implement what's needed
class Car
    drive: -> # ...
```

### Law of Demeter (Principle of Least Knowledge)

```coffee
# Bad example: Accessing nested structures directly
class Wallet
    constructor: -> @money = { amount: 100 }

class Person
    constructor: -> @wallet = new Wallet()

purchase = (item, buyer) ->
    if buyer.wallet.money.amount >= item.price
        # ...

# Good example: Using encapsulation
class Wallet
    constructor: -> @_money = 100
    getAmount: -> @_money

class Person
    constructor: -> @wallet = new Wallet()
    getMoneyAmount: -> @wallet.getAmount()

purchase = (item, buyer) ->
    if buyer.getMoneyAmount() >= item.price
        # ...
```

### Separation of Concerns

```coffee
# Bad example: Mixing data retrieval and presentation
class UserComponent
    fetchUserData: -> # ...
    render: -> # ...
    calculateAge: -> # ...

# Good example: Separating concerns into different modules
class UserDataService
    fetchUserData: -> # ...

class UserLogic
    calculateAge: -> # ...

class UserComponent
    render: -> # ...
```
