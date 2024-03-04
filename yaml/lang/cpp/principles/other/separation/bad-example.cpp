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

// CombinedController class is responsible for both user authentication and data
// retrieval
class CombinedController {
private:
  AuthenticationService &authService;
  DataService &dataService;

public:
  CombinedController(AuthenticationService &authService,
                     DataService &dataService)
      : authService(authService), dataService(dataService) {}

  bool loginUser(const std::string &username, const std::string &password) {
    // Authentication logic here
    const bool isAuthenticated = authService.login(username, password);
    if (isAuthenticated) {
      // Retrieve user data (mixing concerns)
      auto userData = dataService.fetchData();
      std::cout << "User data fetched. Size: " << userData.size() << std::endl;
    }
    return isAuthenticated;
  }

  void logoutUser() {
    // Logout logic here
    authService.logout();
  }
};

// Example usage
int main() {
  AuthenticationService authService;
  DataService dataService;

  CombinedController combinedController(authService, dataService);

  // Simulate user login/logout
  combinedController.loginUser("username", "password");
  combinedController.logoutUser();

  return 0;
}

/**
 * The usage of std::vector<int> as a placeholder for fetched data illustrates
 * how to work with collections in C++, though in a real-world scenario, the
 * type and contents of the collection would depend on the specific
 * application's requirements.
 */
