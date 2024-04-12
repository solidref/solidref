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

public class UserController
{
    private readonly AuthenticationService _authService;

    public UserController(AuthenticationService authService)
    {
        _authService = authService;
    }

    public bool LoginUser(string username, string password)
    {
        return _authService.Login(username, password);
    }

    public void LogoutUser()
    {
        _authService.Logout();
    }
}

public class DataController
{
    private readonly DataService _dataService;

    public DataController(DataService dataService)
    {
        _dataService = dataService;
    }

    public List<object> GetData()
    {
        return _dataService.FetchData();
    }
}

// Usage example
public class Program
{
    public static void Main(string[] args)
    {
        var authService = new AuthenticationService();
        var dataService = new DataService();

        var userController = new UserController(authService);
        var dataController = new DataController(dataService);

        // Simulate user login/logout
        userController.LoginUser("username", "password");
        userController.LogoutUser();

        // Retrieve data
        var data = dataController.GetData();
        foreach (var item in data)
        {
            System.Console.WriteLine(item);
        }
    }
}