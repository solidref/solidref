# ReasonML / ReScript (TODO)

Developed by Facebook, ReasonML offers a syntax close to JavaScript with the power of OCaml. It provides a strong type system and functional programming features.

ReasonML (often just called Reason) is a syntax extension and toolchain for OCaml, which compiles to readable JavaScript. ReScript (previously known as BuckleScript) is a JavaScript backend for the OCaml compiler. Over time, ReScript has evolved and is now its own language with its own syntax, but it's heavily influenced by ReasonML and OCaml.

Given the functional nature of Reason/ReScript, the principles will be approached differently than in object-oriented languages. Here's how you might apply the SOLID principles and the other principles you've mentioned in Reason/ReScript:

## SOLID Principles

### Single Responsibility Principle (SRP)

```reason
/* Bad example: A module handling both user data management and user notifications */
module User = {
  let saveUserData = data => /* ... */;
  let sendNotification = notification => /* ... */;
};

/* Good example: Splitting responsibilities into separate modules */
module UserDataManager = {
  let saveUserData = data => /* ... */;
};

module UserNotification = {
  let sendNotification = notification => /* ... */;
};
```

### Open/Closed Principle (OCP)

```reason
type shape =
  | Rectangle(float, float)
  | Circle(float);

let computeArea = shape =>
  switch (shape) {
  | Rectangle(width, height) => width *. height
  | Circle(radius) => 3.14 *. radius *. radius
  };
```

### Liskov Substitution Principle (LSP)

```reason
type bird =
  | Sparrow
  | Ostrich;

let fly = bird =>
  switch (bird) {
  | Sparrow => "Flying high!"
  | Ostrich => "Can't fly!"
  };
```

### Interface Segregation Principle (ISP)

Reason doesn't have interfaces in the same way some OOP languages do, but its module system can serve a similar purpose. Abstract modules (or module types) can be used to define a set of functions that a module must implement.

```reason
module type Lightable = {
  let turnOn: unit => unit;
};

module LightBulb: Lightable = {
  let turnOn = () => Js.log("Light bulb turned on");
};

let operate = (module Device: Lightable) => Device.turnOn();
```

### Dependency Inversion Principle (DIP)

#### Using Higher-Order Functions

One of the simplest ways to achieve DI in ReasonML/ReScript is by passing functions as arguments to other functions.

```reason
let greet = (formatter, name) => formatter(name);

let politeFormatter = name => "Hello, " ++ name ++ "! How are you today?";

let casualFormatter = name => "Hey, " ++ name ++ "!";

/* Usage */
greet(politeFormatter, "Alice");  /* "Hello, Alice! How are you today?" */
greet(casualFormatter, "Bob");    /* "Hey, Bob!" */
```

#### Using Abstract Modules (Module Types)

ReasonML/ReScript's module system allows for abstract modules, which can be used to define interfaces. This can be used for DI by defining a module type (interface) and then injecting concrete implementations.

```reason
module type DATABASE = {
  let fetch: string => string;
};

module MockDatabase: DATABASE = {
  let fetch = id => "Mock data for " ++ id;
};

module ProductionDatabase: DATABASE = {
  let fetch = id => "Real data for " ++ id; /* Assume some real fetching here */
};

let getData = (module DB: DATABASE, id) => DB.fetch(id);

/* Usage */
getData((module MockDatabase), "123");       /* "Mock data for 123" */
getData((module ProductionDatabase), "123"); /* "Real data for 123" */
```

#### Using Records or Objects

You can also use records or objects to group related functions together and then pass these around for DI.

```reason
type database = {
  fetch: string => string
};

let mockDatabase = {
  fetch: id => "Mock data for " ++ id
};

let productionDatabase = {
  fetch: id => "Real data for " ++ id /* Assume some real fetching here */
};

let getData = (db, id) => db.fetch(id);

/* Usage */
getData(mockDatabase, "123");       /* "Mock data for 123" */
getData(productionDatabase, "123"); /* "Real data for 123" */
```

## Other Principles

### DRY (Don't Repeat Yourself)

```reason
/* Bad example: Repeated logic */
let addTaxForFood = price => price +. price *. 0.05;

let addTaxForElectronics = price => price +. price *. 0.05;

/* Good example: Single function for repeated logic */
let addTax = (~rate=0.05, price) => price +. price *. rate;
```

### KISS (Keep It Simple, Stupid)

```reason
/* Bad example: Overcomplicated way to check even numbers */
let isEven = num => num mod (if (num > 0) { 2 } else { -2 }) == 0;

/* Good example: Simplified approach */
let isEven = num => num mod 2 == 0;
```

### YAGNI (You Aren't Gonna Need It)

```reason
/* Bad example: Adding unnecessary features */
type car = 
  | Drive
  | Fly;  /* Cars don't fly! */

/* Good example: Only implement what's needed */
type car = Drive;
```

### Law of Demeter (Principle of Least Knowledge)

```reason
/* Bad example: Accessing nested structures directly */
type wallet = {money: float};
type person = {wallet: wallet};

let purchase = (itemPrice, {wallet: {money}}) => money >= itemPrice;

/* Good example: Using pattern matching to minimize knowledge */
let purchase = (itemPrice, person) =>
  switch (person) {
  | {wallet: {money}} when money >= itemPrice => true
  | _ => false
  };
```

### Separation of Concerns

```reason
/* Bad example: Mixing data retrieval and presentation in one module */
module User = {
  let fetchUserData = () => /* ... */;
  let renderUser = user => /* ... */;
};

/* Good example: Separating concerns into different modules */
module UserData = {
  let fetchUserData = () => /* ... */;
};

module UserView = {
  let renderUser = user => /* ... */;
};
```
