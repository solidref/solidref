#include <iostream>
#include <string>

class Computer {
  std::string cpu;
  int ram;
  int storage;
  std::string gpu;
  double screenSize;

public:
  Computer(const std::string &cpu, int ram, int storage, const std::string &gpu,
           double screenSize)
      : cpu(cpu), ram(ram), storage(storage), gpu(gpu), screenSize(screenSize) {
  }

  void displaySpecs() const {
    std::cout << "CPU: " << cpu << std::endl;
    std::cout << "RAM: " << ram << " GB" << std::endl;
    std::cout << "Storage: " << storage << " GB" << std::endl;
    std::cout << "GPU: " << gpu << std::endl;
    std::cout << "Screen Size: " << screenSize << " inches" << std::endl;
  }
};

class ComputerBuilder {
public:
  virtual void setCPU(const std::string &cpu) = 0;
  virtual void setRAM(int ram) = 0;
  virtual void setStorage(int storage) = 0;
  virtual void setGPU(const std::string &gpu) = 0;
  virtual void setScreenSize(double screenSize) = 0;
  virtual Computer getResult() const = 0;
  virtual ~ComputerBuilder() {}
};

class GamingComputerBuilder : public ComputerBuilder {
  std::string cpu;
  int ram = 0;
  int storage = 0;
  std::string gpu;
  double screenSize = 0.0;

public:
  void setCPU(const std::string &cpu) override { this->cpu = cpu; }

  void setRAM(int ram) override { this->ram = ram; }

  void setStorage(int storage) override { this->storage = storage; }

  void setGPU(const std::string &gpu) override { this->gpu = gpu; }

  void setScreenSize(double screenSize) override {
    this->screenSize = screenSize;
  }

  Computer getResult() const override {
    return Computer(cpu, ram, storage, gpu, screenSize);
  }
};

class ComputerBuilderDirector {
  ComputerBuilder *builder;

public:
  ComputerBuilderDirector(ComputerBuilder *builder) : builder(builder) {}

  void constructGamingComputer() {
    builder->setCPU("Intel Core i9");
    builder->setRAM(32);
    builder->setStorage(1000);
    builder->setGPU("NVIDIA GeForce RTX 3080");
    builder->setScreenSize(27);
  }
};

int main() {
  GamingComputerBuilder builder;
  ComputerBuilderDirector director(&builder);
  director.constructGamingComputer();
  Computer gamingComputer = builder.getResult();
  std::cout << "Gaming Computer Specifications:" << std::endl;
  gamingComputer.displaySpecs();

  return 0;
}

/**
 * The Computer class represents the product we want to build, which is a custom
 * computer with various specifications like CPU, RAM, storage, GPU, and screen
 * size.
 *
 * The ComputerBuilder interface defines methods for setting each component of
 * the computer.
 *
 * The GamingComputerBuilder class is a concrete builder that implements the
 * ComputerBuilder interface to construct a gaming computer with specific
 * configurations.
 *
 * The ComputerBuilderDirector class is responsible for directing the
 * construction process using a builder.
 *
 * The client code creates a GamingComputerBuilder, passes it to the director,
 * and instructs the director to construct a gaming computer. Finally, it
 * retrieves the constructed gaming computer and displays its specifications.
 *
 */
