struct FlightBookingSystem;

impl FlightBookingSystem {
    fn book_flight(&self, origin: &str, destination: &str) -> String {
        format!("Flight booked from {} to {}", origin, destination)
    }
}

struct HotelBookingSystem;

impl HotelBookingSystem {
    fn book_hotel(&self, location: &str, check_in_date: &str, check_out_date: &str) -> String {
        format!("Hotel booked at {} from {} to {}", location, check_in_date, check_out_date)
    }
}

struct CarRentalSystem;

impl CarRentalSystem {
    fn rent_car(&self, location: &str, start_date: &str, end_date: &str) -> String {
        format!("Car rented at {} from {} to {}", location, start_date, end_date)
    }
}

struct TravelFacade {
    flight_booking_system: FlightBookingSystem,
    hotel_booking_system: HotelBookingSystem,
    car_rental_system: CarRentalSystem,
}

impl TravelFacade {
    fn new() -> Self {
        TravelFacade {
            flight_booking_system: FlightBookingSystem,
            hotel_booking_system: HotelBookingSystem,
            car_rental_system: CarRentalSystem,
        }
    }

    fn book_travel(&self, origin: &str, destination: &str, location: &str, check_in_date: &str, check_out_date: &str, start_date: &str, end_date: &str) -> String {
        let flight_details = self.flight_booking_system.book_flight(origin, destination);
        let hotel_details = self.hotel_booking_system.book_hotel(location, check_in_date, check_out_date);
        let car_details = self.car_rental_system.rent_car(location, start_date, end_date);

        format!("{}\n{}\n{}", flight_details, hotel_details, car_details)
    }
}

fn main() {
    let travel_facade = TravelFacade::new();
    let booking_details = travel_facade.book_travel("New York", "Los Angeles", "Hilton", "2023-12-15", "2023-12-20", "2023-12-15", "2023-12-20");
    println!("{}", booking_details);
}

// The FlightBookingSystem, HotelBookingSystem, and CarRentalSystem structures represent the
// subsystems of flight booking, hotel booking, and car rental, respectively.
//
// The TravelFacade struct provides a simplified interface for booking a complete travel
// package. It encapsulates the complexities of interacting with the subsystems.
//
// The client code interacts with the TravelFacade to book a complete travel package without
// directly interacting with the subsystems.
