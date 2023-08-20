# Coding Principles

A collection of widely-accepted coding principles that guide software design and development.

## SOLID Principles

### Single Responsibility Principle (SRP)
A class should have only one reason to change. This ensures that a class addresses only one concern, making the system more modular and easier to maintain.

### Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification. This allows adding new features without altering existing code.

### Liskov Substitution Principle (LSP)
Subtypes must be substitutable for their base types. This ensures that a derived class is truly an extension of the base class.

### Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use. This makes the system more modular and easier to understand.

### Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules; both should depend on abstractions. This decouples software modules.

## Other Principles

### DRY (Don't Repeat Yourself)
Every piece of knowledge or logic should exist in a single place. This reduces repetition and potential errors.

### KISS (Keep It Simple, Stupid)
Systems work best when kept simple. Avoid unnecessary complexity.

### YAGNI (You Aren't Gonna Need It)
Avoid adding functionality until it's necessary. Prevents overengineering.

### Law of Demeter (Principle of Least Knowledge)
An object should only communicate with its immediate neighbors. This leads to a more decoupled system.

### Separation of Concerns
Different functionalities should be separated into distinct sections or modules. This makes the system more modular.
