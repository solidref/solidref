```php
<?php
// Authentication service
class AuthenticationService {
  public function login($username, $password) {
    // Authentication logic here
    return true; // Dummy implementation
  }

  public function logout() {
    // Logout logic here
  }
}

// Data service
class DataService {
  public function fetchData() {
    // Data retrieval logic here
    return array(); // Dummy implementation
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
  private $authService;

  public function __construct(AuthenticationService $authService) {
    $this->authService = $authService;
  }

  public function loginUser($username, $password) {
    return $this->authService->login($username, $password);
  }

  public function logoutUser() {
    $this->authService->logout();
  }
}

// Data controller
class DataController {
  private $dataService;

  public function __construct(DataService $dataService) {
    $this->dataService = $dataService;
  }

  public function getData() {
    return $this->dataService->fetchData();
  }
}

// Usage
$authService = new AuthenticationService();
$dataService = new DataService();

$userController = new UserController($authService);
$dataController = new DataController($dataService);

// Simulate user login/logout
$userController->loginUser("username", "password");
$userController->logoutUser();

// Retrieve data
$data = $dataController->getData();
echo "<pre>";
print_r($data);
echo "</pre>";
```