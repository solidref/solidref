<?php

/** The Computer class represents the product we want to build, which is a custom computer with
 *  various specifications like CPU, RAM, storage, GPU, and screen size.
 */
class Computer {
    private $cpu;
    private $ram;
    private $storage;
    private $gpu;
    private $screenSize;

    public function __construct($cpu, $ram, $storage, $gpu, $screenSize) {
        $this->cpu = $cpu;
        $this->ram = $ram;
        $this->storage = $storage;
        $this->gpu = $gpu;
        $this->screenSize = $screenSize;
    }

    public function displaySpecs() {
        echo "CPU: " . $this->cpu . "\n";
        echo "RAM: " . $this->ram . " GB\n";
        echo "Storage: " . $this->storage . " GB\n";
        echo "GPU: " . $this->gpu . "\n";
        echo "Screen Size: " . $this->screenSize . " inches\n";
    }
}

/** The ComputerBuilder interface defines methods for setting each component of the computer.
 */
interface ComputerBuilder {
    public function setCPU($cpu);
    public function setRAM($ram);
    public function setStorage($storage);
    public function setGPU($gpu);
    public function setScreenSize($screenSize);
    public function getResult();
}

/** The GamingComputerBuilder class is a concrete builder that implements the ComputerBuilder
 *  interface to construct a gaming computer with specific configurations.
 */
class GamingComputerBuilder implements ComputerBuilder {
    private $computer;

    public function __construct() {
        $this->computer = new Computer("", 0, 0, "", 0);
    }

    public function setCPU($cpu) {
        $this->computer = new Computer($cpu, $this->computer->ram, $this->computer->storage, $this->computer->gpu, $this->computer->screenSize);
    }

    public function setRAM($ram) {
        $this->computer = new Computer($this->computer->cpu, $ram, $this->computer->storage, $this->computer->gpu, $this->computer->screenSize);
    }

    public function setStorage($storage) {
        $this->computer = new Computer($this->computer->cpu, $this->computer->ram, $storage, $this->computer->gpu, $this->computer->screenSize);
    }

    public function setGPU($gpu) {
        $this->computer = new Computer($this->computer->cpu, $this->computer->ram, $this->computer->storage, $gpu, $this->computer->screenSize);
    }

    public function setScreenSize($screenSize) {
        $this->computer = new Computer($this->computer->cpu, $this->computer->ram, $this->computer->storage, $this->computer->gpu, $screenSize);
    }

    public function getResult() {
        return $this->computer;
    }
}

/** The ComputerBuilderDirector class is responsible for directing the construction process using
 *  a builder.
 */
class ComputerBuilderDirector {
    private $builder;

    public function __construct(ComputerBuilder $builder) {
        $this->builder = $builder;
    }

    public function constructGamingComputer() {
        $this->builder->setCPU("Intel Core i9");
        $this->builder->setRAM(32);
        $this->builder->setStorage(1000);
        $this->builder->setGPU("NVIDIA GeForce RTX 3080");
        $this->builder->setScreenSize(27);
    }
}

// Client code
$gamingComputerBuilder = new GamingComputerBuilder();
$director = new ComputerBuilderDirector($gamingComputerBuilder);
$director->constructGamingComputer();
$gamingComputer = $gamingComputerBuilder->getResult();
echo "Gaming Computer Specifications:\n";
$gamingComputer->displaySpecs();

/**
 * The client code creates a GamingComputerBuilder, passes it to the director, and instructs the
 * director to construct a gaming computer. Finally, it retrieves the constructed gaming computer
 * and displays its specifications.
 */
?>