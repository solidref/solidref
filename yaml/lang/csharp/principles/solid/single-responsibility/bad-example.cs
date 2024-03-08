using System;

class Employee
{
    private string Name;
    private string Position;
    private double Salary;

    public Employee(string name, string position, double salary)
    {
        this.Name = name;
        this.Position = position;
        this.Salary = salary;
    }

    // Method responsible for printing employee information
    public void Print()
    {
        Console.WriteLine($"Name: {this.Name}");
        Console.WriteLine($"Position: {this.Position}");
        Console.WriteLine($"Salary: {this.Salary}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Employee employee = new Employee("John Doe", "Software Engineer", 50000);
        employee.Print();
    }
}