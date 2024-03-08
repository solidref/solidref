class Machine:
    def print_document(self):
        raise NotImplementedError

    def fax_document(self):
        raise NotImplementedError

    def scan_document(self):
        raise NotImplementedError

class OldPrinter(Machine):
    def print_document(self):
        print("Printing document...")

    def fax_document(self):
        raise Exception("This printer cannot fax documents.")

    def scan_document(self):
        raise Exception("This printer cannot scan documents.")
