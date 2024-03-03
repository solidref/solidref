#include <iostream>
#include <string>
#include <vector>

// Authentication service
class AuthenticationService {
public:
  bool login(const std::string &username, const std::string &password) {
    // Authentication logic here
    return true; // Dummy implementation
  }

  void logout() {
    // Logout logic here
  }
};

// Data service
class DataService {
public:
  std::vector<int>
  fetchData() { // Using std::vector<int> as a placeholder for any data type
    // Data retrieval logic here
    return {}; // Dummy implementation
  }
};

// User controller
class UserController {
private:
  AuthenticationService &authService;

public:
  UserController(AuthenticationService &authService)
      : authService(authService) {}

  bool loginUser(const std::string &username, const std::string &password) {
    return authService.login(username, password);
  }

  void logoutUser() { authService.logout(); }
};

// Data controller
class DataController {
private:
  DataService &dataService;

public:
  DataController(DataService &dataService) : dataService(dataService) {}

  std::vector<int> getData() { return dataService.fetchData(); }
};

// Example usage
int main() {
  AuthenticationService authService;
  DataService dataService;

  UserController userController(authService);
  DataController dataController(dataService);

  // Simulate user login/logout
  userController.loginUser("username", "password");
  userController.logoutUser();

  // Retrieve data
  auto data = dataController.getData();
  std::cout << "Data fetched. Size: " << data.size() << std::endl;

  return 0;
}
