#include <stdio.h>
#include <math.h>

// Define a basic Shape interface that all shapes will implement
typedef struct {
    double (*computeArea)(void*);
} ShapeInterface;

// Rectangle shape structure and its area computation function
typedef struct {
    ShapeInterface *shapeInterface;
    double width;
    double height;
} Rectangle;

double computeAreaRectangle(void* data) {
    Rectangle* rectangle = (Rectangle*)data;
    return rectangle->width * rectangle->height;
}

// Circle shape structure and its area computation function
typedef struct {
    ShapeInterface *shapeInterface;
    double radius;
} Circle;

double computeAreaCircle(void* data) {
    Circle* circle = (Circle*)data;
    return M_PI * circle->radius * circle->radius;
}

// Function to initialize a Rectangle
void initRectangle(Rectangle* rectangle, double width, double height) {
    rectangle->width = width;
    rectangle->height = height;
    static ShapeInterface rectangleInterface = {computeAreaRectangle};
    rectangle->shapeInterface = &rectangleInterface;
}

// Function to initialize a Circle
void initCircle(Circle* circle, double radius) {
    circle->radius = radius;
    static ShapeInterface circleInterface = {computeAreaCircle};
    circle->shapeInterface = &circleInterface;
}

// AreaCalculator's key function, now utilizes polymorphism for shape area computation
double computeArea(ShapeInterface* shape) {
    return shape->computeArea(shape);
}

int main() {
    Rectangle myRectangle;
    initRectangle(&myRectangle, 10.0, 5.0);

    Circle myCircle;
    initCircle(&myCircle, 7.0);

    printf("Rectangle area: %f\n", computeArea(myRectangle.shapeInterface, &myRectangle));
    printf("Circle area: %f\n", computeArea(myCircle.shapeInterface, &myCircle));

    return 0;
}