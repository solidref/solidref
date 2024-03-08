<?php

interface SupportHandler {
    public function setNextHandler(SupportHandler $handler): void;
    public function handleRequest(string $request): ?string;
}

class Level1Support implements SupportHandler {
    private ?SupportHandler $nextHandler = null;

    public function setNextHandler(SupportHandler $handler): void {
        $this->nextHandler = $handler;
    }

    public function handleRequest(string $request): ?string {
        if (strpos($request, 'basic') !== false) {
            return 'Level 1 Support: Issue resolved at basic level.';
        } elseif ($this->nextHandler !== null) {
            return $this->nextHandler->handleRequest($request);
        } else {
            return null; // No more handlers in the chain
        }
    }
}

class Level2Support implements SupportHandler {
    private ?SupportHandler $nextHandler = null;

    public function setNextHandler(SupportHandler $handler): void {
        $this->nextHandler = $handler;
    }

    public function handleRequest(string $request): ?string {
        if (strpos($request, 'advanced') !== false) {
            return 'Level 2 Support: Issue resolved at advanced level.';
        } elseif ($this->nextHandler !== null) {
            return $this->nextHandler->handleRequest($request);
        } else {
            return null; // No more handlers in the chain
        }
    }
}

class Level3Support implements SupportHandler {
    public function setNextHandler(SupportHandler $handler): void {
        throw new Exception('Level 3 Support is the highest level and does not have a next handler.');
    }

    public function handleRequest(string $request): ?string {
        if (strpos($request, 'bug') !== false) {
            return 'Level 3 Support: Issue resolved at development level.';
        } else {
            return 'Level 3 Support: Unable to resolve the issue.';
        }
    }
}

function main() {
    $level1 = new Level1Support();
    $level2 = new Level2Support();
    $level3 = new Level3Support();

    $level1->setNextHandler($level2);
    $level2->setNextHandler($level3);

    $request1 = 'Fix basic login issue';
    $request2 = 'Debug advanced performance problem';
    $request3 = 'Investigate bug causing application crash';

    echo $level1->handleRequest($request1) . PHP_EOL;
    echo $level1->handleRequest($request2) . PHP_EOL;
    echo $level1->handleRequest($request3) . PHP_EOL;
}

/**
 * This PHP code demonstrates the Chain of Responsibility pattern in a support ticket system. 
 * It shows how different levels of support can either handle a request or pass it along the chain 
 * until it is handled. The SupportHandler interface ensures that all concrete handlers define how they 
 * set the next handler and deal with requests. Concrete implementations represent various support levels.
 * Exceptions are used to handle cases where actions are not valid, such as setting a next handler 
 * for the highest support level.
 */

main();

?>