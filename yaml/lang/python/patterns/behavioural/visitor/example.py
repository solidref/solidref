class AnimalVisitor:
    def visit_lion(self, lion):
        pass

    def visit_elephant(self, elephant):
        pass

    def visit_giraffe(self, giraffe):
        pass

class AnimalFeeder(AnimalVisitor):
    def visit_lion(self, lion):
        print(f"Feeding meat to {lion.get_name()}.")

    def visit_elephant(self, elephant):
        print(f"Feeding hay to {elephant.get_name()}.")

    def visit_giraffe(self, giraffe):
        print(f"Feeding leaves to {giraffe.get_name()}.")

class Animal:
    def accept(self, visitor: AnimalVisitor):
        pass

class Lion(Animal):
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def accept(self, visitor: AnimalVisitor):
        visitor.visit_lion(self)

class Elephant(Animal):
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def accept(self, visitor: AnimalVisitor):
        visitor.visit_elephant(self)

class Giraffe(Animal):
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def accept(self, visitor: AnimalVisitor):
        visitor.visit_giraffe(self)

class Zoo:
    def __init__(self):
        self.animals = []

    def add_animal(self, animal):
        self.animals.append(animal)

    def perform_operation(self, visitor: AnimalVisitor):
        for animal in self.animals:
            animal.accept(visitor)

# Client code
zoo = Zoo()
zoo.add_animal(Lion("Simba"))
zoo.add_animal(Elephant("Dumbo"))
zoo.add_animal(Giraffe("Melman"))

feeder = AnimalFeeder()
zoo.perform_operation(feeder)