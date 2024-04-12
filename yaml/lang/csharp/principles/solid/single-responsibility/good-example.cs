using System;

// Employee class responsible only for storing employee data
public class Employee {
  private string name;
  private string position;
  private decimal salary;

  public Employee(string name, string position, decimal salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  public string GetName() {
    return name;
  }

  public string GetPosition() {
    return position;
  }

  public decimal GetSalary() {
    return salary;
  }
}

// Printer class responsible only for printing employee information
public class EmployeePrinter {
  public void Print(Employee employee) {
    Console.WriteLine($"Name: {employee.GetName()}");
    Console.WriteLine($"Position: {employee.GetPosition()}");
    Console.WriteLine($"Salary: {employee.GetSalary()}");
  }
}

// Usage
public class Program {
  public static void Main(string[] args) {
    Employee employee = new Employee("John Doe", "Software Engineer", 50000);
    EmployeePrinter printer = new EmployeePrinter();
    printer.Print(employee);
  }
}