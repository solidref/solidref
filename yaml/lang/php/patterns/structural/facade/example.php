```php
<?php

// Subsystem: Flight Booking
class FlightBookingSystem {
  public function bookFlight($origin, $destination) {
    return "Flight booked from $origin to $destination";
  }
}

// Subsystem: Hotel Booking
class HotelBookingSystem {
  public function bookHotel($location, $checkInDate, $checkOutDate) {
    return "Hotel booked at $location from " . $checkInDate->format('Y-m-d') . " to " . $checkOutDate->format('Y-m-d');
  }
}

// Subsystem: Car Rental
class CarRentalSystem {
  public function rentCar($location, $startDate, $endDate) {
    return "Car rented at $location from " . $startDate->format('Y-m-d') . " to " . $endDate->format('Y-m-d');
  }
}

// Facade: TravelFacade
class TravelFacade {
  private $flightBookingSystem;
  private $hotelBookingSystem;
  private $carRentalSystem;

  public function __construct() {
    $this->flightBookingSystem = new FlightBookingSystem();
    $this->hotelBookingSystem = new HotelBookingSystem();
    $this->carRentalSystem = new CarRentalSystem();
  }

  public function bookTravel($origin, $destination, $location, $checkInDate, $checkOutDate, $startDate, $endDate) {
    $flightDetails = $this->flightBookingSystem->bookFlight($origin, $destination);
    $hotelDetails = $this->hotelBookingSystem->bookHotel($location, $checkInDate, $checkOutDate);
    $carDetails = $this->carRentalSystem->rentCar($location, $startDate, $endDate);

    return $flightDetails . "\n" . $hotelDetails . "\n" . $carDetails;
  }
}

// Client code
$travelFacade = new TravelFacade();
$bookingDetails = $travelFacade->bookTravel('New York', 'Los Angeles', 'Hilton', new DateTime('2023-12-15'), new DateTime('2023-12-20'), new DateTime('2023-12-15'), new DateTime('2023-12-20'));
echo $bookingDetails;

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
```