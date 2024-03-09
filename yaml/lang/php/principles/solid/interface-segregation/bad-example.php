```php
<?php

// Interface segregation - Good example in PHP

interface Printer {
    public function printDocument();
}

interface Fax {
    public function faxDocument();
}

interface Scanner {
    public function scanDocument();
}

// OldPrinter only implements Printer as it can only print.
class OldPrinter implements Printer {
    public function printDocument() {
        echo "Printing document...";
    }
}

?>
```