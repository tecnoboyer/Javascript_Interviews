// Polymorphism allows objects of different types 
// to be accessed through the same interface.
//  It enables a single function, method,
//  or operator to behave differently based on the object 
// it is acting upon.

class Animal {
    speak(){
        console.log("The animal makes a sound")
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cats meow");
    }
}

const doc = new Dog();
const cat = new Cat();

function makeAnimalSpeak(animal){
    animal.speak();
}

makeAnimalSpeak(doc);

