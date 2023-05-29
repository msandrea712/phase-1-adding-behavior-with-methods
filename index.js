class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}
const cat = new Cat("Sasha");
console.log(cat.name); 
console.log(cat.speak());

class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}
const dog = new Dog("Rufio");
console.log(dog.name);
console.log(dog.speak());


class Bird {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  speak() {
    if (this.name === "Pablo") {
      return "It's me! " + this.name + ", the parrot!";
    } else if (this.name === "Mable") {
      return this.name + " says squawk!";
    } 
  }
}

const bird1 = new Bird("Pablo", "male");
const bird2 = new Bird("Mable", "female");

console.log(bird1.speak()); 
console.log(bird2.speak()); 
