package main

import "fmt"

// FurnitureFactory interface
type FurnitureFactory interface {
    CreateChair() Chair
    CreateTable() Table
}

// ModernFurnitureFactory concrete factory
type ModernFurnitureFactory struct{}

func (m *ModernFurnitureFactory) CreateChair() Chair {
    return &ModernChair{}
}

func (m *ModernFurnitureFactory) CreateTable() Table {
    return &ModernTable{}
}

// VintageFurnitureFactory concrete factory
type VintageFurnitureFactory struct{}

func (v *VintageFurnitureFactory) CreateChair() Chair {
    return &VintageChair{}
}

func (v *VintageFurnitureFactory) CreateTable() Table {
    return &VintageTable{}
}

// Chair interface
type Chair interface {
    SitOn()
}

// ModernChair concrete product
type ModernChair struct{}

func (mc *ModernChair) SitOn() {
    fmt.Println("Sitting on a modern chair.")
}

// VintageChair concrete product
type VintageChair struct{}

func (vc *VintageChair) SitOn() {
    fmt.Println("Sitting on a vintage chair.")
}

// Table interface
type Table interface {
    PutOn()
}

// ModernTable concrete product
type ModernTable struct{}

func (mt *ModernTable) PutOn() {
    fmt.Println("Putting something on a modern table.")
}

// VintageTable concrete product
type VintageTable struct{}

func (vt *VintageTable) PutOn() {
    fmt.Println("Putting something on a vintage table.")
}

// createFurniture client function
func createFurniture(factory FurnitureFactory) {
    chair := factory.CreateChair()
    table := factory.CreateTable()

    fmt.Println("Created furniture:")
    chair.SitOn()
    table.PutOn()
}

func main() {
    fmt.Println("Creating modern furniture:")
    createFurniture(&ModernFurnitureFactory{})

    fmt.Println("\nCreating vintage furniture:")
    createFurniture(&VintageFurnitureFactory{})
}