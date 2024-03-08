using System;
using System.Collections.Generic;

// Authentication service
class AuthenticationService {
  public bool Login(string username, string password) {
    // Authentication logic here
    return true; // Dummy implementation
  }

  public void Logout() {
    // Logout logic here
  }
}

// Data service
class DataService {
  public List<object> FetchData() {
    // Data retrieval logic here
    return new List<object>(); // Dummy implementation
  }
}

/**
 * - The `CombinedController` class is responsible for both user authentication and data retrieval.
 * - The loginUser method not only handles authentication but also retrieves user data directly
 *   from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
 * - This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
 */
class CombinedController {
  private AuthenticationService authService;
  private DataService dataService;

  public CombinedController(AuthenticationService authService, DataService dataService) {
    this.authService = authService;
    this.dataService = dataService;
  }

  public bool LoginUser(string username, string password) {
    // Authentication logic here
    bool isAuthenticated = authService.Login(username, password);
    if (isAuthenticated) {
      // Retrieve user data (mixing concerns)
      var userData = dataService.FetchData();
      Console.WriteLine(userData);
    }
    return isAuthenticated;
  }

  public void LogoutUser() {
    // Logout logic here
    authService.Logout();
  }
}

class Program {
    static void Main(string[] args) {
        // Usage
        var authService = new AuthenticationService();
        var dataService = new DataService();

        var combinedController = new CombinedController(authService, dataService);

        // Simulate user login/logout
        combinedController.LoginUser("username", "password");
        combinedController.LogoutUser();
    }
}