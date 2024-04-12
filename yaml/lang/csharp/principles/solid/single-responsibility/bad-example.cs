using System;

public class Employee {
    private string name;
    private string position;
    private int salary;

    public Employee(string name, string position, int salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    // Method responsible for printing employee information
    public void Print() {
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Position: {position}");
        Console.WriteLine($"Salary: {salary}");
    }
}

class Program {
    static void Main(string[] args) {
        Employee employee = new Employee("John Doe", "Software Engineer", 50000);
        employee.Print();
    }
}