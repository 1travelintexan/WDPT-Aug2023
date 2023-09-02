function sayHi() {
  console.log("Pika!");
}

const charmander = {
  name: "Charmander",
  type: "Fire",
  health: 300,
  moves: ["Slam", "Ember"],
};

// Template (Class)

class Pokemon {
  constructor(a, b, c, d) {
    this.name = a;
    this.type = b;
    this.health = c;
    this.sound = d;
    this.alive = true;
    this.region = "Kanto";
  }

  // Methods
  sayHi() {
    return this.sound;
  }

  receiveDamage() {
    this.health -= 10;
  }

  // Setters
  setType(newType) {
    this.type = newType;
  }

  // Getters
  getHealth() {
    return this.health;
  }
}

// Objects
const pikachu = new Pokemon("pikachu", "Electric", 200, "Pika!");
const bulbasaur = new Pokemon("bulbasaur", "Leaf", 150, "asdfasdf!");

console.log(pikachu.getHealth());

// pikachu.type = "Thunder";

pikachu.setType("Thunder");

pikachu.receiveDamage();

console.log(pikachu);
