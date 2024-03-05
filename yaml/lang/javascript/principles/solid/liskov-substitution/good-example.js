class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Duck extends Bird {
  quack() {
    console.log("Duck is quacking");
  }
}

class Goose extends Bird {
  swim() {
    console.log("Penguin is swimming");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Goose();

makeBirdFly(duck);     // Output
makeBirdFly(penguin);  // Output
