// Leaf: Individual Department
class IndividualDepartment {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }

  getName() {
    return this.name;
  }

  getEmployees() {
    return this.employees;
  }
}

// Composite: Composite Department
class CompositeDepartment {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  getName() {
    return this.name;
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  getEmployees() {
    let employees = [];
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
