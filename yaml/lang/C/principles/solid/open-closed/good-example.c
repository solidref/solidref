#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Abstract base "class" using structure for shape definitions
typedef struct Shape {
    // Function pointer for computeArea
    double (*computeArea)(struct Shape *self);
} Shape;

// Function to simulate abstract behavior for base computeArea
double Shape_computeArea(Shape *self) {
    printf("Must be implemented in subclasses\n");
    exit(1);
}

// Rectangle "class"
typedef struct {
    Shape base; // Inheritance simulated through composition
    double width;
    double height;
} Rectangle;

// Implementation of computeArea for Rectangle
double Rectangle_computeArea(Shape *shape) {
    Rectangle *self = (Rectangle *) shape;
    return self->width * self->height;
}

// Constructor-like function for Rectangle
Rectangle *Rectangle_new(double width, double height) {
    Rectangle *rect = (Rectangle *)malloc(sizeof(Rectangle));
    rect->base.computeArea = Rectangle_computeArea;
    rect->width = width;
    rect->height = height;
    return rect;
}

// Circle "class"
typedef struct {
    Shape base; // Inheritance simulated through composition
    double radius;
} Circle;

// Implementation of computeArea for Circle
double Circle_computeArea(Shape *shape) {
    Circle *self = (Circle *) shape;
    return M_PI * pow(self->radius, 2);
}

// Constructor-like function for Circle
Circle *Circle_new(double radius) {
    Circle *circle = (Circle *)malloc(sizeof(Circle));
    circle->base.computeArea = Circle_computeArea;
    circle->radius = radius;
    return circle;
}

// Utility functions to demonstrate polymorphic behavior
double computeShapeArea(Shape *shape) {
    return shape->computeArea(shape);
}

int main() {
    // Demonstrating the use of Rectangle and Circle structs
    Rectangle *rect = Rectangle_new(10, 20);
    Circle *circle = Circle_new(5);

    printf("The area of the Rectangle is: %f\n", computeShapeArea((Shape *)rect));
    printf("The area of the Circle is: %f\n", computeShapeArea((Shape *)circle));

    // Cleanup
    free(rect);
    free(circle);

    return 0;
}