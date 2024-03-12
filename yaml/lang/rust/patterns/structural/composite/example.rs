use std::cell::RefCell;
use std::rc::Rc;

trait Department {
    fn get_name(&self) -> String;
    fn get_employees(&self) -> Vec<String>;
}

struct IndividualDepartment {
    name: String,
    employees: Vec<String>,
}

impl IndividualDepartment {
    fn new(name: String, employees: Vec<String>) -> Self {
        Self { name, employees }
    }
}

impl Department for IndividualDepartment {
    fn get_name(&self) -> String {
        self.name.clone()
    }

    fn get_employees(&self) -> Vec<String> {
        self.employees.clone()
    }
}

struct CompositeDepartment {
    name: String,
    departments: Vec<Rc<RefCell<dyn Department>>>,
}

impl CompositeDepartment {
    fn new(name: String) -> Self {
        Self {
            name,
            departments: Vec::new(),
        }
    }

    fn add_department(&mut self, department: Rc<RefCell<dyn Department>>) {
        self.departments.push(department);
    }

    fn remove_department(&mut self, department: &Rc<RefCell<dyn Department>>) {
        self.departments.retain(|d| !Rc::ptr_eq(d, department));
    }
}

impl Department for CompositeDepartment {
    fn get_name(&self) -> String {
        self.name.clone()
    }

    fn get_employees(&self) -> Vec<String> {
        self.departments.iter().fold(Vec::new(), |mut employees, department| {
            employees.extend(department.borrow().get_employees());
            employees
        })
    }
}

fn main() {
    let sales_department = Rc::new(RefCell::new(IndividualDepartment::new(
        "Sales Department".to_string(),
        vec!["John".to_string(), "Alice".to_string(), "Bob".to_string()],
    )));
    let marketing_department = Rc::new(RefCell::new(IndividualDepartment::new(
        "Marketing Department".to_string(),
        vec!["Emily".to_string(), "David".to_string()],
    )));
    let engineering_department = Rc::new(RefCell::new(IndividualDepartment::new(
        "Engineering Department".to_string(),
        vec!["Michael".to_string(), "Sarah".to_string(), "Chris".to_string()],
    )));

    let head_department = Rc::new(RefCell::new(CompositeDepartment::new("Head Department".to_string())));
    head_department.borrow_mut().add_department(sales_department.clone());
    head_department.borrow_mut().add_department(marketing_department.clone());

    let parent_engineering_department = Rc::new(RefCell::new(CompositeDepartment::new("Parent Engineering Department".to_string())));
    parent_engineering_department.borrow_mut().add_department(engineering_department.clone());

    let root_department = Rc::new(RefCell::new(CompositeDepartment::new("Root Department".to_string())));
    root_department.borrow_mut().add_department(head_department.clone());
    root_department.borrow_mut().add_department(parent_engineering_department.clone());

    println!("Employees in the root department:");
    for employee in root_department.borrow().get_employees() {
        println!("{}", employee);
    }
}
// This Rust example adheres to the Composite Design Pattern principles, refining the provided code while keeping the explanatory comments through idiomatic Rust practices.