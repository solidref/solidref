// Computer.java (Product)
class Computer {
  private String cpu;
  private int ram;
  private int storage;
  private String gpu;
  private int screenSize;

  public Computer(String cpu, int ram, int storage, String gpu, int screenSize) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
    this.screenSize = screenSize;
  }

  public void displaySpecs() {
    System.out.println("CPU: " + this.cpu);
    System.out.println("RAM: " + this.ram + " GB");
    System.out.println("Storage: " + this.storage + " GB");
    System.out.println("GPU: " + this.gpu);
    System.out.println("Screen Size: " + this.screenSize + " inches");
  }
}

// ComputerBuilder.java (Builder interface)
interface ComputerBuilder {
  void setCPU(String cpu);
  void setRAM(int ram);
  void setStorage(int storage);
  void setGPU(String gpu);
  void setScreenSize(int screenSize);
  Computer getResult();
}

// GamingComputerBuilder.java (Concrete Builder)
class GamingComputerBuilder implements ComputerBuilder {
  private Computer computer;

  public GamingComputerBuilder() {
    // Initialize with default values
    computer = new Computer("", 0, 0, "", 0);
  }

  @Override
  public void setCPU(String cpu) { this.computer = new Computer(cpu, computer.getRam(), computer.getStorage(), computer.getGpu(), computer.getScreenSize()); }

  @Override
  public void setRAM(int ram) { this.computer = new Computer(computer.getCpu(), ram, computer.getStorage(), computer.getGpu(), computer.getScreenSize()); }

  @Override
  public void setStorage(int storage) { this.computer = new Computer(computer.getCpu(), computer.getRam(), storage, computer.getGpu(), computer.getScreenSize()); }

  @Override
  public void setGPU(String gpu) { this.computer = new Computer(computer.getCpu(), computer.getRam(), computer.getStorage(), gpu, computer.getScreenSize()); }

  @Override
  public void setScreenSize(int screenSize) { this.computer = new Computer(computer.getCpu(), computer.getRam(), computer.getStorage(), computer.getGpu(), screenSize); }

  @Override
  public Computer getResult() {
    return computer;
  }
}

// ComputerBuilderDirector.java (Director)
class ComputerBuilderDirector {
  private ComputerBuilder builder;

  public ComputerBuilderDirector(ComputerBuilder builder) {
    this.builder = builder;
  }

  public void constructGamingComputer() {
    builder.setCPU("Intel Core i9");
    builder.setRAM(32);
    builder.setStorage(1000);
    builder.setGPU("NVIDIA GeForce RTX 3080");
    builder.setScreenSize(27);
  }
}

// Main.java (Client code)
public class Main {
  public static void main(String[] args) {
    ComputerBuilder builder = new GamingComputerBuilder();
    ComputerBuilderDirector director = new ComputerBuilderDirector(builder);
    director.constructGamingComputer();
    Computer gamingComputer = builder.getResult();
    System.out.println("Gaming Computer Specifications:");
    gamingComputer.displaySpecs();
  }
}

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
