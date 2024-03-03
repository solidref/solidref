#include <iostream>
#include <string>

// Employee class responsible for both storing employee data and printing
// employee information
class Employee {
private:
  std::string name;
  std::string position;
  double salary;

public:
  Employee(const std::string &name, const std::string &position, double salary)
      : name(name), position(position), salary(salary) {}

  // Method that violates SRP by including printing functionality
  void print() const {
    std::cout << "Name: " << name << std::endl;
    std::cout << "Position: " << position << std::endl;
    std::cout << "Salary: $" << salary << std::endl;
  }
};

// Example usage
int main() {
  Employee employee("John Doe", "Software Engineer", 50000);
  employee
      .print(); // The employee object handles both data storage and printing

  return 0;
}
