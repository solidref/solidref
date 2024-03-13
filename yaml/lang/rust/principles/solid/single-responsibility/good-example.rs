struct Employee {
    name: String,
    position: String,
    salary: u64,
}

impl Employee {
    // Employee struct responsible only for storing employee data
    fn new(name: &str, position: &str, salary: u64) -> Self {
        Employee {
            name: name.to_string(),
            position: position.to_string(),
            salary,
        }
    }

    fn get_name(&self) -> &String {
        &self.name
    }

    fn get_position(&self) -> &String {
        &self.position
    }

    fn get_salary(&self) -> u64 {
        self.salary
    }
}

struct EmployeePrinter;

impl EmployeePrinter {
    // Printer struct responsible only for printing employee information
    fn print(&self, employee: &Employee) {
        println!("Name: {}", employee.get_name());
        println!("Position: {}", employee.get_position());
        println!("Salary: {}", employee.get_salary());
    }
}

fn main() {
    let employee = Employee::new("John Doe", "Software Engineer", 50000);
    let printer = EmployeePrinter {};
    printer.print(&employee);
}