trait Breakfast {
    // Template method
    fn prepare(&self) {
        self.boil_water();
        self.add_ingredients();
        self.cook();
        self.serve();
    }

    // Abstract methods to be implemented by structs
    fn add_ingredients(&self);
    fn cook(&self);

    // Concrete methods
    fn boil_water(&self) {
        println!("Boiling water...");
    }

    fn serve(&self) {
        println!("Breakfast is served!");
    }
}

struct OmeletteBreakfast;

impl Breakfast for OmeletteBreakfast {
    fn add_ingredients(&self) {
        println!("Adding eggs, cheese, and vegetables to the pan.");
    }

    fn cook(&self) {
        println!("Cooking the omelette until golden brown.");
    }
}

struct PancakeBreakfast;

impl Breakfast for PancakeBreakfast {
    fn add_ingredients(&self) {
        println!("Mixing flour, eggs, milk, and sugar to make the batter.");
    }

    fn cook(&self) {
        println!("Pouring the batter onto the griddle and flipping until cooked.");
    }
}

fn main() {
    println!("Preparing Omelette Breakfast:");
    let omelette_breakfast = OmeletteBreakfast;
    omelette_breakfast.prepare();

    println!("\nPreparing Pancake Breakfast:");
    let pancake_breakfast = PancakeBreakfast;
    pancake_breakfast.prepare();
}

/*
 * In the translation from the original class-based template method pattern to Rust, 
 * we use a trait to define the common behavior (`Breakfast`) for the template method 
 * and its default implementations for concrete methods. Structs (`OmeletteBreakfast`, 
 * `PancakeBreakfast`) implement this trait to provide specific behaviors for abstract 
 * methods (`add_ingredients`, `cook`). This approach maintains the core concept of 
 * the template method pattern while adapting it to Rust's trait and struct-based type system.
 */