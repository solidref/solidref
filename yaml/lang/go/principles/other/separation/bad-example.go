package main

import "fmt"

// AuthenticationService handles user authentication
type AuthenticationService struct{}

func (as *AuthenticationService) Login(username, password string) bool {
    // Authentication logic here
    return true // Dummy implementation
}

func (as *AuthenticationService) Logout() {
    // Logout logic here
}

// DataService handles data retrieval
type DataService struct{}

func (ds *DataService) FetchData() []interface{} {
    // Data retrieval logic here
    return make([]interface{}, 0) // Dummy implementation
}

// Separated to respect the Single Responsibility Principle
// AuthenticationController handles user authentication
type AuthenticationController struct {
    authService *AuthenticationService
}

func NewAuthenticationController(authService *AuthenticationService) *AuthenticationController {
    return &AuthenticationController{authService: authService}
}

func (ac *AuthenticationController) LoginUser(username, password string) bool {
    // Authentication logic here
    return ac.authService.Login(username, password)
}

func (ac *AuthenticationController) LogoutUser() {
    // Logout logic here
    ac.authService.Logout()
}

// DataController handles data retrieval
type DataController struct {
    dataService *DataService
}

func NewDataController(dataService *DataService) *DataController {
    return &DataController{dataService: dataService}
}

func (dc *DataController) FetchUserdata(isAuthenticated bool) {
    if isAuthenticated {
        // Retrieve user data
        userData := dc.dataService.FetchData()
        fmt.Println(userData)
    }
}

func main() {
    authService := &AuthenticationService{}
    dataService := &DataService{}

    authController := NewAuthenticationController(authService)
    dataController := NewDataController(dataService)

    // Simulate user login/logout
    isAuthenticated := authController.LoginUser("username", "password")
    dataController.FetchUserdata(isAuthenticated)
    authController.LogoutUser()
}