#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// Forward declarations
struct TrafficLight;
struct TrafficLightState;

// Function pointer type for state change behavior
typedef void (*ChangeStateFn)(struct TrafficLight*);

// TrafficLightState struct (acts as an interface in C)
typedef struct TrafficLightState {
    ChangeStateFn changeState;
} TrafficLightState;

// Function prototypes for state change implementations
void RedStateChange(struct TrafficLight* trafficLight);
void YellowStateChange(struct TrafficLight* trafficLight);
void GreenStateChange(struct TrafficLight* trafficLight);

// Concrete states
typedef struct {
    TrafficLightState base;
} RedState;

typedef struct {
    TrafficLightState base;
} YellowState;

typedef struct {
    TrafficLightState base;
} GreenState;

// TrafficLight Context
typedef struct TrafficLight {
    TrafficLightState* state;
    RedState redState;
    YellowState yellowState;
    GreenState greenState;
} TrafficLight;

// TrafficLight method to change its state
void TrafficLightSetState(TrafficLight* trafficLight, TrafficLightState* newState) {
    trafficLight->state = newState;
    newState->changeState(trafficLight);
}

// Concrete state implementations
void RedStateChange(TrafficLight* trafficLight) {
    printf("Traffic light is now RED. Stop!\n");
    sleep(3);
    TrafficLightSetState(trafficLight, (TrafficLightState*)&trafficLight->yellowState);
}

void YellowStateChange(TrafficLight* trafficLight) {
    printf("Traffic light is now YELLOW. Prepare to stop or proceed with caution.\n");
    sleep(2);
    TrafficLightSetState(trafficLight, (TrafficLightState*)&trafficLight->greenState);
}

void GreenStateChange(TrafficLight* trafficLight) {
    printf("Traffic light is now GREEN. Go!\n");
    sleep(4);
    TrafficLightSetState(trafficLight, (TrafficLightState*)&trafficLight->redState);
}

// Constructor-like functions for the states
void InitRedState(RedState* state) {
    state->base.changeState = RedStateChange;
}

void InitYellowState(YellowState* state) {
    state->base.changeState = YellowStateChange;
}

void InitGreenState(GreenState* state) {
    state->base.changeState = GreenStateChange;
}

// Constructor for TrafficLight
void InitTrafficLight(TrafficLight* trafficLight) {
    InitRedState(&trafficLight->redState);
    InitYellowState(&trafficLight->yellowState);
    InitGreenState(&trafficLight->greenState);
    trafficLight->state = (TrafficLightState*)&trafficLight->redState; // Initial state is Red
    trafficLight->state->changeState(trafficLight);
}

// Client code
int main() {
    TrafficLight trafficLight;
    InitTrafficLight(&trafficLight);

    return 0;
}
