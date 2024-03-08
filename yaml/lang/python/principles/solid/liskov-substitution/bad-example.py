class Bird:
    def fly(self):
        pass  # Implementation of flying

class Ostrich(Bird):
    def fly(self):
        raise Exception("Can't fly")  # Contradicts the superclass's behavior
