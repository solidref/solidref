package main

import (
	"fmt"
)

// SupportHandler defines the interface for a support handler
type SupportHandler interface {
	SetNextHandler(handler SupportHandler)
	HandleRequest(request string) string
}

// Level1Support concrete implementation for Level 1 support
type Level1Support struct {
	nextHandler SupportHandler
}

func (l *Level1Support) SetNextHandler(handler SupportHandler) {
	l.nextHandler = handler
}

func (l *Level1Support) HandleRequest(request string) string {
	if request == "basic" {
		return "Level 1 Support: Issue resolved at basic level."
	} else if l.nextHandler != nil {
		return l.nextHandler.HandleRequest(request)
	}
	return ""
}

// Level2Support concrete implementation for Level 2 support
type Level2Support struct {
	nextHandler SupportHandler
}

func (l *Level2Support) SetNextHandler(handler SupportHandler) {
	l.nextHandler = handler
}

func (l *Level2Support) HandleRequest(request string) string {
	if request == "advanced" {
		return "Level 2 Support: Issue resolved at advanced level."
	} else if l.nextHandler != nil {
		return l.nextHandler.HandleRequest(request)
	}
	return ""
}

// Level3Support concrete implementation for Level 3 support
type Level3Support struct{}

func (l *Level3Support) SetNextHandler(handler SupportHandler) {
	// Level 3 support does not have a next handler
}

func (l *Level3Support) HandleRequest(request string) string {
	if request == "bug" {
		return "Level 3 Support: Issue resolved at development level."
	}
	return "Level 3 Support: Unable to resolve the issue."
}

// main function to simulate client code
func main() {
	level1 := &Level1Support{}
	level2 := &Level2Support{}
	level3 := &Level3Support{}

	// Chain the handlers
	level1.SetNextHandler(level2)
	level2.SetNextHandler(level3)

	// Simulate support requests
	request1 := "basic"
	request2 := "advanced"
	request3 := "bug"

	fmt.Println(level1.HandleRequest(request1)) // Output: Level 1 Support: Issue resolved at basic level.
	fmt.Println(level1.HandleRequest(request2)) // Output: Level 2 Support: Issue resolved at advanced level.
	fmt.Println(level1.HandleRequest(request3)) // Output: Level 3 Support: Issue resolved at development level.
}

/**
 * This code demonstrates how the Chain of Responsibility pattern can be used in a support
 * ticket system. The SupportHandler interface defines the contract for handling support
 * requests, and concrete implementations (Level1Support, Level2Support, and Level3Support)
 * represent different levels of support. Each handler decides whether it can handle a
 * request or should pass it to the next handler in the chain.
 */