trait AnimalVisitor {
    fn visit_lion(&self, lion: &Lion);
    fn visit_elephant(&self, elephant: &Elephant);
    fn visit_giraffe(&self, giraffe: &Giraffe);
}

struct AnimalFeeder;

impl AnimalVisitor for AnimalFeeder {
    fn visit_lion(&self, lion: &Lion) {
        println!("Feeding meat to {}.", lion.get_name());
    }

    fn visit_elephant(&self, elephant: &Elephant) {
        println!("Feeding hay to {}.", elephant.get_name());
    }

    fn visit_giraffe(&self, giraffe: &Giraffe) {
        println!("Feeding leaves to {}.", giraffe.get_name());
    }
}

trait Animal {
    fn accept(&self, visitor: &dyn AnimalVisitor);
}

struct Lion {
    name: String,
}

impl Lion {
    fn new(name: &str) -> Lion {
        Lion { name: name.to_string() }
    }

    fn get_name(&self) -> &str {
        &self.name
    }
}

impl Animal for Lion {
    fn accept(&self, visitor: &dyn AnimalVisitor) {
        visitor.visit_lion(self);
    }
}

struct Elephant {
    name: String,
}

impl Elephant {
    fn new(name: &str) -> Elephant {
        Elephant { name: name.to_string() }
    }

    fn get_name(&self) -> &str {
        &self.name
    }
}

impl Animal for Elephant {
    fn accept(&self, visitor: &dyn AnimalVisitor) {
        visitor.visit_elephant(self);
    }
}

struct Giraffe {
    name: String,
}

impl Giraffe {
    fn new(name: &str) -> Giraffe {
        Giraffe { name: name.to_string() }
    }

    fn get_name(&self) -> &str {
        &self.name
    }
}

impl Animal for Giraffe {
    fn accept(&self, visitor: &dyn AnimalVisitor) {
        visitor.visit_giraffe(self);
    }
}

struct Zoo {
    animals: Vec<Box<dyn Animal>>,
}

impl Zoo {
    fn new() -> Zoo {
        Zoo { animals: Vec::new() }
    }

    fn add_animal(&mut self, animal: Box<dyn Animal>) {
        self.animals.push(animal);
    }

    fn perform_operation(&self, visitor: &dyn AnimalVisitor) {
        for animal in &self.animals {
            animal.accept(visitor);
        }
    }
}

fn main() {
    let mut zoo = Zoo::new();
    zoo.add_animal(Box::new(Lion::new("Simba")));
    zoo.add_animal(Box::new(Elephant::new("Dumbo")));
    zoo.add_animal(Box::new(Giraffe::new("Melman")));

    let feeder = AnimalFeeder;
    zoo.perform_operation(&feeder);
}