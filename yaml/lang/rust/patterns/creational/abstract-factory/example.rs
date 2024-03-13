trait FurnitureFactory {
    fn create_chair(&self) -> Box<dyn Chair>;
    fn create_table(&self) -> Box<dyn Table>;
}

struct ModernFurnitureFactory;

impl FurnitureFactory for ModernFurnitureFactory {
    fn create_chair(&self) -> Box<dyn Chair> {
        Box::new(ModernChair {})
    }

    fn create_table(&self) -> Box<dyn Table> {
        Box::new(ModernTable {})
    }
}

struct VintageFurnitureFactory;

impl FurnitureFactory for VintageFurnitureFactory {
    fn create_chair(&self) -> Box<dyn Chair> {
        Box::new(VintageChair {})
    }

    fn create_table(&self) -> Box<dyn Table> {
        Box::new(VintageTable {})
    }
}

trait Chair {
    fn sit_on(&self);
}

struct ModernChair;

impl Chair for ModernChair {
    fn sit_on(&self) {
        println!("Sitting on a modern chair.");
    }
}

struct VintageChair;

impl Chair for VintageChair {
    fn sit_on(&self) {
        println!("Sitting on a vintage chair.");
    }
}

trait Table {
    fn put_on(&self);
}

struct ModernTable;

impl Table for ModernTable {
    fn put_on(&self) {
        println!("Putting something on a modern table.");
    }
}

struct VintageTable;

impl Table for VintageTable {
    fn put_on(&self) {
        println!("Putting something on a vintage table.");
    }
}

fn create_furniture(factory: &dyn FurnitureFactory) {
    let chair = factory.create_chair();
    let table = factory.create_table();

    println!("Created furniture:");
    chair.sit_on();
    table.put_on();
}

fn main() {
    println!("Creating modern furniture:");
    create_furniture(&ModernFurnitureFactory);

    println!("\nCreating vintage furniture:");
    create_furniture(&VintageFurnitureFactory);
}