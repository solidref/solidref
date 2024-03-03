// Employee class responsible only for storing employee data
class Employee {
  constructor(private name: string, private position: string, private salary: number) { }

  getName(): string {
    return this.name;
  }

  getPosition(): string {
    return this.position;
  }

  getSalary(): number {
    return this.salary;
  }
}

// Printer class responsible only for printing employee information
class EmployeePrinter {
  print(employee: Employee): void {
    console.log(`Name: ${employee.getName()}`);
    console.log(`Position: ${employee.getPosition()}`);
    console.log(`Salary: ${employee.getSalary()}`);
  }
}

// Usage
const employee = new Employee("John Doe", "Software Engineer", 50000);
const printer = new EmployeePrinter();
printer.print(employee);
