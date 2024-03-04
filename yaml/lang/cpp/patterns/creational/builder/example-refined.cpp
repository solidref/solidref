#include <iostream>
#include <string>

// Product Class

class Car {
  std::string type;
  std::string engine;
  int seats;
  bool gps;

public:
  Car(const std::string &type) : type(type), seats(0), gps(false) {}

  void setEngine(const std::string &engineType) { engine = engineType; }

  void setSeats(int number) { seats = number; }

  void setGPS(bool hasGPS) { gps = hasGPS; }

  void specifications() const {
    std::cout << "Car type: " << type << std::endl;
    std::cout << "Engine: " << engine << std::endl;
    std::cout << "Seats: " << seats << std::endl;
    std::cout << "GPS: " << (gps ? "Yes" : "No") << std::endl;
  }
};

// Builder Interface and Concrete Builders

class CarBuilder {
public:
  virtual ~CarBuilder() {}
  virtual void reset() = 0;
  virtual void buildEngine(const std::string &engine) = 0;
  virtual void buildSeats(int number) = 0;
  virtual void buildGPS(bool hasGPS) = 0;
  virtual Car getResult() = 0;
};

class SportsCarBuilder : public CarBuilder {
  Car car{"SportsCar"};

public:
  void reset() override {
    Car newCar{"SportsCar"};
    car = newCar;
  }

  void buildEngine(const std::string &engine) override {
    car.setEngine(engine);
  }

  void buildSeats(int number) override { car.setSeats(number); }

  void buildGPS(bool hasGPS) override { car.setGPS(hasGPS); }

  Car getResult() override { return car; }
};

class FamilyCarBuilder : public CarBuilder {
  Car car{"FamilyCar"};

public:
  void reset() override {
    Car newCar{"FamilyCar"};
    car = newCar;
  }

  void buildEngine(const std::string &engine) override {
    car.setEngine(engine);
  }

  void buildSeats(int number) override { car.setSeats(number); }

  void buildGPS(bool hasGPS) override { car.setGPS(hasGPS); }

  Car getResult() override { return car; }
};

// Director Class

class Director {
public:
  void constructSportsCar(CarBuilder &builder) {
    builder.reset();
    builder.buildEngine("V8");
    builder.buildSeats(2);
    builder.buildGPS(true);
  }

  void constructFamilyCar(CarBuilder &builder) {
    builder.reset();
    builder.buildEngine("V4");
    builder.buildSeats(5);
    builder.buildGPS(true);
  }
};

// Client Code

int main() {
  Director director;
  SportsCarBuilder sportsCarBuilder;
  FamilyCarBuilder familyCarBuilder;

  director.constructSportsCar(sportsCarBuilder);
  Car sportsCar = sportsCarBuilder.getResult();
  std::cout << "Sports Car Specifications:" << std::endl;
  sportsCar.specifications();

  director.constructFamilyCar(familyCarBuilder);
  Car familyCar = familyCarBuilder.getResult();
  std::cout << "\nFamily Car Specifications:" << std::endl;
  familyCar.specifications();

  return 0;
}

// Flexibility in Object Construction: The Builder pattern allows for
// constructing objects step-by-step, varying the process as needed for
// different types of products (SportsCar vs. FamilyCar).

// Encapsulation of Construction Logic: Builders encapsulate the construction
// logic for each type of product, keeping it separate from the product classes
// themselves.

// Control over Construction Process: The Director class provides additional
// control over the construction process, potentially simplifying the client
// code.

// This refined example demonstrates the Builder Design Pattern's power in C++,
// enabling the construction of complex objects with specific configurations
// through a flexible and controlled process.
