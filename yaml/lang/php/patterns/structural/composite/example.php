<?php

interface Department {
  public function getName();
  public function getEmployees();
}

class IndividualDepartment implements Department {
  private $name;
  private $employees;

  public function __construct($name, $employees) {
    $this->name = $name;
    $this->employees = $employees;
  }

  public function getName() {
    return $this->name;
  }

  public function getEmployees() {
    return $this->employees;
  }
}

class CompositeDepartment implements Department {
  private $name;
  private $departments;

  public function __construct($name) {
    $this->name = $name;
    $this->departments = [];
  }

  public function getName() {
    return $this->name;
  }

  public function addDepartment($department) {
    $this->departments[] = $department;
  }

  public function removeDepartment($department) {
    $index = array_search($department, $this->departments);
    if ($index !== false) {
      unset($this->departments[$index]);
    }
  }

  public function getEmployees() {
    $employees = [];
    foreach ($this->departments as $department) {
      $employees = array_merge($employees, $department->getEmployees());
    }
    return $employees;
  }
}

// Client code
$salesDepartment = new IndividualDepartment('Sales Department', ['John', 'Alice', 'Bob']);
$marketingDepartment = new IndividualDepartment('Marketing Department', ['Emily', 'David']);
$engineeringDepartment = new IndividualDepartment('Engineering Department', ['Michael', 'Sarah', 'Chris']);

$headDepartment = new CompositeDepartment('Head Department');
$headDepartment->addDepartment($salesDepartment);
$headDepartment->addDepartment($marketingDepartment);

$parentEngineeringDepartment = new CompositeDepartment('Parent Engineering Department');
$parentEngineeringDepartment->addDepartment($engineeringDepartment);

$rootDepartment = new CompositeDepartment('Root Department');
$rootDepartment->addDepartment($headDepartment);
$rootDepartment->addDepartment($parentEngineeringDepartment);

// Get all employees in the root department
echo 'Employees in the root department:' . PHP_EOL;
print_r($rootDepartment->getEmployees());

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

?>