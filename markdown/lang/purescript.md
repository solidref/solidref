# PureScript (TODO)

A strongly-typed functional programming language that compiles to JavaScript. It's inspired by Haskell and offers advanced type features.

## SOLID Principles

### Single Responsibility Principle (SRP)

```purescript
-- Bad example: A module handling both user data management and user notifications
module User where

saveUserData :: UserData -> Effect Unit
saveUserData userData = 
  -- ...

sendNotification :: Notification -> Effect Unit
sendNotification notification = 
  -- ...

-- Good example: Splitting responsibilities into separate modules
module UserDataManager where

saveUserData :: UserData -> Effect Unit
saveUserData userData = 
  -- ...

module UserNotification where

sendNotification :: Notification -> Effect Unit
sendNotification notification = 
  -- ...
```

### Open/Closed Principle (OCP)

```purescript
data Shape = Rectangle Number Number | Circle Number

computeArea :: Shape -> Number
computeArea shape =
  case shape of
    Rectangle width height -> width * height
    Circle radius -> 3.14 * radius * radius
```

### Liskov Substitution Principle (LSP)

```purescript
data Bird = Sparrow | Ostrich

fly :: Bird -> String
fly bird =
  case bird of
    Sparrow -> "Flying high!"
    Ostrich -> "Can't fly!"
```

### Interface Segregation Principle (ISP)

PureScript doesn't have interfaces in the same way some OOP languages do, but type classes can serve a similar purpose. They allow you to define a set of functions that a type must implement, and then you can write functions that work for any type that implements the type class.

```purescript
class Lightable a where
  turnOn :: a -> Effect Unit

data LightBulb = LightBulb

instance lightableLightBulb :: Lightable LightBulb where
  turnOn _ = log "Light bulb turned on"

operate :: forall a. Lightable a => a -> Effect Unit
operate device = turnOn device
```

### Dependency Inversion Principle (DIP)

```purescript
class Lightable a where
  turnOn :: a -> Effect Unit

data LightBulb = LightBulb

instance lightableLightBulb :: Lightable LightBulb where
  turnOn _ = log "Light bulb turned on"

operate :: forall a. Lightable a => a -> Effect Unit
operate device = turnOn device
```

## Other Principles

### DRY (Don't Repeat Yourself)

```purescript
-- Bad example: Repeated logic
addTaxForFood :: Number -> Number
addTaxForFood price = price + price * 0.05

addTaxForElectronics :: Number -> Number
addTaxForElectronics price = price + price * 0.05

-- Good example: Single function for repeated logic
addTax :: Number -> Number -> Number
addTax rate price = price + price * rate
```

### KISS (Keep It Simple, Stupid)

```purescript
-- Bad example: Overcomplicated way to check even numbers
isEven :: Int -> Boolean
isEven num = mod num (if num > 0 then 2 else -2) == 0

-- Good example: Simplified approach
isEven :: Int -> Boolean
isEven num = mod num 2 == 0
```

### YAGNI (You Aren't Gonna Need It)

```purescript
-- Bad example: Adding unnecessary features
data Car = Drive | Fly  -- Cars don't fly!

-- Good example: Only implement what's needed
data Car = Drive
```

### Law of Demeter (Principle of Least Knowledge)

```purescript
-- Bad example: Accessing nested structures directly
data Wallet = Wallet { money :: Number }
data Person = Person { wallet :: Wallet }

purchase :: Number -> Person -> Boolean
purchase itemPrice (Person { wallet: (Wallet { money }) }) = money >= itemPrice

-- Good example: Using pattern matching to minimize knowledge
purchase :: Number -> Person -> Boolean
purchase itemPrice (Person { wallet }) =
  let (Wallet { money }) = wallet
  in money >= itemPrice
```

### Separation of Concerns

```purescript
-- Bad example: Mixing data retrieval and presentation in one module
module User where

fetchUserData :: Effect UserData
fetchUserData = 
  -- ...

renderUser :: UserData -> String
renderUser user = 
  -- ...

-- Good example: Separating concerns into different modules
module UserData where

fetchUserData :: Effect UserData
fetchUserData = 
  -- ...

module UserView where

renderUser :: UserData -> String
renderUser user = 
  -- ...
```
