<?php

class Employee {
    private $name;
    private $position;
    private $salary;

    public function __construct($name, $position, $salary) {
        $this->name = $name;
        $this->position = $position;
        $this->salary = $salary;
    }

    // Method responsible for storing employee data and printing employee information
    public function print() {
        echo "Name: " . $this->name . "\n";
        echo "Position: " . $this->position . "\n";
        echo "Salary: " . $this->salary . "\n";
    }
}

// Usage
$employee = new Employee("John Doe", "Software Engineer", 50000);
$employee->print();

?>