public class Employee {
  private String name;
  private String position;
  private double salary;

  public Employee(String name, String position, double salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  // This method violates the Single Responsibility Principle
  public void print() {
    System.out.println("Name: " + this.name);
    System.out.println("Position: " + this.position);
    System.out.println("Salary: " + this.salary);
  }
}

public class Main {
  public static void main(String[] args) {
    Employee employee = new Employee("John Doe", "Software Engineer", 50000);
    employee.print(); // Mixing data management with presentation logic
  }
}
