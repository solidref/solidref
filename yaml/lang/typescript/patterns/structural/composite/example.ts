// Component: Department
interface Department {
  getName(): string;
  getEmployees(): string[];
}

// Leaf: Individual Department
class IndividualDepartment implements Department {
  private name: string;
  private employees: string[];

  constructor(name: string, employees: string[]) {
    this.name = name;
    this.employees = employees;
  }

  getName(): string {
    return this.name;
  }

  getEmployees(): string[] {
    return this.employees;
  }
}

// Composite: Composite Department
class CompositeDepartment implements Department {
  private name: string;
  private departments: Department[];

  constructor(name: string) {
    this.name = name;
    this.departments = [];
  }

  getName(): string {
    return this.name;
  }

  addDepartment(department: Department): void {
    this.departments.push(department);
  }

  removeDepartment(department: Department): void {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  getEmployees(): string[] {
    let employees: string[] = [];
    for (const department of this.departments) {
      employees = employees.concat(department.getEmployees());
    }
    return employees;
  }
}

// Client code
const salesDepartment = new IndividualDepartment('Sales Department', ['John', 'Alice', 'Bob']);
const marketingDepartment = new IndividualDepartment('Marketing Department', ['Emily', 'David']);
const engineeringDepartment = new IndividualDepartment('Engineering Department', ['Michael', 'Sarah', 'Chris']);

const headDepartment = new CompositeDepartment('Head Department');
headDepartment.addDepartment(salesDepartment);
headDepartment.addDepartment(marketingDepartment);

const parentEngineeringDepartment = new CompositeDepartment('Parent Engineering Department');
parentEngineeringDepartment.addDepartment(engineeringDepartment);

const rootDepartment = new CompositeDepartment('Root Department');
rootDepartment.addDepartment(headDepartment);
rootDepartment.addDepartment(parentEngineeringDepartment);

// Get all employees in the root department
console.log('Employees in the root department:');
console.log(rootDepartment.getEmployees());

/**
 * The Department interface defines the common methods for both individual departments and composite departments.
 *
 * IndividualDepartment represents an individual department with a name and a list of employees.
 *
 * CompositeDepartment represents a composite department that can contain sub-departments. It maintains a
 * list of departments and delegates the getEmployees method to its sub-departments recursively.
 *
 * The client code creates a hierarchical structure of departments and retrieves all employees from the root department.
 */
