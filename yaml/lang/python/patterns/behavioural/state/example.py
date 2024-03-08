from threading import Timer

class TrafficLightState:
    def change_state(self, traffic_light):
        pass

class RedState(TrafficLightState):
    def change_state(self, traffic_light):
        print("Traffic light is now RED. Stop!")
        # Transition to the next state (Yellow) after a certain duration
        Timer(3.0, lambda: traffic_light.set_state(YellowState())).start()

class YellowState(TrafficLightState):
    def change_state(self, traffic_light):
        print("Traffic light is now YELLOW. Prepare to stop or proceed with caution.")
        # Transition to the next state (Green) after a certain duration
        Timer(2.0, lambda: traffic_light.set_state(GreenState())).start()

class GreenState(TrafficLightState):
    def change_state(self, traffic_light):
        print("Traffic light is now GREEN. Go!")
        # Transition to the next state (Red) after a certain duration
        Timer(4.0, lambda: traffic_light.set_state(RedState())).start()

class TrafficLight:
    def __init__(self):
        # Initial state is Red
        self.state = RedState()

    def set_state(self, state):
        self.state = state
        self.state.change_state(self)

def main():
    traffic_light = TrafficLight()
    # Simulate traffic light behavior by changing its state
    traffic_light.set_state(GreenState())

if __name__ == "__main__":
    main()