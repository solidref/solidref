using System;
using System.Collections.Generic;

// Authentication service
class AuthenticationService
{
    public bool Login(string username, string password)
    {
        // Authentication logic here
        return true; // Dummy implementation
    }

    public void Logout()
    {
        // Logout logic here
    }
}

// Data service
class DataService
{
    public List<object> FetchData()
    {
        // Data retrieval logic here
        return new List<object>(); // Dummy implementation
    }
}

// UserController and DataController serve as intermediaries between the HTTP layer (not shown) and the services.
// Each component has a single responsibility, promoting modularity, testability, and maintainability.

// User controller
class UserController
{
    private AuthenticationService authService;

    public UserController(AuthenticationService authService)
    {
        this.authService = authService;
    }

    public bool LoginUser(string username, string password)
    {
        return this.authService.Login(username, password);
    }

    public void LogoutUser()
    {
        this.authService.Logout();
    }
}

// Data controller
class DataController
{
    private DataService dataService;

    public DataController(DataService dataService)
    {
        this.dataService = dataService;
    }

    public List<object> GetData()
    {
        return this.dataService.FetchData();
    }
}

class Program
{
    static void Main(string[] args)
    {
        AuthenticationService authService = new AuthenticationService();
        DataService dataService = new DataService();

        UserController userController = new UserController(authService);
        DataController dataController = new DataController(dataService);

        // Simulate user login/logout
        userController.LoginUser("username", "password");
        userController.LogoutUser();

        // Retrieve data
        var data = dataController.GetData();
        Console.WriteLine(data);
    }
}