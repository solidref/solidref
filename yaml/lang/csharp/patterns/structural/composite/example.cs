using System;
using System.Collections.Generic;
using System.Linq;

public interface IDepartment
{
    string GetName();
    List<string> GetEmployees();
}

public class IndividualDepartment : IDepartment
{
    private string name;
    private List<string> employees;

    public IndividualDepartment(string name, List<string> employees)
    {
        this.name = name;
        this.employees = employees;
    }

    public string GetName() => name;

    public List<string> GetEmployees() => employees;
}

public class CompositeDepartment : IDepartment
{
    private string name;
    private List<IDepartment> departments;

    public CompositeDepartment(string name)
    {
        this.name = name;
        departments = new List<IDepartment>();
    }

    public string GetName() => name;

    public void AddDepartment(IDepartment department) => departments.Add(department);

    public void RemoveDepartment(IDepartment department) => departments.Remove(department);

    public List<string> GetEmployees() => departments.SelectMany(dept => dept.GetEmployees()).ToList();
}

class Program
{
    static void Main(string[] args)
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

        Console.WriteLine("Employees in the root department:");
        rootDepartment.GetEmployees().ForEach(Console.WriteLine);
    }
}

/*
 * The IDepartment interface defines the common methods for both individual departments and composite departments.
 *
 * IndividualDepartment represents an individual department with a name and a list of employees.
 *
 * CompositeDepartment represents a composite department that can contain sub-departments. It maintains a
 * list of departments and delegates the GetEmployees method to its sub-departments recursively.
 *
 * The client code creates a hierarchical structure of departments and retrieves all employees from the root department.
 */