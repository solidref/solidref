package main

import (
	"fmt"
	"time"
)

// FlightBookingSystem represents the subsystem for flight booking.
type FlightBookingSystem struct{}

func (fbs *FlightBookingSystem) BookFlight(origin string, destination string) string {
	return fmt.Sprintf("Flight booked from %s to %s", origin, destination)
}

// HotelBookingSystem represents the subsystem for hotel booking.
type HotelBookingSystem struct{}

func (hbs *HotelBookingSystem) BookHotel(location string, checkInDate time.Time, checkOutDate time.Time) string {
	return fmt.Sprintf("Hotel booked at %s from %s to %s", location, checkInDate.Format("2006-01-02"), checkOutDate.Format("2006-01-02"))
}

// CarRentalSystem represents the subsystem for car rental.
type CarRentalSystem struct{}

func (crs *CarRentalSystem) RentCar(location string, startDate time.Time, endDate time.Time) string {
	return fmt.Sprintf("Car rented at %s from %s to %s", location, startDate.Format("2006-01-02"), endDate.Format("2006-01-02"))
}

// TravelFacade provides a simplified interface for booking a complete travel package.
type TravelFacade struct {
	flightBookingSystem FlightBookingSystem
	hotelBookingSystem  HotelBookingSystem
	carRentalSystem     CarRentalSystem
}

func NewTravelFacade() *TravelFacade {
	return &TravelFacade{
		flightBookingSystem: FlightBookingSystem{},
		hotelBookingSystem:  HotelBookingSystem{},
		carRentalSystem:     CarRentalSystem{},
	}
}

func (tf *TravelFacade) BookTravel(origin, destination, location string, checkInDate, checkOutDate, startDate, endDate time.Time) string {
	flightDetails := tf.flightBookingSystem.BookFlight(origin, destination)
	hotelDetails := tf.hotelBookingSystem.BookHotel(location, checkInDate, checkOutDate)
	carDetails := tf.carRentalSystem.RentCar(location, startDate, endDate)

	return fmt.Sprintf("%s\n%s\n%s", flightDetails, hotelDetails, carDetails)
}

// main function to simulate client code
func main() {
	travelFacade := NewTravelFacade()
	bookingDetails := travelFacade.BookTravel("New York", "Los Angeles", "Hilton", time.Date(2023, 12, 15, 0, 0, 0, 0, time.UTC), time.Date(2023, 12, 20, 0, 0, 0, 0, time.UTC), time.Date(2023, 12, 15, 0, 0, 0, 0, time.UTC), time.Date(2023, 12, 20, 0, 0, 0, 0, time.UTC))
	fmt.Println(bookingDetails)
}

/*
The FlightBookingSystem, HotelBookingSystem, and CarRentalSystem structs represent the subsystems of flight booking, hotel booking, and car rental, respectively.

The TravelFacade struct provides a simplified interface for booking a complete travel package. It encapsulates the complexities of interacting with the subsystems.

The main function simulates client code that interacts with the TravelFacade to book a complete travel package without directly interacting with the subsystems.
*/