package main

import (
	"fmt"
)

// Notification interface defines the common method for sending notifications.
type Notification interface {
	Send() string
}

// BaseNotification represents the base notification without any additional features.
type BaseNotification struct{}

func (bn *BaseNotification) Send() string {
	return "Base notification: You have a new message!"
}

// NotificationDecorator serves as the base struct for concrete decorators.
// It holds a reference to the wrapped notification.
type NotificationDecorator struct {
	notification Notification
}

func (nd *NotificationDecorator) Send() string {
	return nd.notification.Send()
}

// SoundNotificationDecorator adds sound notification functionality to the base notification.
type SoundNotificationDecorator struct {
	NotificationDecorator
}

func NewSoundNotificationDecorator(notification Notification) *SoundNotificationDecorator {
	return &SoundNotificationDecorator{NotificationDecorator{notification: notification}}
}

func (snd *SoundNotificationDecorator) Send() string {
	return fmt.Sprintf("%s (Sound notification: Ding!)", snd.notification.Send())
}

// PriorityNotificationDecorator adds priority notification functionality to the base notification.
type PriorityNotificationDecorator struct {
	NotificationDecorator
}

func NewPriorityNotificationDecorator(notification Notification) *PriorityNotificationDecorator {
	return &PriorityNotificationDecorator{NotificationDecorator{notification: notification}}
}

func (pnd *PriorityNotificationDecorator) Send() string {
	return fmt.Sprintf("%s (Priority notification: High priority!)", pnd.notification.Send())
}

// Client code demonstrating how we can dynamically add sound notification,
// priority notification, or both to the base notification.
func main() {
	baseNotification := &BaseNotification{}
	fmt.Println(baseNotification.Send())

	soundNotification := NewSoundNotificationDecorator(baseNotification)
	fmt.Println(soundNotification.Send())

	priorityNotification := NewPriorityNotificationDecorator(baseNotification)
	fmt.Println(priorityNotification.Send())

	soundAndPriorityNotification := NewPriorityNotificationDecorator(NewSoundNotificationDecorator(baseNotification))
	fmt.Println(soundAndPriorityNotification.Send())
}