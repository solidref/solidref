package main

import "fmt"

// Computer represents the product we want to build.
type Computer struct {
	cpu        string
	ram        int
	storage    int
	gpu        string
	screenSize int
}

// NewComputer is a constructor for Computer.
func NewComputer(cpu string, ram int, storage int, gpu string, screenSize int) *Computer {
	return &Computer{cpu: cpu, ram: ram, storage: storage, gpu: gpu, screenSize: screenSize}
}

// DisplaySpecs prints the specifications of the computer.
func (c *Computer) DisplaySpecs() {
	fmt.Printf("CPU: %s\n", c.cpu)
	fmt.Printf("RAM: %d GB\n", c.ram)
	fmt.Printf("Storage: %d GB\n", c.storage)
	fmt.Printf("GPU: %s\n", c.gpu)
	fmt.Printf("Screen Size: %d inches\n", c.screenSize)
}

// ComputerBuilder defines methods for setting each component of the computer.
type ComputerBuilder interface {
	SetCPU(cpu string)
	SetRAM(ram int)
	SetStorage(storage int)
	SetGPU(gpu string)
	SetScreenSize(screenSize int)
	GetResult() *Computer
}

// GamingComputerBuilder is a concrete builder for a gaming computer.
type GamingComputerBuilder struct {
	computer *Computer
}

// NewGamingComputerBuilder is the constructor for GamingComputerBuilder, initializing with default values.
func NewGamingComputerBuilder() *GamingComputerBuilder {
	return &GamingComputerBuilder{computer: NewComputer("", 0, 0, "", 0)}
}

func (b *GamingComputerBuilder) SetCPU(cpu string) {
	b.computer.cpu = cpu
}

func (b *GamingComputerBuilder) SetRAM(ram int) {
	b.computer.ram = ram
}

func (b *GamingComputerBuilder) SetStorage(storage int) {
	b.computer.storage = storage
}

func (b *GamingComputerBuilder) SetGPU(gpu string) {
	b.computer.gpu = gpu
}

func (b *GamingComputerBuilder) SetScreenSize(screenSize int) {
	b.computer.screenSize = screenSize
}

func (b *GamingComputerBuilder) GetResult() *Computer {
	return b.computer
}

// ComputerBuilderDirector is responsible for the construction process.
type ComputerBuilderDirector struct {
	builder ComputerBuilder
}

func NewComputerBuilderDirector(builder ComputerBuilder) *ComputerBuilderDirector {
	return &ComputerBuilderDirector{builder: builder}
}

func (d *ComputerBuilderDirector) ConstructGamingComputer() {
	d.builder.SetCPU("Intel Core i9")
	d.builder.SetRAM(32)
	d.builder.SetStorage(1000)
	d.builder.SetGPU("NVIDIA GeForce RTX 3080")
	d.builder.SetScreenSize(27)
}

// main function to use the builder
func main() {
	gamingComputerBuilder := NewGamingComputerBuilder()
	director := NewComputerBuilderDirector(gamingComputerBuilder)
	director.ConstructGamingComputer()
	gamingComputer := gamingComputerBuilder.GetResult()
	fmt.Println("Gaming Computer Specifications:")
	gamingComputer.DisplaySpecs()
}