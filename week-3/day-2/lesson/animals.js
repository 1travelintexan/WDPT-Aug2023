class Animal {
  constructor(name, habitat, size) {
    this.name = name;
    this.habitat = habitat;
    this.size = size;
  }

  move() {
    return `The ${this.name} is moving...`;
  }
}

// Child class / extended class

class Cat extends Animal {
  constructor(name, habitat, size, numOfLegs) {
    super(name, habitat, size);
    this.numberOfLegs = numOfLegs;
    this.sound = "Meow";
  }

  saySomething() {
    return this.sound;
  }
}

const myCat = new Cat("Michi", "Houses", "Small", 4);

function showANumber(num) {
  return num;
}

console.log(myCat.move());
console.log(myCat.saySomething());
