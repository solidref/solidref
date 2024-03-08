class AuthenticationService:
    def login(self, username: str, password: str) -> bool:
        # Authentication logic here
        return True  # Dummy implementation

    def logout(self) -> None:
        # Logout logic here
        pass

class DataService:
    def fetch_data(self) -> list:
        # Data retrieval logic here
        return []  # Dummy implementation

#
# - The `CombinedController` class is responsible for both user authentication and data retrieval.
# - The loginUser method not only handles authentication but also retrieves user data directly
#   from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
# - This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
#

class CombinedController:
    def __init__(self, auth_service: AuthenticationService, data_service: DataService):
        self.auth_service = auth_service
        self.data_service = data_service

    def login_user(self, username: str, password: str) -> bool:
        # Authentication logic here
        is_authenticated = self.auth_service.login(username, password)
        if is_authenticated:
            # Retrieve user data (mixing concerns)
            user_data = self.data_service.fetch_data()
            print(user_data)
        return is_authenticated

    def logout_user(self) -> None:
        # Logout logic here
        self.auth_service.logout()

# Usage
auth_service = AuthenticationService()
data_service = DataService()

combined_controller = CombinedController(auth_service, data_service)

# Simulate user login/logout
combined_controller.login_user("username", "password")
combined_controller.logout_user()
