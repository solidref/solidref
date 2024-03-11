#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Helper function to format date as string
char* formatDate(const time_t date) {
    static char buffer[11];
    strftime(buffer, sizeof(buffer), "%Y-%m-%d", localtime(&date));
    return buffer;
}

// Subsystem: Flight Booking
typedef struct {
    char* (*bookFlight)(const char* origin, const char* destination);
} FlightBookingSystem;

char* bookFlight(const char* origin, const char* destination) {
    static char details[100];
    snprintf(details, sizeof(details), "Flight booked from %s to %s", origin, destination);
    return details;
}

// Subsystem: Hotel Booking
typedef struct {
    char* (*bookHotel)(const char* location, const time_t checkInDate, const time_t checkOutDate);
} HotelBookingSystem;

char* bookHotel(const char* location, const time_t checkInDate, const time_t checkOutDate) {
    static char details[100];
    snprintf(details, sizeof(details), "Hotel booked at %s from %s to %s", location, formatDate(checkInDate), formatDate(checkOutDate));
    return details;
}

// Subsystem: Car Rental
typedef struct {
    char* (*rentCar)(const char* location, const time_t startDate, const time_t endDate);
} CarRentalSystem;

char* rentCar(const char* location, const time_t startDate, const time_t endDate) {
    static char details[100];
    snprintf(details, sizeof(details), "Car rented at %s from %s to %s", location, formatDate(startDate), formatDate(endDate));
    return details;
}

// Facade: TravelFacade
typedef struct {
    FlightBookingSystem flightBooking;
    HotelBookingSystem hotelBooking;
    CarRentalSystem carRental;
} TravelFacade;

TravelFacade createTravelFacade() {
    TravelFacade facade = {
        .flightBooking = { .bookFlight = bookFlight },
        .hotelBooking = { .bookHotel = bookHotel },
        .carRental = { .rentCar = rentCar }
    };
    return facade;
}

char* bookTravel(TravelFacade* facade, const char* origin, const char* destination, const char* location, const time_t checkInDate, const time_t checkOutDate, const time_t startDate, const time_t endDate) {
    static char details[300];
    char* flightDetails = facade->flightBooking.bookFlight(origin, destination);
    char* hotelDetails = facade->hotelBooking.bookHotel(location, checkInDate, checkOutDate);
    char* carDetails = facade->carRental.rentCar(location, startDate, endDate);

    snprintf(details, sizeof(details), "%s\n%s\n%s", flightDetails, hotelDetails, carDetails);
    return details;
}

int main() {
    // Setup travel dates
    struct tm checkIn = { .tm_year = 2023 - 1900, .tm_mon = 12 - 1, .tm_mday = 15 };
    struct tm checkOut = { .tm_year = 2023 - 1900, .tm_mon = 12 - 1, .tm_mday = 20 };
    time_t checkInDate = mktime(&checkIn);
    time_t checkOutDate = mktime(&checkOut);

    // Initialize facade and book travel
    TravelFacade travelFacade = createTravelFacade();
    char* bookingDetails = bookTravel(&travelFacade, "New York", "Los Angeles", "Hilton", checkInDate, checkOutDate, checkInDate, checkOutDate);

    // Print booking details
    printf("%s\n", bookingDetails);

    return 0;
}

/**
 * The FlightBookingSystem, HotelBookingSystem, and CarRentalSystem structs represent the
 * subsystems of flight booking, hotel booking, and car rental, respectively.
 *
 * The TravelFacade struct provides a simplified interface for booking a complete travel
 * package. It encapsulates the complexities of interacting with the subsystems.
 *
 * The client code interacts with the TravelFacade to book a complete travel package without
 * directly interacting with the subsystems.
 */