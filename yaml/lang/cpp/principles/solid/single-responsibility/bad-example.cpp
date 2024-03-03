class Employee {
  constructor(private name: string, private position: string, private salary: number) { }

  // Method responsible for storing employee data and printing employee information
  print(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Position: ${this.position}`);
    console.log(`Salary: ${this.salary}`);
  }
}

// Usage
const employee = new Employee("John Doe", "Software Engineer", 50000);
employee.print();
