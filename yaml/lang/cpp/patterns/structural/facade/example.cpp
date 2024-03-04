// Subsystem: Flight Booking
class FlightBookingSystem {
  bookFlight(origin: string, destination: string): string {
    return `Flight booked from ${origin} to ${destination}`;
  }
}

// Subsystem: Hotel Booking
class HotelBookingSystem {
  bookHotel(location: string, checkInDate: Date, checkOutDate: Date): string {
    return `Hotel booked at ${location} from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()}`;
  }
}

// Subsystem: Car Rental
class CarRentalSystem {
  rentCar(location: string, startDate: Date, endDate: Date): string {
    return `Car rented at ${location} from ${startDate.toDateString()} to ${endDate.toDateString()}`;
  }
}

// Facade: TravelFacade
class TravelFacade {
  private flightBookingSystem: FlightBookingSystem;
  private hotelBookingSystem: HotelBookingSystem;
  private carRentalSystem: CarRentalSystem;

  constructor() {
    this.flightBookingSystem = new FlightBookingSystem();
    this.hotelBookingSystem = new HotelBookingSystem();
    this.carRentalSystem = new CarRentalSystem();
  }

  bookTravel(origin: string, destination: string, location: string, checkInDate: Date, checkOutDate: Date, startDate: Date, endDate: Date): string {
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
