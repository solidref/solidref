struct Computer {
    cpu: String,
    ram: u32,
    storage: u32,
    gpu: String,
    screen_size: u32,
}

impl Computer {
    fn new(cpu: String, ram: u32, storage: u32, gpu: String, screen_size: u32) -> Self {
        Self { cpu, ram, storage, gpu, screen_size }
    }

    fn display_specs(&self) {
        println!("CPU: {}", self.cpu);
        println!("RAM: {} GB", self.ram);
        println!("Storage: {} GB", self.storage);
        println!("GPU: {}", self.gpu);
        println!("Screen Size: {} inches", self.screen_size);
    }
}

trait ComputerBuilder {
    fn set_cpu(&mut self, cpu: String);
    fn set_ram(&mut self, ram: u32);
    fn set_storage(&mut self, storage: u32);
    fn set_gpu(&mut self, gpu: String);
    fn set_screen_size(&mut self, screen_size: u32);
    fn build(&self) -> Computer;
}

struct GamingComputerBuilder {
    computer: Computer,
}

impl GamingComputerBuilder {
    fn new() -> Self {
        Self {
            computer: Computer::new(String::new(), 0, 0, String::new(), 0),
        }
    }
}

impl ComputerBuilder for GamingComputerBuilder {
    fn set_cpu(&mut self, cpu: String) {
        self.computer.cpu = cpu;
    }

    fn set_ram(&mut self, ram: u32) {
        self.computer.ram = ram;
    }

    fn set_storage(&mut self, storage: u32) {
        self.computer.storage = storage;
    }

    fn set_gpu(&mut self, gpu: String) {
        self.computer.gpu = gpu;
    }

    fn set_screen_size(&mut self, screen_size: u32) {
        self.computer.screen_size = screen_size;
    }

    fn build(&self) -> Computer {
        Computer::new(
            self.computer.cpu.clone(),
            self.computer.ram,
            self.computer.storage,
            self.computer.gpu.clone(),
            self.computer.screen_size,
        )
    }
}

struct ComputerBuilderDirector {
    builder: Box<dyn ComputerBuilder>,
}

impl ComputerBuilderDirector {
    fn construct_gaming_computer(&mut self) {
        self.builder.set_cpu("Intel Core i9".to_string());
        self.builder.set_ram(32);
        self.builder.set_storage(1000);
        self.builder.set_gpu("NVIDIA GeForce RTX 3080".to_string());
        self.builder.set_screen_size(27);
    }
}

fn main() {
    let mut gaming_computer_builder = GamingComputerBuilder::new();
    let mut director = ComputerBuilderDirector {
        builder: Box::new(gaming_computer_builder),
    };

    director.construct_gaming_computer();
    let gaming_computer = director.builder.build();
    println!("Gaming Computer Specifications:");
    gaming_computer.display_specs();
}