#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Forward declaration of structs to resolve circular dependency
typedef struct AnimalVisitor AnimalVisitor;
typedef struct Animal Animal;

// Visitor interface function pointers
typedef void (*visitLionFunc)(Animal*, AnimalVisitor*);
typedef void (*visitElephantFunc)(Animal*, AnimalVisitor*);
typedef void (*visitGiraffeFunc)(Animal*, AnimalVisitor*);

// Animal interface function pointer
typedef void (*acceptFunc)(Animal*, AnimalVisitor*);

struct AnimalVisitor {
  visitLionFunc visitLion;
  visitElephantFunc visitElephant;
  visitGiraffeFunc visitGiraffe;
};

struct Animal {
  char* name;
  acceptFunc accept;
};

typedef struct {
  Animal base;
} Lion;

typedef struct {
  Animal base;
} Elephant;

typedef struct {
  Animal base;
} Giraffe;

// AnimalFeeder functions
void visitLion(Animal* lion, AnimalVisitor* visitor) {
  printf("Feeding meat to %s.\n", lion->name);
}

void visitElephant(Animal* elephant, AnimalVisitor* visitor) {
  printf("Feeding hay to %s.\n", elephant->name);
}

void visitGiraffe(Animal* giraffe, AnimalVisitor* visitor) {
  printf("Feeding leaves to %s.\n", giraffe->name);
}

AnimalVisitor createAnimalFeeder() {
  AnimalVisitor feeder = {visitLion, visitElephant, visitGiraffe};
  return feeder;
}

// Animal accept functions
void Lion_accept(Animal* lion, AnimalVisitor* visitor) {
  visitor->visitLion(lion, visitor);
}

void Elephant_accept(Animal* elephant, AnimalVisitor* visitor) {
  visitor->visitElephant(elephant, visitor);
}

void Giraffe_accept(Animal* giraffe, AnimalVisitor* visitor) {
  visitor->visitGiraffe(giraffe, visitor);
}

// Constructors for animals
Lion* createLion(char* name) {
  Lion* lion = (Lion*)malloc(sizeof(Lion));
  lion->base.name = strdup(name);
  lion->base.accept = Lion_accept;
  return lion;
}

Elephant* createElephant(char* name) {
  Elephant* elephant = (Elephant*)malloc(sizeof(Elephant));
  elephant->base.name = strdup(name);
  elephant->base.accept = Elephant_accept;
  return elephant;
}

Giraffe* createGiraffe(char* name) {
  Giraffe* giraffe = (Giraffe*)malloc(sizeof(Giraffe));
  giraffe->base.name = strdup(name);
  giraffe->base.accept = Giraffe_accept;
  return giraffe;
}

// Zoo structure and functions
typedef struct {
  Animal** animals;
  int animalCount;
} Zoo;

void Zoo_addAnimal(Zoo* zoo, Animal* animal) {
  zoo->animals = realloc(zoo->animals, sizeof(Animal*) * (zoo->animalCount + 1));
  zoo->animals[zoo->animalCount++] = animal;
}

void Zoo_performOperation(Zoo* zoo, AnimalVisitor visitor) {
  for (int i = 0; i < zoo->animalCount; i++) {
    zoo->animals[i]->accept(zoo->animals[i], &visitor);
  }
}

int main() {
  Zoo zoo = {NULL, 0};

  // Adding animals to the zoo
  Zoo_addAnimal(&zoo, (Animal*)createLion("Simba"));
  Zoo_addAnimal(&zoo, (Animal*)createElephant("Dumbo"));
  Zoo_addAnimal(&zoo, (Animal*)createGiraffe("Melman"));

  // Creating a visitor
  AnimalVisitor feeder = createAnimalFeeder();

  // Feeding the animals
  Zoo_performOperation(&zoo, feeder);

  // Cleanup
  for(int i = 0; i < zoo.animalCount; i++) {
    free(zoo.animals[i]->name);
    free(zoo.animals[i]);
  }
  free(zoo.animals);

  return 0;
}