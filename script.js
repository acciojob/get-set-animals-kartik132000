// Animal Class
class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat Class (inherits from Animal)
class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

// Dog Class (inherits from Animal)
class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof

// Do not change the code below
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
