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
 * - `AuthenticationService` and `DataService` are responsible for handling authentication and data retrieval, respectively.
 * - `UserController` and `DataController` serve as intermediaries between the HTTP layer (not shown) and the services.
 * - Each component has a single responsibility, promoting modularity, testability, and maintainability.
 *
 */

// User controller
class UserController {
  private authService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  loginUser(username: string, password: string): boolean {
    return this.authService.login(username, password);
  }

  logoutUser(): void {
    this.authService.logout();
  }
}

// Data controller
class DataController {
  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  getData(): any[] {
    return this.dataService.fetchData();
  }
}

// Usage
const authService = new AuthenticationService();
const dataService = new DataService();

const userController = new UserController(authService);
const dataController = new DataController(dataService);

// Simulate user login/logout
userController.loginUser("username", "password");
userController.logoutUser();

// Retrieve data
const data = dataController.getData();
console.log(data);
