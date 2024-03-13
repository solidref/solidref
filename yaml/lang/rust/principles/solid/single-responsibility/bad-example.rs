struct Employee {
    name: String,
    position: String,
    salary: u32,
}

impl Employee {
    // Constructor method to initialize the Employee struct
    fn new(name: String, position: String, salary: u32) -> Employee {
        Employee {
            name,
            position,
            salary,
        }
    }

    // Method responsible for printing employee information
    fn print(&self) {
        println!("Name: {}", self.name);
        println!("Position: {}", self.position);
        println!("Salary: {}", self.salary);
    }
}

fn main() {
    // Usage
    let employee = Employee::new("John Doe".to_string(), "Software Engineer".to_string(), 50000);
    employee.print();
}