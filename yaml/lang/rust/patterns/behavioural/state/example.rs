use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

trait TrafficLightState {
    fn change_state(self: Box<Self>, traffic_light: Arc<Mutex<TrafficLight>>);
}

struct RedState;

impl TrafficLightState for RedState {
    fn change_state(self: Box<Self>, traffic_light: Arc<Mutex<TrafficLight>>) {
        println!("Traffic light is now RED. Stop!");
        // Transition to the next state (Yellow) after a certain duration
        thread::spawn(move || {
            thread::sleep(Duration::from_secs(3));
            let mut traffic_light = traffic_light.lock().unwrap();
            traffic_light.set_state(Box::new(YellowState));
        });
    }
}

struct YellowState;

impl TrafficLightState for YellowState {
    fn change_state(self: Box<Self>, traffic_light: Arc<Mutex<TrafficLight>>) {
        println!("Traffic light is now YELLOW. Prepare to stop or proceed with caution.");
        // Transition to the next state (Green) after a certain duration
        thread::spawn(move || {
            thread::sleep(Duration::from_secs(2));
            let mut traffic_light = traffic_light.lock().unwrap();
            traffic_light.set_state(Box::new(GreenState));
        });
    }
}

struct GreenState;

impl TrafficLightState for GreenState {
    fn change_state(self: Box<Self>, traffic_light: Arc<Mutex<TrafficLight>>) {
        println!("Traffic light is now GREEN. Go!");
        // Transition to the next state (Red) after a certain duration
        thread::spawn(move || {
            thread::sleep(Duration::from_secs(4));
            let mut traffic_light = traffic_light.lock().unwrap();
            traffic_light.set_state(Box::new(RedState));
        });
    }
}

struct TrafficLight {
    state: Box<dyn TrafficLightState>,
}

impl TrafficLight {
    fn new() -> Self {
        TrafficLight {
            state: Box::new(RedState),
        }
    }

    fn set_state(&mut self, state: Box<dyn TrafficLightState>) {
        self.state = state;
        let traffic_light_arc = Arc::new(Mutex::new(self));
        self.state.change_state(traffic_light_arc.clone());
    }
}

fn main() {
    let traffic_light = Arc::new(Mutex::new(TrafficLight::new()));

    // Simulating the behavior of traffic light by changing its state manually
    {
        let mut traffic_light = traffic_light.lock().unwrap();
        traffic_light.set_state(Box::new(GreenState));
    }

    // Let the threads complete their tasks (not ideal, just for demonstration)
    thread::sleep(Duration::from_secs(10));
}