<?php

// Employee class responsible only for storing employee data
class Employee {
  private $name;
  private $position;
  private $salary;

  public function __construct($name, $position, $salary) {
    $this->name = $name;
    $this->position = $position;
    $this->salary = $salary;
  }

  public function getName() {
    return $this->name;
  }

  public function getPosition() {
    return $this->position;
  }

  public function getSalary() {
    return $this->salary;
  }
}

// Printer class responsible only for printing employee information
class EmployeePrinter {
  public function print(Employee $employee) {
    echo "Name: " . $employee->getName() . "\n";
    echo "Position: " . $employee->getPosition() . "\n";
    echo "Salary: " . $employee->getSalary() . "\n";
  }
}

// Usage
$employee = new Employee("John Doe", "Software Engineer", 50000);
$printer = new EmployeePrinter();
$printer->print($employee);

?>