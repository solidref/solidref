# Elm

A functional language that compiles to JavaScript. It's known for its performance and strong emphasis on simplicity and quality tooling.

## SOLID Principles

### Single Responsibility Principle (SRP)

```elm
-- Bad example: A module handling both user data management and user notifications
module User exposing (saveUserData, sendNotification)

saveUserData : UserData -> Cmd Msg
saveUserData userData = 
    -- ...

sendNotification : Notification -> Cmd Msg
sendNotification notification = 
    -- ...

-- Good example: Splitting responsibilities into separate modules
module UserDataManager exposing (saveUserData)

saveUserData : UserData -> Cmd Msg
saveUserData userData = 
    -- ...

module UserNotification exposing (sendNotification)

sendNotification : Notification -> Cmd Msg
sendNotification notification = 
    -- ...
```

### Open/Closed Principle (OCP)

```elm
-- Using a union type to represent different shapes
type Shape
    = Rectangle Float Float
    | Circle Float

-- Easily extendable without modifying existing code
computeArea : Shape -> Float
computeArea shape =
    case shape of
        Rectangle width height ->
            width * height

        Circle radius ->
            3.14 * radius * radius
```

### Liskov Substitution Principle (LSP)

```elm
-- If you have a function expecting a Bird, any subtype (or variant) of Bird can be passed
type Bird
    = Sparrow
    | Ostrich

fly : Bird -> String
fly bird =
    case bird of
        Sparrow ->
            "Flying high!"

        Ostrich ->
            "Can't fly!"
```

### Interface Segregation Principle (ISP)

Elm doesn't have interfaces or classes, so these principles don't apply in the same way as in OOP languages. However, Elm promotes the use of small, focused functions and modules, which naturally aligns with the spirit of ISP. For DIP, Elm's architecture encourages defining clear boundaries and interactions between different parts of the system, which can be seen as a form of dependency inversion at a higher level.

### Dependency Inversion Principle (DIP)

Elm doesn't have interfaces or classes, so these principles don't apply in the same way as in OOP languages. However, Elm promotes the use of small, focused functions and modules, which naturally aligns with the spirit of ISP. For DIP, Elm's architecture encourages defining clear boundaries and interactions between different parts of the system, which can be seen as a form of dependency inversion at a higher level.

## Other Principles

### DRY (Don't Repeat Yourself)

In Elm, functions naturally promote DRY because of their pure and modular nature.

```elm
-- Bad example: Repeated logic
addTaxForFood : Float -> Float
addTaxForFood price =
    price + (price * 0.05)

addTaxForElectronics : Float -> Float
addTaxForElectronics price =
    price + (price * 0.05)

-- Good example: Single function for repeated logic
addTax : Float -> Float -> Float
addTax price rate =
    price + (price * rate)
```

### KISS (Keep It Simple, Stupid)

Elm's syntax and functional nature naturally promote simplicity.

```elm
-- Bad example: Overcomplicated way to check even numbers
isEven : Int -> Bool
isEven num =
    modBy (if num > 0 then 2 else -2) num == 0

-- Good example: Simplified approach
isEven : Int -> Bool
isEven num =
    modBy 2 num == 0
```

### YAGNI (You Aren't Gonna Need It)

Elm's architecture and the Elm package manager's semantic versioning system encourage minimal and necessary implementations.

```elm
-- Bad example: Adding unnecessary features
type Car
    = Drive
    | Fly  -- Cars don't fly!

-- Good example: Only implement what's needed
type Car
    = Drive
```

### Law of Demeter (Principle of Least Knowledge)

Elm's architecture, especially the Elm Architecture (Model-Update-View), promotes clear boundaries and interactions between different parts of the system.

```elm
-- Bad example: Accessing nested structures directly
type alias Wallet =
    { money : Float }

type alias Person =
    { wallet : Wallet }

purchase : Float -> Person -> Bool
purchase itemPrice buyer =
    buyer.wallet.money >= itemPrice

-- Good example: Using encapsulation
type alias Wallet =
    { money : Float }

getMoney : Wallet -> Float
getMoney wallet =
    wallet.money

type alias Person =
    { wallet : Wallet }

purchase : Float -> Person -> Bool
purchase itemPrice buyer =
    getMoney buyer.wallet >= itemPrice
```

### Separation of Concerns

Elm's architecture, especially The Elm Architecture (TEA), naturally promotes the separation of concerns.

```elm
-- Bad example: Mixing data retrieval and presentation
type alias UserComponent =
    { userData : UserData
    , view : Html Msg
    , age : Int
    }

-- Good example: Separating concerns into different modules or types
type alias UserDataService =
    { userData : UserData }

type alias UserLogic =
    { age : Int }

type alias UserComponent =
    { view : Html Msg }
```
