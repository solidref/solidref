package main

import (
	"fmt"
	"sync"
	"time"
)

// Logger defines the structure for logging messages.
// It has a private logHistory slice to store log messages.
type Logger struct {
	logHistory []string
}

var instance *Logger
var once sync.Once

// GetInstance returns the singleton instance of the Logger.
// Utilizes sync.Once to ensure that the Logger is instantiated only once.
func GetInstance() *Logger {
	once.Do(func() {
		instance = &Logger{}
	})
	return instance
}

// Log logs a message with a timestamp. It stores the message in logHistory and prints it.
func (l *Logger) Log(message string) {
	timestamp := time.Now().Format(time.RFC3339)
	logEntry := fmt.Sprintf("[%s] %s", timestamp, message)
	l.logHistory = append(l.logHistory, logEntry)
	fmt.Println(logEntry)
}

// GetLogHistory returns the log history.
func (l *Logger) GetLogHistory() []string {
	return l.logHistory
}

func main() {
	logger1 := GetInstance()
	logger2 := GetInstance()

	fmt.Println(logger1 == logger2) // Output: true, both references point to the same instance

	logger1.Log("User logged in")
	logger2.Log("Data saved to database")

	fmt.Println(logger1.GetLogHistory())

	// The Logger struct holds a singleton instance of the logger, ensured by the sync.Once in GetInstance().
	// The constructor equivalent (GetInstance method) checks if an instance already exists; if not, it creates one.
	// This ensures a single instance of Logger is created and used throughout the application.
	// The Log method allows adding messages with the current timestamp to the logHistory slice and prints them.
	// The GetLogHistory method returns the slice containing all the log entries.
	// In the main function, logger1 and logger2 demonstrate that both variables reference the same Logger instance.
	// Logging messages using either logger1 or logger2 and retrieving the log history show consistent and expected behavior.
}