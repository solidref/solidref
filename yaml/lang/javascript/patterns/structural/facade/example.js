// Subsystem: Flight Booking
class FlightBookingSystem {
  bookFlight(origin, destination) {
    return `Flight booked from ${origin} to ${destination}`;
  }
}

// Subsystem: Hotel Booking
class HotelBookingSystem {
  bookHotel(location, checkInDate, checkOutDate) {
    return `Hotel booked at ${location} from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()}`;
  }
}

// Subsystem: Car Rental
class CarRentalSystem {
  rentCar(location, startDate, endDate) {
    return `Car rented at ${location} from ${startDate.toDateString()} to ${endDate.toDateString()}`;
  }
}

// Facade: TravelFacade
class TravelFacade {
  constructor() {
    this.flightBookingSystem = new FlightBookingSystem();
    this.hotelBookingSystem = new HotelBookingSystem();
    this.carRentalSystem = new CarRentalSystem();
  }

  bookTravel(origin, destination, location, checkInDate, checkOutDate, startDate, endDate) {
    const flightDetails = this.flightBookingSystem.bookFlight(origin, destination);
    const hotelDetails = this.hotelBookingSystem.bookHotel(location, checkInDate, checkOutDate);
    const carDetails = this.carRentalSystem.rentCar(location, startDate, endDate);

    return `${flightDetails}\n${hotelDetails}\n${carDetails}`;
  }
}

// Client code
const travelFacade = new TravelFacade();
const bookingDetails = travelFacade.bookTravel('New York', 'Los Angeles', 'Hilton', new Date('2023-12-15'), new Date('2023-12-20'), new Date('2023-12-15'), new Date('2023-12-20'));
console.log(bookingDetails);

/**
 * The FlightBookingSystem, HotelBookingSystem, and CarRentalSystem classes represent the
 * subsystems of flight booking, hotel booking, and car rental, respectively.
 *
 * The TravelFacade class provides a simplified interface for booking a complete travel
 * package. It encapsulates the complexities of interacting with the subsystems.
 *
 * The client code interacts with the TravelFacade to book a complete travel package without
 * directly interacting with the subsystems.
 */
