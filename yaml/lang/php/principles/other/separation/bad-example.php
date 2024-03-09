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
        return []; // Dummy implementation
    }
}

/**
 * The `CombinedController` class is responsible for both user authentication and data retrieval.
 * The loginUser method not only handles authentication but also retrieves user data directly
 * from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
 * This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
 */
class CombinedController {
    private $authService;
    private $dataService;

    public function __construct(AuthenticationService $authService, DataService $dataService) {
        $this->authService = $authService;
        $this->dataService = $dataService;
    }

    public function loginUser($username, $password) {
        // Authentication logic here
        $isAuthenticated = $this->authService->login($username, $password);
        if ($isAuthenticated) {
            // Retrieve user data (mixing concerns)
            $userData = $this->dataService->fetchData();
            echo print_r($userData, true);
        }
        return $isAuthenticated;
    }

    public function logoutUser() {
        // Logout logic here
        $this->authService->logout();
    }
}

// Usage
$authService = new AuthenticationService();
$dataService = new DataService();

$combinedController = new CombinedController($authService, $dataService);

// Simulate user login/logout
$combinedController->loginUser("username", "password");
$combinedController->logoutUser();

```