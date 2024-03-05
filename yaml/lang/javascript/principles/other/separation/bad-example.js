// Authentication service
class AuthenticationService {
  login(username, password) {
    // Authentication logic here
    return true; // Dummy implementation
  }

  logout() {
    // Logout logic here
  }
}

// Data service
class DataService {
  fetchData() {
    // Data retrieval logic here
    return []; // Dummy implementation
  }
}

/**
 * - The `CombinedController` class is responsible for both user authentication and data retrieval.
 * - The loginUser method not only handles authentication but also retrieves user data directly
 *   from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
 * - This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
 */
class CombinedController {
  constructor(authService, dataService) {
    this.authService = authService;
    this.dataService = dataService;
  }

  loginUser(username, password) {
    // Authentication logic here
    const isAuthenticated = this.authService.login(username, password);
    if (isAuthenticated) {
      // Retrieve user data (mixing concerns)
      const userData = this.dataService.fetchData();
      console.log(userData);
    }
    return isAuthenticated;
  }

  logoutUser() {
    // Logout logic here
    this.authService.logout();
  }
}

// Usage
const authService = new AuthenticationService();
const dataService = new DataService();

const combinedController = new CombinedController(authService, dataService);

// Simulate user login/logout
combinedController.loginUser("username", "password");
combinedController.logoutUser();
