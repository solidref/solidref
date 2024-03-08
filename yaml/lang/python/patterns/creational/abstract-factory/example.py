class FurnitureFactory:
    def create_chair(self):
        raise NotImplementedError

    def create_table(self):
        raise NotImplementedError


class ModernFurnitureFactory(FurnitureFactory):
    def create_chair(self):
        return ModernChair()

    def create_table(self):
        return ModernTable()


class VintageFurnitureFactory(FurnitureFactory):
    def create_chair(self):
        return VintageChair()

    def create_table(self):
        return VintageTable()


class Chair:
    def sit_on(self):
        raise NotImplementedError


class ModernChair(Chair):
    def sit_on(self):
        print("Sitting on a modern chair.")


class VintageChair(Chair):
    def sit_on(self):
        print("Sitting on a vintage chair.")


class Table:
    def put_on(self):
        raise NotImplementedError


class ModernTable(Table):
    def put_on(self):
        print("Putting something on a modern table.")


class VintageTable(Table):
    def put_on(self):
        print("Putting something on a vintage table.")


def create_furniture(factory):
    chair = factory.create_chair()
    table = factory.create_table()

    print("Created furniture:")
    chair.sit_on()
    table.put_on()


print("Creating modern furniture:")
create_furniture(ModernFurnitureFactory())

print("\nCreating vintage furniture:")
create_furniture(VintageFurnitureFactory())

# The code has been adapted to Python, following its idioms and conventions.
# This includes using class inheritance, method overloading, and Python's print function for output.
# The design pattern remains essentially the same, illustrating the Abstract Factory pattern wherein
# a client can create families of related objects without specifying their concrete classes.