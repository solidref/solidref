using System;
using System.Collections.Generic;
using System.Linq;

interface IDepartment
{
    string GetName();
    List<string> GetEmployees();
}

class IndividualDepartment : IDepartment
{
    private string _name;
    private List<string> _employees;

    public IndividualDepartment(string name, List<string> employees)
    {
        _name = name;
        _employees = employees;
    }

    public string GetName()
    {
        return _name;
    }

    public List<string> GetEmployees()
    {
        return _employees;
    }
}

class CompositeDepartment : IDepartment
{
    private string _name;
    private List<IDepartment> _departments;

    public CompositeDepartment(string name)
    {
        _name = name;
        _departments = new List<IDepartment>();
    }

    public void AddDepartment(IDepartment department)
    {
        _departments.Add(department);
    }

    public void RemoveDepartment(IDepartment department)
    {
        _departments.Remove(department);
    }

    public string GetName()
    {
        return _name;
    }

    public List<string> GetEmployees()
    {
        return _departments.SelectMany(department => department.GetEmployees()).ToList();
    }
}

class Program
{
    static void Main()
    {
        var salesDepartment = new IndividualDepartment("Sales Department", new List<string> { "John", "Alice", "Bob" });
        var marketingDepartment = new IndividualDepartment("Marketing Department", new List<string> { "Emily", "David" });
        var engineeringDepartment = new IndividualDepartment("Engineering Department", new List<string> { "Michael", "Sarah", "Chris" });

        var headDepartment = new CompositeDepartment("Head Department");
        headDepartment.AddDepartment(salesDepartment);
        headDepartment.AddDepartment(marketingDepartment);

        var parentEngineeringDepartment = new CompositeDepartment("Parent Engineering Department");
        parentEngineeringDepartment.AddDepartment(engineeringDepartment);

        var rootDepartment = new CompositeDepartment("Root Department");
        rootDepartment.AddDepartment(headDepartment);
        rootDepartment.AddDepartment(parentEngineeringDepartment);

        // Get all employees in the root department
        Console.WriteLine("Employees in the root department:");
        foreach(var employee in rootDepartment.GetEmployees())
        {
            Console.WriteLine(employee);
        }
    }
}

/**
 * The IDepartment interface defines the common methods for both individual departments and composite departments.
 *
 * IndividualDepartment represents an individual department with a name and a list of employees.
 *
 * CompositeDepartment represents a composite department that can contain sub-departments. It maintains a
 * list of departments and delegates the GetEmployees method to its sub-departments recursively.
 *
 * The client code creates a hierarchical structure of departments and retrieves all employees from the root department.
 */