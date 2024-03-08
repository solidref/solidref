from abc import ABC, abstractmethod

class Bird(ABC):
    pass

class FlyingBird(Bird):
    def fly(self):
        print("This bird is flying")

class SwimmingBird(Bird):
    def swim(self):
        print("This bird is swimming")

class Duck(FlyingBird):
    def quack(self):
        print("Duck is quacking")

class Penguin(SwimmingBird):
    def swim(self):
        print("Penguin is swimming")

def make_bird_fly(bird: FlyingBird):
    bird.fly()

def make_bird_swim(bird: SwimmingBird):
    bird.swim()

duck = Duck()
penguin = Penguin()

make_bird_fly(duck)    # Correct: Ducks can fly.
make_bird_swim(penguin)  # Correct: Penguins can swim.
