class Computer {
  constructor(cpu = "", ram = 0, storage = 0, gpu = "", screenSize = 0) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
    this.screenSize = screenSize;
  }

  displaySpecs() {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram} GB`);
    console.log(`Storage: ${this.storage} GB`);
    console.log(`GPU: ${this.gpu}`);
    console.log(`Screen Size: ${this.screenSize} inches`);
  }
}

class GamingComputerBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.computer = new Computer();
  }

  setCPU(cpu) {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram) {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage) {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu) {
    this.computer.gpu = gpu;
    return this;
  }

  setScreenSize(screenSize) {
    this.computer.screenSize = screenSize;
    return this;
  }

  getResult() {
    return this.computer;
  }
}

class ComputerBuilderDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructGamingComputer() {
    this.builder.setCPU("Intel Core i9")
      .setRAM(32)
      .setStorage(1000)
      .setGPU("NVIDIA GeForce RTX 3080")
      .setScreenSize(27);
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
