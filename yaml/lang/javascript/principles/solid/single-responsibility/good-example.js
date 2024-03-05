// Employee class responsible only for storing employee data
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getSalary() {
    return this.salary;
  }
}

// Printer class responsible only for printing employee information
class EmployeePrinter {
  print(employee) {
    console.log(`Name: ${employee.getName()}`);
    console.log(`Position: ${employee.getPosition()}`);
    console.log(`Salary: ${employee.getSalary()}`);
  }
}

// Usage
const employee = new Employee("John Doe", "Software Engineer", 50000);
const printer = new EmployeePrinter();
printer.print(employee);
