from abc import ABC, abstractmethod

class Breakfast(ABC):
    # Template method
    def prepare(self):
        self.boilWater()
        self.addIngredients()
        self.cook()
        self.serve()

    # Abstract methods to be implemented by subclasses
    @abstractmethod
    def addIngredients(self):
        pass

    @abstractmethod
    def cook(self):
        pass

    # Concrete methods
    def boilWater(self):
        print("Boiling water...")

    def serve(self):
        print("Breakfast is served!")

class OmeletteBreakfast(Breakfast):
    def addIngredients(self):
        print("Adding eggs, cheese, and vegetables to the pan.")

    def cook(self):
        print("Cooking the omelette until golden brown.")

class PancakeBreakfast(Breakfast):
    def addIngredients(self):
        print("Mixing flour, eggs, milk, and sugar to make the batter.")

    def cook(self):
        print("Pouring the batter onto the griddle and flipping until cooked.")

# Client code
print("Preparing Omelette Breakfast:")
omeletteBreakfast = OmeletteBreakfast()
omeletteBreakfast.prepare()

print("\nPreparing Pancake Breakfast:")
pancakeBreakfast = PancakeBreakfast()
pancakeBreakfast.prepare()