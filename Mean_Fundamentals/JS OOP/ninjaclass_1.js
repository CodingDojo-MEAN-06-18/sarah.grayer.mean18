function Ninja(name){
  var speed = 3; //private w/var
  var strength = 3; //private w/var
  this.health = 100; //not private, but default 100
  this.name = name; //passed in

  this.showStats = function(){
    console.log("Name: "+ this.name);
    console.log("Strength: "+ strength); //private variables just reference by variable name
    console.log("Speed: "+ speed);
    console.log("Health: "+ this.health);
    return this;
  }

  this.sayName = function(){
    console.log("This Ninja is " + this.name)
  };

  this.drinkSake = function(){
    this.health += 10;
    return this;
  }
}
var ninja1=new Ninja("Justin");
var ninja2=new Ninja("Sarah");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();
ninja2.drinkSake().drinkSake().showStats();
