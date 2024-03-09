package main

import (
	"fmt"
	"time"
)

type TrafficLightState interface {
	ChangeState(trafficLight *TrafficLight)
}

type RedState struct{}

func (s *RedState) ChangeState(trafficLight *TrafficLight) {
	fmt.Println("Traffic light is now RED. Stop!")
	time.AfterFunc(3*time.Second, func() { 
		trafficLight.SetState(&YellowState{}) 
	})
}

type YellowState struct{}

func (s *YellowState) ChangeState(trafficLight *TrafficLight) {
	fmt.Println("Traffic light is now YELLOW. Prepare to stop or proceed with caution.")
	time.AfterFunc(2*time.Second, func() { 
		trafficLight.SetState(&GreenState{})
	})
}

type GreenState struct{}

func (s *GreenState) ChangeState(trafficLight *TrafficLight) {
	fmt.Println("Traffic light is now GREEN. Go!")
	time.AfterFunc(4*time.Second, func() { 
		trafficLight.SetState(&RedState{})
	})
}

type TrafficLight struct {
	state TrafficLightState
}

func (t *TrafficLight) SetState(state TrafficLightState) {
	t.state = state
	state.ChangeState(t)
}

func NewTrafficLight() *TrafficLight {
	return &TrafficLight{
		state: &RedState{}, // Initial state is Red
	}
}

// Main function simulating traffic light behavior
func main() {
	trafficLight := NewTrafficLight()

	// Change to green state to see the transition
	trafficLight.SetState(&GreenState{})

	// Keep the program running to observe state transitions
	select {}
}