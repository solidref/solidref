class Computer:
    def __init__(self, cpu="", ram=0, storage=0, gpu="", screen_size=0):
        self.cpu = cpu
        self.ram = ram
        self.storage = storage
        self.gpu = gpu
        self.screen_size = screen_size

    def display_specs(self):
        print(f"CPU: {self.cpu}")
        print(f"RAM: {self.ram} GB")
        print(f"Storage: {self.storage} GB")
        print(f"GPU: {self.gpu}")
        print(f"Screen Size: {self.screen_size} inches")

class ComputerBuilder:
    def set_cpu(self, cpu): raise NotImplementedError
    def set_ram(self, ram): raise NotImplementedError
    def set_storage(self, storage): raise NotImplementedError
    def set_gpu(self, gpu): raise NotImplementedError
    def set_screen_size(self, screen_size): raise NotImplementedError
    def get_result(self): raise NotImplementedError

class GamingComputerBuilder(ComputerBuilder):
    def __init__(self):
        self.computer = Computer()

    def set_cpu(self, cpu):
        self.computer.cpu = cpu
        return self

    def set_ram(self, ram):
        self.computer.ram = ram
        return self

    def set_storage(self, storage):
        self.computer.storage = storage
        return self

    def set_gpu(self, gpu):
        self.computer.gpu = gpu
        return self

    def set_screen_size(self, screen_size):
        self.computer.screen_size = screen_size
        return self

    def get_result(self):
        return self.computer

class ComputerBuilderDirector:
    def __init__(self, builder):
        self.builder = builder

    def construct_gaming_computer(self):
        self.builder.set_cpu("Intel Core i9").\
            set_ram(32).\
            set_storage(1000).\
            set_gpu("NVIDIA GeForce RTX 3080").\
            set_screen_size(27)

# Client code
gaming_computer_builder = GamingComputerBuilder()
director = ComputerBuilderDirector(gaming_computer_builder)
director.construct_gaming_computer()
gaming_computer = gaming_computer_builder.get_result()
print("Gaming Computer Specifications:")
gaming_computer.display_specs()