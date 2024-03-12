#include <stdio.h>
#include <stdlib.h>

/* Workshop interface (Implementor) */
typedef struct Workshop Workshop;
struct Workshop {
    void (*work)(Workshop *);
};

/* Paint Workshop (Concrete Implementor) */
void PaintWorkshop_work(Workshop *self) {
    printf("Painting vehicle\n");
}

Workshop* PaintWorkshop_new() {
    Workshop* pws = (Workshop*)malloc(sizeof(Workshop));
    pws->work = PaintWorkshop_work;
    return pws;
}

/* Repair Workshop (Concrete Implementor) */
void RepairWorkshop_work(Workshop *self) {
    printf("Repairing vehicle\n");
}

Workshop* RepairWorkshop_new() {
    Workshop* rws = (Workshop*)malloc(sizeof(Workshop));
    rws->work = RepairWorkshop_work;
    return rws;
}

/* Vehicle (Abstraction) */
typedef struct Vehicle Vehicle;
struct Vehicle {
    Workshop *workshop;
    void (*manufacture)(Vehicle *);
};

void Vehicle_init(Vehicle *vehicle, Workshop *workshop) {
    vehicle->workshop = workshop;
}

/* Car (Refined Abstraction) */
typedef struct {
    Vehicle base;
} Car;

void Car_manufacture(Vehicle *vehicle) {
    printf("Manufacturing car.\n");
    vehicle->workshop->work(vehicle->workshop);
}

Car* Car_new(Workshop *workshop) {
    Car* car = (Car*)malloc(sizeof(Car));
    Vehicle_init((Vehicle *)car, workshop);
    car->base.manufacture = Car_manufacture;
    return car;
}

/* Truck (Refined Abstraction) */
typedef struct {
    Vehicle base;
} Truck;

void Truck_manufacture(Vehicle *vehicle) {
    printf("Manufacturing truck.\n");
    vehicle->workshop->work(vehicle->workshop);
}

Truck* Truck_new(Workshop *workshop) {
    Truck* truck = (Truck*)malloc(sizeof(Truck));
    Vehicle_init((Vehicle *)truck, workshop);
    truck->base.manufacture = Truck_manufacture;
    return truck;
}

/* Client code */
int main() {
    Workshop *paintWorkshop = PaintWorkshop_new();
    Vehicle *car = (Vehicle*) Car_new(paintWorkshop);
    car->manufacture(car);

    Workshop *repairWorkshop = RepairWorkshop_new();
    Vehicle *truck = (Vehicle*) Truck_new(repairWorkshop);
    truck->manufacture(truck);

    free(paintWorkshop);
    free(repairWorkshop);
    free(car);
    free(truck);

    return 0;
}

/*
 * The Vehicle struct represents the abstraction, which is specialized by Car and Truck.
 *
 * The Workshop interface represents the implementor, defining the work function pointer.
 *
 * PaintWorkshop and RepairWorkshop are concrete implementations of the Workshop interface.
 *
 * Each vehicle can be associated with a specific workshop using function pointers for composition, delegating the work to the workshop.
 */