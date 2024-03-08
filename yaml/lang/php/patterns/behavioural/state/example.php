```php
<?php

interface TrafficLightState {
    public function changeState(TrafficLight $trafficLight);
}

class RedState implements TrafficLightState {
    public function changeState(TrafficLight $trafficLight) {
        echo "Traffic light is now RED. Stop!\n";
        // Transition to the next state (Yellow) after a certain duration
        sleep(3);
        $trafficLight->setState(new YellowState());
    }
}

class YellowState implements TrafficLightState {
    public function changeState(TrafficLight $trafficLight) {
        echo "Traffic light is now YELLOW. Prepare to stop or proceed with caution.\n";
        // Transition to the next state (Green) after a certain duration
        sleep(2);
        $trafficLight->setState(new GreenState());
    }
}

class GreenState implements TrafficLightState {
    public function changeState(TrafficLight $trafficLight) {
        echo "Traffic light is now GREEN. Go!\n";
        // Transition to the next state (Red) after a certain duration
        sleep(4);
        $trafficLight->setState(new RedState());
    }
}

class TrafficLight {
    private $state;

    public function __construct() {
        // Initial state is Red
        $this->state = new RedState();
    }

    public function setState(TrafficLightState $state) {
        $this->state = $state;
        $this->state->changeState($this);
    }
}

// Client code
function main() {
    $trafficLight = new TrafficLight();

    // Simulate traffic light behavior by changing its state
    $trafficLight->setState(new GreenState());
}

main();
```