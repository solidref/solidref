#include <iostream>
#include <string>

// Employee class responsible only for storing employee data
class Employee {
private:
  std::string name;
  std::string position;
  double salary;

public:
  Employee(const std::string &name, const std::string &position, double salary)
      : name(name), position(position), salary(salary) {}

  std::string getName() const { return name; }

  std::string getPosition() const { return position; }

  double getSalary() const { return salary; }
};

// Printer class responsible only for printing employee information
class EmployeePrinter {
public:
  void print(const Employee &employee) const {
    std::cout << "Name: " << employee.getName() << std::endl;
    std::cout << "Position: " << employee.getPosition() << std::endl;
    std::cout << "Salary: $" << employee.getSalary() << std::endl;
  }
};

// Example usage
int main() {
  Employee employee("John Doe", "Software Engineer", 50000);
  EmployeePrinter printer;
  printer.print(employee);

  return 0;
}
