using System;
using System.Collections.Generic;

// Authentication service
public class AuthenticationService
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
public class DataService
{
    public List<object> FetchData()
    {
        // Data retrieval logic here
        return new List<object>(); // Dummy implementation
    }
}

/**
 * - The `CombinedController` class is responsible for both user authentication and data retrieval.
 * - The LoginUser method not only handles authentication but also retrieves user data directly
 *   from the `DataService`, violating the Single Responsibility Principle and mixing concerns.
 * - This violates the principle of Separation of Concerns and makes the code harder to maintain, test, and understand.
 */
public class CombinedController
{
    private AuthenticationService authService;
    private DataService dataService;

    public CombinedController(AuthenticationService authService, DataService dataService)
    {
        this.authService = authService;
        this.dataService = dataService;
    }

    public bool LoginUser(string username, string password)
    {
        // Authentication logic here
        bool isAuthenticated = this.authService.Login(username, password);
        if (isAuthenticated)
        {
            // Retrieve user data (mixing concerns)
            List<object> userData = this.dataService.FetchData();
            Console.WriteLine(userData.Count);
        }
        return isAuthenticated;
    }

    public void LogoutUser()
    {
        // Logout logic here
        this.authService.Logout();
    }
}

class Program
{
    static void Main(string[] args)
    {
        AuthenticationService authService = new AuthenticationService();
        DataService dataService = new DataService();

        CombinedController combinedController = new CombinedController(authService, dataService);

        // Simulate user login/logout
        combinedController.LoginUser("username", "password");
        combinedController.LogoutUser();
    }
}