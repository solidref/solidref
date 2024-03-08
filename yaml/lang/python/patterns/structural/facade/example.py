class FlightBookingSystem:
    def book_flight(self, origin, destination):
        return f"Flight booked from {origin} to {destination}"

class HotelBookingSystem:
    def book_hotel(self, location, check_in_date, check_out_date):
        return f"Hotel booked at {location} from {check_in_date.strftime('%Y-%m-%d')} to {check_out_date.strftime('%Y-%m-%d')}"

class CarRentalSystem:
    def rent_car(self, location, start_date, end_date):
        return f"Car rented at {location} from {start_date.strftime('%Y-%m-%d')} to {end_date.strftime('%Y-%m-%d')}"

class TravelFacade:
    def __init__(self):
        self.flight_booking_system = FlightBookingSystem()
        self.hotel_booking_system = HotelBookingSystem()
        self.car_rental_system = CarRentalSystem()

    def book_travel(self, origin, destination, location, check_in_date, check_out_date, start_date, end_date):
        flight_details = self.flight_booking_system.book_flight(origin, destination)
        hotel_details = self.hotel_booking_system.book_hotel(location, check_in_date, check_out_date)
        car_details = self.car_rental_system.rent_car(location, start_date, end_date)

        return f"{flight_details}\n{hotel_details}\n{car_details}"

from datetime import datetime

# Client code
travel_facade = TravelFacade()
booking_details = travel_facade.book_travel(
    'New York', 'Los Angeles', 'Hilton', 
    datetime.strptime('2023-12-15', '%Y-%m-%d'), 
    datetime.strptime('2023-12-20', '%Y-%m-%d'), 
    datetime.strptime('2023-12-15', '%Y-%m-%d'), 
    datetime.strptime('2023-12-20', '%Y-%m-%d')
)
print(booking_details)