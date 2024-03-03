// Authentication service
class AuthenticationService {
  login(username: string, password: string): boolean {
    // Authentication logic here
    return true; // Dummy implementation
  }

  logout(): void {
    // Logout logic here
  }
}

// Data service
class DataService {
  fetchData(): any[] {
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
  private authService: AuthenticationService;
  private dataService: DataService;

  constructor(authService: AuthenticationService, dataService: DataService) {
    this.authService = authService;
    this.dataService = dataService;
  }

  loginUser(username: string, password: string): boolean {
    // Authentication logic here
    const isAuthenticated = this.authService.login(username, password);
    if (isAuthenticated) {
      // Retrieve user data (mixing concerns)
      const userData = this.dataService.fetchData();
      console.log(userData);
    }
    return isAuthenticated;
  }

  logoutUser(): void {
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
