using System;
using System.Collections.Generic;

interface IAnimalVisitor {
    void VisitLion(Lion lion);
    void VisitElephant(Elephant elephant);
    void VisitGiraffe(Giraffe giraffe);
}

class AnimalFeeder : IAnimalVisitor {
    public void VisitLion(Lion lion) {
        Console.WriteLine($"Feeding meat to {lion.GetName()}.");
    }

    public void VisitElephant(Elephant elephant) {
        Console.WriteLine($"Feeding hay to {elephant.GetName()}.");
    }

    public void VisitGiraffe(Giraffe giraffe) {
        Console.WriteLine($"Feeding leaves to {giraffe.GetName()}.");
    }
}

interface IAnimal {
    void Accept(IAnimalVisitor visitor);
}

class Lion : IAnimal {
    private string name;

    public Lion(string name) {
        this.name = name;
    }

    public string GetName() {
        return this.name;
    }

    public void Accept(IAnimalVisitor visitor) {
        visitor.VisitLion(this);
    }
}

class Elephant : IAnimal {
    private string name;

    public Elephant(string name) {
        this.name = name;
    }

    public string GetName() {
        return this.name;
    }

    public void Accept(IAnimalVisitor visitor) {
        visitor.VisitElephant(this);
    }
}

class Giraffe : IAnimal {
    private string name;

    public Giraffe(string name) {
        this.name = name;
    }

    public string GetName() {
        return this.name;
    }

    public void Accept(IAnimalVisitor visitor) {
        visitor.VisitGiraffe(this);
    }
}

class Zoo {
    private List<IAnimal> animals = new List<IAnimal>();

    public void AddAnimal(IAnimal animal) {
        animals.Add(animal);
    }

    public void PerformOperation(IAnimalVisitor visitor) {
        animals.ForEach(animal => animal.Accept(visitor));
    }
}

class Program {
    static void Main(string[] args) {
        Zoo zoo = new Zoo();
        zoo.AddAnimal(new Lion("Simba"));
        zoo.AddAnimal(new Elephant("Dumbo"));
        zoo.AddAnimal(new Giraffe("Melman"));

        AnimalFeeder feeder = new AnimalFeeder();
        zoo.PerformOperation(feeder);
    }
}