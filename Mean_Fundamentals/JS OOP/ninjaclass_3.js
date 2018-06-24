class Ninja{
  constructor(name, health, speed, strength){
    this.name=name;
    this.health=100;
    this.speed=3;
    this.strength=3;
  }
  sayName(){
    console.log(`This ninja's name is ${this.name}`)
  }
  showStats(){
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Health: ${this.health}`);
  }
  drinkSake(){
    this.health += 10;
    console.log(`${this.name} is drinking sake and is adding 10 health!`)
    return this;
  }
}
class Sensei extends Ninja{ //Using inheritance to extend attributes from parent Ninja class
  constructor(name, health, speed, strength, wisdom){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake(); //can call on parent function here using super
    console.log(`${this.name} is speaking wisdom`);
    return this;
  }
}

const ninja1 = new Ninja("Sarah");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();

const Sensei1 = new Sensei("Chloe");
Sensei1.speakWisdom().showStats();
