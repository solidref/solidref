#include <stdio.h>
#include <stdlib.h>

// Vehicle Types
typedef enum {
    CAR,
    TRUCK
} VehicleType;

// Vehicle interface equivalent in C
typedef struct Vehicle {
    void (*drive)(struct Vehicle *);
} Vehicle;

// Function declarations for Car and Truck drive methods
void driveCar(Vehicle *vehicle);
void driveTruck(Vehicle *vehicle);

// Car struct
typedef struct {
    Vehicle base;
    // Car-specific attributes can be added here
} Car;

// Truck struct
typedef struct {
    Vehicle base;
    // Truck-specific attributes can be added here
} Truck;

// Factory Method equivalent in C
Vehicle* createVehicle(VehicleType type) {
    // Depending on the type parameter, instantiate a Car or Truck
    switch (type) {
        case CAR: {
            Car *car = (Car *)malloc(sizeof(Car));
            if (!car) return NULL;
            car->base.drive = driveCar;
            printf("Creating a car...\n");
            return (Vehicle *)car;
        }
        case TRUCK: {
            Truck *truck = (Truck *)malloc(sizeof(Truck));
            if (!truck) return NULL;
            truck->base.drive = driveTruck;
            printf("Creating a truck...\n");
            return (Vehicle *)truck;
        }
        default:
            return NULL;
    }
}

// Implementation of the drive method for Car
void driveCar(Vehicle *vehicle) {
    printf("Driving a car...\n");
}

// Implementation of the drive method for Truck
void driveTruck(Vehicle *vehicle) {
    printf("Driving a truck...\n");
}

// Deliver Vehicle function, which uses the "factory method"
void deliverVehicle(VehicleType type) {
    Vehicle *vehicle = createVehicle(type);
    if (!vehicle) return;
    printf("Delivering the vehicle...\n");
    vehicle->drive(vehicle);
    free(vehicle); // Clean up
}

int main() {
    // Client code to use the factory for creating and delivering vehicles
    
    // Create and deliver a Car
    deliverVehicle(CAR);
    
    // Create and deliver a Truck
    deliverVehicle(TRUCK);

    return 0;
}

/**
 * In C, the Vehicle interface is represented as a struct with function pointers for behavior,
 * allowing for polymorphic behavior similar to what interfaces provide in object-oriented languages.
 *
 * The "drive" function pointer in the Vehicle struct acts similarly to the drive() method in the Vehicle interface from the OOP example.
 *
 * Car and Truck structs are defined with a Vehicle as their first member, allowing them to be treated as Vehicles.
 * This pattern is known as "inheritance" in object-oriented programming, achieved here through composition and function pointers for polymorphic behavior.
 *
 * The global function `createVehicle` acts as the factory method, returning pointers to Vehicle based on the requested type.
 *
 * The `deliverVehicle` function demonstrates the use of the factory method to create and operate on vehicles without knowing their concrete types.
 *
 * The translation from an Object-Oriented Pattern to a procedural language like C demonstrates how polymorphism and encapsulation can be achieved through 
 * structured programming techniques.
 */