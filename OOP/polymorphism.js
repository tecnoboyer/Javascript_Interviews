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
    speak(intensity){
        console.log(`Dogs meow ${intensity}`);
    }
}

class Cat extends Animal{
    speak(intensity){
        console.log(`Cats meow ${intensity}`);
    }
}

const dog = new Dog();
const cat = new Cat();

function makeAnimalSpeak(animal,intensity ){
    animal.speak(intensity);
}

makeAnimalSpeak(dog,'loud'); //Here, makeAnimalSpeak works with any object that has a speak method. This is runtime polymorphism—the same method name behaves differently depending on the object


