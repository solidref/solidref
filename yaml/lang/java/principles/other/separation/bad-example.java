// Authentication Service
public class AuthenticationService {
  public boolean login(String username, String password) {
    // Authentication logic here
    return true; // Dummy implementation
  }

  public void logout() {
    // Logout logic here
  }
}

// Data Service
public class DataService {
  public Object[] fetchData() {
    // Data retrieval logic here
    return new Object[]{}; // Dummy implementation
  }
}

/**
 * - The `CombinedController` class is responsible for both user authentication and data retrieval.
 * - The loginUser method not only handles authentication but also retrieves user data directly
 *   from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
 * - This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
 */

public class CombinedController {
  private AuthenticationService authService;
  private DataService dataService;

  public CombinedController(AuthenticationService authService, DataService dataService) {
    this.authService = authService;
    this.dataService = dataService;
  }

  public boolean loginUser(String username, String password) {
    // Authentication logic here
    boolean isAuthenticated = this.authService.login(username, password);
    if (isAuthenticated) {
      // Retrieve user data (mixing concerns)
      Object[] userData = this.dataService.fetchData();
      System.out.println(userData);
    }
    return isAuthenticated;
  }

  public void logoutUser() {
    // Logout logic here
    this.authService.logout();
  }
}

public class Main {
  public static void main(String[] args) {
    AuthenticationService authService = new AuthenticationService();
    DataService dataService = new DataService();

    CombinedController combinedController = new CombinedController(authService, dataService);

    // Simulate user login/logout
    combinedController.loginUser("username", "password");
    combinedController.logoutUser();
  }
}

// Usage
const authService = new AuthenticationService();
const dataService = new DataService();

const combinedController = new CombinedController(authService, dataService);

// Simulate user login/logout
combinedController.loginUser("username", "password");
combinedController.logoutUser();
