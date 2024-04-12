using System;

// Subsystem: Flight Booking
class FlightBookingSystem
{
    public string BookFlight(string origin, string destination)
    {
        return $"Flight booked from {origin} to {destination}";
    }
}

// Subsystem: Hotel Booking
class HotelBookingSystem
{
    public string BookHotel(string location, DateTime checkInDate, DateTime checkOutDate)
    {
        return $"Hotel booked at {location} from {checkInDate.ToLongDateString()} to {checkOutDate.ToLongDateString()}";
    }
}

// Subsystem: Car Rental
class CarRentalSystem
{
    public string RentCar(string location, DateTime startDate, DateTime endDate)
    {
        return $"Car rented at {location} from {startDate.ToLongDateString()} to {endDate.ToLongDateString()}";
    }
}

// Facade: TravelFacade
class TravelFacade
{
    private FlightBookingSystem flightBookingSystem;
    private HotelBookingSystem hotelBookingSystem;
    private CarRentalSystem carRentalSystem;

    public TravelFacade()
    {
        flightBookingSystem = new FlightBookingSystem();
        hotelBookingSystem = new HotelBookingSystem();
        carRentalSystem = new CarRentalSystem();
    }

    public string BookTravel(string origin, string destination, string location, DateTime checkInDate, DateTime checkOutDate, DateTime startDate, DateTime endDate)
    {
        var flightDetails = flightBookingSystem.BookFlight(origin, destination);
        var hotelDetails = hotelBookingSystem.BookHotel(location, checkInDate, checkOutDate);
        var carDetails = carRentalSystem.RentCar(location, startDate, endDate);

        return $"{flightDetails}\n{hotelDetails}\n{carDetails}";
    }
}

// Client code
class Program
{
    static void Main(string[] args)
    {
        TravelFacade travelFacade = new TravelFacade();
        var bookingDetails = travelFacade.BookTravel("New York", "Los Angeles", "Hilton", new DateTime(2023, 12, 15), new DateTime(2023, 12, 20), new DateTime(2023, 12, 15), new DateTime(2023, 12, 20));
        Console.WriteLine(bookingDetails);
    }
}

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