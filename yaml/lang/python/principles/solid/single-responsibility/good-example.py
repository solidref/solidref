class Employee:
    def __init__(self, name: str, position: str, salary: int):
        self._name = name
        self._position = position
        self._salary = salary

    def get_name(self) -> str:
        return self._name

    def get_position(self) -> str:
        return self._position

    def get_salary(self) -> int:
        return self._salary

class EmployeePrinter:
    def print(self, employee: Employee) -> None:
        print(f"Name: {employee.get_name()}")
        print(f"Position: {employee.get_position()}")
        print(f"Salary: {employee.get_salary()}")

# Usage
employee = Employee("John Doe", "Software Engineer", 50000)
printer = EmployeePrinter()
printer.print(employee)
