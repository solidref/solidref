// Product: Computer
class Computer {
  private cpu: string;
  private ram: number;
  private storage: number;
  private gpu: string;
  private screenSize: number;

  constructor(cpu: string, ram: number, storage: number, gpu: string, screenSize: number) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
    this.screenSize = screenSize;
  }

  displaySpecs(): void {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram} GB`);
    console.log(`Storage: ${this.storage} GB`);
    console.log(`GPU: ${this.gpu}`);
    console.log(`Screen Size: ${this.screenSize} inches`);
  }
}

// Builder interface
interface ComputerBuilder {
  setCPU(cpu: string): void;
  setRAM(ram: number): void;
  setStorage(storage: number): void;
  setGPU(gpu: string): void;
  setScreenSize(screenSize: number): void;
  getResult(): Computer;
}

// Concrete Builder: Gaming Computer Builder
class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer("", 0, 0, "", 0);
  }

  setCPU(cpu: string): void {
    this.computer = new Computer(cpu, this.computer.ram, this.computer.storage, this.computer.gpu, this.computer.screenSize);
  }

  setRAM(ram: number): void {
    this.computer = new Computer(this.computer.cpu, ram, this.computer.storage, this.computer.gpu, this.computer.screenSize);
  }

  setStorage(storage: number): void {
    this.computer = new Computer(this.computer.cpu, this.computer.ram, storage, this.computer.gpu, this.computer.screenSize);
  }

  setGPU(gpu: string): void {
    this.computer = new Computer(this.computer.cpu, this.computer.ram, this.computer.storage, gpu, this.computer.screenSize);
  }

  setScreenSize(screenSize: number): void {
    this.computer = new Computer(this.computer.cpu, this.computer.ram, this.computer.storage, this.computer.gpu, screenSize);
  }

  getResult(): Computer {
    return this.computer;
  }
}

// Director
class ComputerBuilderDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  constructGamingComputer(): void {
    this.builder.setCPU("Intel Core i9");
    this.builder.setRAM(32);
    this.builder.setStorage(1000);
    this.builder.setGPU("NVIDIA GeForce RTX 3080");
    this.builder.setScreenSize(27);
  }
}

// Client code
const gamingComputerBuilder = new GamingComputerBuilder();
const director = new ComputerBuilderDirector(gamingComputerBuilder);
director.constructGamingComputer();
const gamingComputer = gamingComputerBuilder.getResult();
console.log("Gaming Computer Specifications:");
gamingComputer.displaySpecs();


/**
 * The Computer class represents the product we want to build, which is a custom computer with
 * various specifications like CPU, RAM, storage, GPU, and screen size.
 *
 * The ComputerBuilder interface defines methods for setting each component of the computer.
 *
 * The GamingComputerBuilder class is a concrete builder that implements the ComputerBuilder
 * interface to construct a gaming computer with specific configurations.
 *
 * The ComputerBuilderDirector class is responsible for directing the construction process using
 * a builder.
 *
 * The client code creates a GamingComputerBuilder, passes it to the director, and instructs the
 * director to construct a gaming computer. Finally, it retrieves the constructed gaming computer
 * and displays its specifications.
 *
 */
