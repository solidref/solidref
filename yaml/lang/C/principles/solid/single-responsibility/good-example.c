#include <stdio.h>

// Employee structure responsible only for storing employee data
typedef struct {
    char* name;
    char* position;
    int salary;
} Employee;

// Initialize an Employee instance
Employee create_employee(char* name, char* position, int salary) {
    Employee emp;
    emp.name = name;
    emp.position = position;
    emp.salary = salary;
    return emp;
}

// Printer function responsible only for printing employee information
void print_employee(Employee emp) {
    printf("Name: %s\n", emp.name);
    printf("Position: %s\n", emp.position);
    printf("Salary: %d\n", emp.salary);
}

// Usage
int main() {
    Employee employee = create_employee("John Doe", "Software Engineer", 50000);
    print_employee(employee);

    return 0;
}