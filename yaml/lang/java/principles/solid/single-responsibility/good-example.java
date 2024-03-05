public class Employee {
  private String name;
  private String position;
  private double salary;

  public Employee(String name, String position, double salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  public String getName() {
    return name;
  }

  public String getPosition() {
    return position;
  }

  public double getSalary() {
    return salary;
  }
}

public class EmployeePrinter {
  public void print(Employee employee) {
    System.out.println("Name: " + employee.getName());
    System.out.println("Position: " + employee.getPosition());
    System.out.println("Salary: " + employee.getSalary());
  }
}

public class Main {
  public static void main(String[] args) {
    Employee employee = new Employee("John Doe", "Software Engineer", 50000);
    EmployeePrinter printer = new EmployeePrinter();
    printer.print(employee);
  }
}
