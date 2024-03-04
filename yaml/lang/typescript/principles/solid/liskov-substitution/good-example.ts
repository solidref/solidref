class Bird {
  fly(): void {
    console.log("Bird is flying");
  }
}

class Duck extends Bird {
  quack(): void {
    console.log("Duck is quacking");
  }
}

class Goose extends Bird {
  swim(): void {
    console.log("Penguin is swimming");
  }
}

function makeBirdFly(bird: Bird): void {
  bird.fly();
}

const duck = new Duck();
const penguin = new Goose();

makeBirdFly(duck);     // Output: Bird is flying
makeBirdFly(penguin);  // Output: Bird is flying
