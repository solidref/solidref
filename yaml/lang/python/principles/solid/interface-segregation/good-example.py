from abc import ABC, abstractmethod

class Printer(ABC):
    @abstractmethod
    def print_document(self):
        pass

class Fax(ABC):
    @abstractmethod
    def fax_document(self):
        pass

class Scanner(ABC):
    @abstractmethod
    def scan_document(self):
        pass

class SimplePrinter(Printer):
    def print_document(self):
        print("Printing document...")

class MultifunctionalPrinter(Printer, Fax, Scanner):
    def print_document(self):
        print("Printing document...")

    def fax_document(self):
        print("Faxing document...")

    def scan_document(self):
        print("Scanning document...")

# Usage
simple_printer = SimplePrinter()
simple_printer.print_document()

multifunctional_printer = MultifunctionalPrinter()
multifunctional_printer.print_document()
multifunctional_printer.fax_document()
multifunctional_printer.scan_document()
