using System;

// Subsystem: Flight Booking
public class FlightBookingSystem {
  public string BookFlight(string origin, string destination) {
    return $"Flight booked from {origin} to {destination}";
  }
}

// Subsystem: Hotel Booking
public class HotelBookingSystem {
  public string BookHotel(string location, DateTime checkInDate, DateTime checkOutDate) {
    return $"Hotel booked at {location} from {checkInDate.ToLongDateString()} to {checkOutDate.ToLongDateString()}";
  }
}

// Subsystem: Car Rental
public class CarRentalSystem {
  public string RentCar(string location, DateTime startDate, DateTime endDate) {
    return $"Car rented at {location} from {startDate.ToLongDateString()} to {endDate.ToLongDateString()}";
  }
}

// Facade: TravelFacade
public class TravelFacade {
  private FlightBookingSystem _flightBookingSystem;
  private HotelBookingSystem _hotelBookingSystem;
  private CarRentalSystem _carRentalSystem;

  public TravelFacade() {
    _flightBookingSystem = new FlightBookingSystem();
    _hotelBookingSystem = new HotelBookingSystem();
    _carRentalSystem = new CarRentalSystem();
  }

  public string BookTravel(string origin, string destination, string location, DateTime checkInDate, DateTime checkOutDate, DateTime startDate, DateTime endDate) {
    var flightDetails = _flightBookingSystem.BookFlight(origin, destination);
    var hotelDetails = _hotelBookingSystem.BookHotel(location, checkInDate, checkOutDate);
    var carDetails = _carRentalSystem.RentCar(location, startDate, endDate);

    return $"{flightDetails}\n{hotelDetails}\n{carDetails}";
  }
}

// Client code
class Program {
  static void Main(string[] args) {
    var travelFacade = new TravelFacade();
    var bookingDetails = travelFacade.BookTravel("New York", "Los Angeles", "Hilton", new DateTime(2023, 12, 15), new DateTime(2023, 12, 20), new DateTime(2023, 12, 15), new DateTime(2023, 12, 20));
    Console.WriteLine(bookingDetails);
  }
}

/*
 * The FlightBookingSystem, HotelBookingSystem, and CarRentalSystem classes represent the
 * subsystems of flight booking, hotel booking, and car rental, respectively.
 *
 * The TravelFacade class provides a simplified interface for booking a complete travel
 * package. It encapsulates the complexities of interacting with the subsystems.
 *
 * The client code interacts with the TravelFacade to book a complete travel package without
 * directly interacting with the subsystems.
 */