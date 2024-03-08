using System;

public class Employee
{
    private string name;
    private string position;
    private int salary;

    // Employee class responsible only for storing employee data
    public Employee(string name, string position, int salary)
    {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public string GetName()
    {
        return name;
    }

    public string GetPosition()
    {
        return position;
    }

    public int GetSalary()
    {
        return salary;
    }
}

public class EmployeePrinter
{
    // Printer class responsible only for printing employee information
    public void Print(Employee employee)
    {
        Console.WriteLine($"Name: {employee.GetName()}");
        Console.WriteLine($"Position: {employee.GetPosition()}");
        Console.WriteLine($"Salary: {employee.GetSalary()}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Usage
        Employee employee = new Employee("John Doe", "Software Engineer", 50000);
        EmployeePrinter printer = new EmployeePrinter();
        printer.Print(employee);
    }
}