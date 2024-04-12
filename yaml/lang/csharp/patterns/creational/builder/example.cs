using System;

// Product: Computer
public class Computer {
    private string cpu;
    private int ram;
    private int storage;
    private string gpu;
    private double screenSize;

    public Computer(string cpu, int ram, int storage, string gpu, double screenSize) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
        this.screenSize = screenSize;
    }

    public void DisplaySpecs() {
        Console.WriteLine($"CPU: {this.cpu}");
        Console.WriteLine($"RAM: {this.ram} GB");
        Console.WriteLine($"Storage: {this.storage} GB");
        Console.WriteLine($"GPU: {this.gpu}");
        Console.WriteLine($"Screen Size: {this.screenSize} inches");
    }
}

// Builder interface
public interface IComputerBuilder {
    void SetCPU(string cpu);
    void SetRAM(int ram);
    void SetStorage(int storage);
    void SetGPU(string gpu);
    void SetScreenSize(double screenSize);
    Computer GetResult();
}

// Concrete Builder: Gaming Computer Builder
public class GamingComputerBuilder : IComputerBuilder {
    private Computer computer;

    public GamingComputerBuilder() {
        this.computer = new Computer("", 0, 0, "", 0);
    }

    public void SetCPU(string cpu) {
        this.computer = new Computer(cpu, this.computer.Ram, this.computer.Storage, this.computer.Gpu, this.computer.ScreenSize);
    }

    public void SetRAM(int ram) {
        this.computer = new Computer(this.computer.Cpu, ram, this.computer.Storage, this.computer.Gpu, this.computer.ScreenSize);
    }

    public void SetStorage(int storage) {
        this.computer = new Computer(this.computer.Cpu, this.computer.Ram, storage, this.computer.Gpu, this.computer.ScreenSize);
    }

    public void SetGPU(string gpu) {
        this.computer = new Computer(this.computer.Cpu, this.computer.Ram, this.computer.Storage, gpu, this.computer.ScreenSize);
    }

    public void SetScreenSize(double screenSize) {
        this.computer = new Computer(this.computer.Cpu, this.computer.Ram, this.computer.Storage, this.computer.Gpu, screenSize);
    }

    public Computer GetResult() {
        return this.computer;
    }
}

// Director
public class ComputerBuilderDirector {
    private IComputerBuilder builder;

    public ComputerBuilderDirector(IComputerBuilder builder) {
        this.builder = builder;
    }

    public void ConstructGamingComputer() {
        builder.SetCPU("Intel Core i9");
        builder.SetRAM(32);
        builder.SetStorage(1000);
        builder.SetGPU("NVIDIA GeForce RTX 3080");
        builder.SetScreenSize(27);
    }
}

// Client code
public class Program {
    public static void Main(string[] args) {
        IComputerBuilder gamingComputerBuilder = new GamingComputerBuilder();
        ComputerBuilderDirector director = new ComputerBuilderDirector(gamingComputerBuilder);
        director.ConstructGamingComputer();
        Computer gamingComputer = gamingComputerBuilder.GetResult();
        Console.WriteLine("Gaming Computer Specifications:");
        gamingComputer.DisplaySpecs();
    }
}