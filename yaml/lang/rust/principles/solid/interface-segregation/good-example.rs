trait Printer {
    fn print_document(&self);
}

trait Fax {
    fn fax_document(&self);
}

trait Scanner {
    fn scan_document(&self);
}

struct SimplePrinter;

impl Printer for SimplePrinter {
    fn print_document(&self) {
        println!("Printing document...");
    }
}

struct MultifunctionalPrinter;

impl Printer for MultifunctionalPrinter {
    fn print_document(&self) {
        println!("Printing document...");
    }
}

impl Fax for MultifunctionalPrinter {
    fn fax_document(&self) {
        println!("Faxing document...");
    }
}

impl Scanner for MultifunctionalPrinter {
    fn scan_document(&self) {
        println!("Scanning document...");
    }
}