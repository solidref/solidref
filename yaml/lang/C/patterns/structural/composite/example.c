#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Forward declaration for Department_struct
struct Department_struct;

// Defines a type for the function pointers to match the interface methods
typedef char* (*GetNameFunc)(struct Department_struct* self);
typedef char** (*GetEmployeesFunc)(struct Department_struct* self, int* count);

// Department interface using function pointers
typedef struct Department_struct {
    GetNameFunc getName;
    GetEmployeesFunc getEmployees;
    void* derivedObj; // Pointer to the derived object (Individual or Composite)
} Department;

// IndividualDepartment definition
typedef struct {
    char* name;
    char** employees;
    int employeeCount;
} IndividualDepartment;

// CompositeDepartment definition
typedef struct {
    char* name;
    Department** departments;
    int departmentCount;
} CompositeDepartment;

// IndividualDepartment method implementations
char* IndividualDepartment_getName(Department* self);
char** IndividualDepartment_getEmployees(Department* self, int* count);

// CompositeDepartment method implementations
char* CompositeDepartment_getName(Department* self);
void CompositeDepartment_addDepartment(Department* self, Department* department);
void CompositeDepartment_removeDepartment(Department* self, Department* department);
char** CompositeDepartment_getEmployees(Department* self, int* count);

// Department constructor prototypes
Department* new_IndividualDepartment(char* name, char** employees, int employeeCount);
Department* new_CompositeDepartment(char* name);

// Utility functions
char** concatenateEmployeeLists(char** list1, int count1, char** list2, int count2, int* newCount);

// Individual Department implementation
char* IndividualDepartment_getName(Department* self) {
    IndividualDepartment* ind = (IndividualDepartment*)self->derivedObj;
    return ind->name;
}

char** IndividualDepartment_getEmployees(Department* self, int* count) {
    IndividualDepartment* ind = (IndividualDepartment*)self->derivedObj;
    *count = ind->employeeCount;
    return ind->employees;
}

Department* new_IndividualDepartment(char* name, char** employees, int employeeCount) {
    Department* dep = (Department*)malloc(sizeof(Department));
    IndividualDepartment* ind = (IndividualDepartment*)malloc(sizeof(IndividualDepartment));

    ind->name = strdup(name);
    ind->employeeCount = employeeCount;
    ind->employees = (char**)malloc(employeeCount * sizeof(char*));
    for (int i = 0; i < employeeCount; ++i) {
        ind->employees[i] = strdup(employees[i]);
    }

    dep->getName = IndividualDepartment_getName;
    dep->getEmployees = IndividualDepartment_getEmployees;
    dep->derivedObj = ind;
    
    return dep;
}

// Composite Department implementation
char* CompositeDepartment_getName(Department* self) {
    CompositeDepartment* comp = (CompositeDepartment*)self->derivedObj;
    return comp->name;
}

void CompositeDepartment_addDepartment(Department* self, Department* department) {
    CompositeDepartment* comp = (CompositeDepartment*)self->derivedObj;
    comp->departmentCount++;
    comp->departments = (Department**)realloc(comp->departments, comp->departmentCount * sizeof(Department*));
    comp->departments[comp->departmentCount - 1] = department;
}

void CompositeDepartment_removeDepartment(Department* self, Department* department) {
    // Implementation omitted for brevity
}

char** CompositeDepartment_getEmployees(Department* self, int* totalCount) {
    *totalCount = 0;
    CompositeDepartment* comp = (CompositeDepartment*)self->derivedObj;
    char** employees = NULL;
    
    for (int i = 0; i < comp->departmentCount; ++i) {
        int count;
        char** departmentEmployees = comp->departments[i]->getEmployees(comp->departments[i], &count);
        employees = concatenateEmployeeLists(employees, *totalCount, departmentEmployees, count, totalCount);
    }

    return employees;
}

Department* new_CompositeDepartment(char* name) {
    Department* dep = (Department*)malloc(sizeof(Department));
    CompositeDepartment* comp = (CompositeDepartment*)malloc(sizeof(CompositeDepartment));
    
    comp->name = strdup(name);
    comp->departments = NULL;
    comp->departmentCount = 0;

    dep->getName = CompositeDepartment_getName;
    dep->getEmployees = CompositeDepartment_getEmployees;
    dep->derivedObj = comp;
    
    return dep;
}

// Helper function to concatenate two lists of strings
char** concatenateEmployeeLists(char** list1, int count1, char** list2, int count2, int* newCount) {
    *newCount = count1 + count2;
    char** newList = (char**)realloc(list1, (*newCount) * sizeof(char*));
    for (int i = 0; i < count2; ++i) {
        newList[count1 + i] = strdup(list2[i]);
    }
    return newList;
}