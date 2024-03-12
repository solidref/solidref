trait Printer {
    fn print_document(&self);
}

trait Fax {
    fn fax_document(&self);
}

trait Scanner {
    fn scan_document(&self);
}

// Implementing only the necessary traits for OldPrinter
struct OldPrinter;

impl Printer for OldPrinter {
    fn print_document(&self) {
        println!("Printing document...");
    }
}

// Example use
fn main() {
    let printer = OldPrinter;
    printer.print_document();
    // The following lines are commented out because OldPrinter does not implement these actions.
    //printer.fax_document();
    //printer.scan_document();
}