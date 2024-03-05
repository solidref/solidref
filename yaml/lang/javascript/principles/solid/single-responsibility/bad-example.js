class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  // Method responsible for storing employee data and printing employee information
  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Position: ${this.position}`);
    console.log(`Salary: ${this.salary}`);
  }
}

// Usage
const employee = new Employee("John Doe", "Software Engineer", 50000);
employee.print();
