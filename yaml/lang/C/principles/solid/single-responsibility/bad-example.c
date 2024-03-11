#include <stdio.h>

// Structure to hold employee information
typedef struct {
    char* name;
    char* position;
    int salary;
} Employee;

// Function to print employee information
void printEmployee(Employee emp) {
    printf("Name: %s\n", emp.name);
    printf("Position: %s\n", emp.position);
    printf("Salary: %d\n", emp.salary);
}

// Usage example
int main() {
    Employee employee = {"John Doe", "Software Engineer", 50000};
    printEmployee(employee);
    return 0;
}