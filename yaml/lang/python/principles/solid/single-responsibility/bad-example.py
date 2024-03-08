class Employee:
    def __init__(self, name: str, position: str, salary: int):
        self.name = name
        self.position = position
        self.salary = salary

    def print(self) -> None:
        print(f"Name: {self.name}")
        print(f"Position: {self.position}")
        print(f"Salary: {self.salary}")

# Usage
employee = Employee("John Doe", "Software Engineer", 50000)
employee.print()
