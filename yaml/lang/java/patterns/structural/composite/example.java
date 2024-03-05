import java.util.ArrayList;
import java.util.List;

// Department.java (Component)
interface Department {
  String getName();
  List<String> getEmployees();
}

// IndividualDepartment.java (Leaf)
class IndividualDepartment implements Department {
  private String name;
  private List<String> employees;

  public IndividualDepartment(String name, List<String> employees) {
    this.name = name;
    this.employees = employees;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public List<String> getEmployees() {
    return employees;
  }
}

// CompositeDepartment.java (Composite)
class CompositeDepartment implements Department {
  private String name;
  private List<Department> departments;

  public CompositeDepartment(String name) {
    this.name = name;
    this.departments = new ArrayList<>();
  }

  public void addDepartment(Department department) {
    departments.add(department);
  }

  public void removeDepartment(Department department) {
    departments.remove(department);
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public List<String> getEmployees() {
    List<String> employees = new ArrayList<>();
    for (Department department : departments) {
      employees.addAll(department.getEmployees());
    }
    return employees;
  }
}

public class Main {
  public static void main(String[] args) {
    IndividualDepartment salesDepartment = new IndividualDepartment("Sales Department", List.of("John", "Alice", "Bob"));
    IndividualDepartment marketingDepartment = new IndividualDepartment("Marketing Department", List.of("Emily", "David"));
    IndividualDepartment engineeringDepartment = new IndividualDepartment("Engineering Department", List.of("Michael", "Sarah", "Chris"));

    CompositeDepartment headDepartment = new CompositeDepartment("Head Department");
    headDepartment.addDepartment(salesDepartment);
    headDepartment.addDepartment(marketingDepartment);

    CompositeDepartment parentEngineeringDepartment = new CompositeDepartment("Parent Engineering Department");
    parentEngineeringDepartment.addDepartment(engineeringDepartment);

    CompositeDepartment rootDepartment = new CompositeDepartment("Root Department");
    rootDepartment.addDepartment(headDepartment);
    rootDepartment.addDepartment(parentEngineeringDepartment);

    // Get all employees in the root department
    System.out.println("Employees in the root department:");
    List<String> employees = rootDepartment.getEmployees();
    for (String employee : employees) {
      System.out.println(employee);
    }
  }
}


/**
 * The Department interface defines the common methods for both individual departments and composite departments.
 *
 * IndividualDepartment represents an individual department with a name and a list of employees.
 *
 * CompositeDepartment represents a composite department that can contain sub-departments. It maintains a
 * list of departments and delegates the getEmployees method to its sub-departments recursively.
 *
 * The client code creates a hierarchical structure of departments and retrieves all employees from the root department.
 */
