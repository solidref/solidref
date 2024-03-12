trait Fly {
    fn fly(&self);
}

struct Bird;
impl Fly for Bird {
    fn fly(&self) {
        println!("Bird is flying");
    }
}

struct Duck;
impl Fly for Duck {
    fn fly(&self) {
        println!("Bird is flying");
    }
}
impl Duck {
    fn quack(&self) {
        println!("Duck is quacking");
    }
}

struct Goose;
impl Fly for Goose {
    fn fly(&self) {
        println!("Bird is flying");
    }
}
impl Goose {
    fn swim(&self) {
        println!("Goose is swimming");
    }
}

fn make_bird_fly<T: Fly>(bird: &T) {
    bird.fly();
}

fn main() {
    let duck = Duck;
    let goose = Goose;

    make_bird_fly(&duck);    // Output: Bird is flying
    make_bird_fly(&goose);   // Output: Bird is flying
}