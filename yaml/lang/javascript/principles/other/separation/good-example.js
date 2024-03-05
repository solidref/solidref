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
 * - `AuthenticationService` and `DataService` are responsible for handling authentication and data retrieval, respectively.
 * - `UserController` and `DataController` serve as intermediaries between the HTTP layer (not shown) and the services.
 * - Each component has a single responsibility, promoting modularity, testability, and maintainability.
 *
 */

// User controller
class UserController {
  constructor(authService) {
    this.authService = authService;
  }

  loginUser(username, password) {
    return this.authService.login(username, password);
  }

  logoutUser() {
    this.authService.logout();
  }
}

// Data controller
class DataController {
  constructor(dataService) {
    this.dataService = dataService;
  }

  getData() {
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
