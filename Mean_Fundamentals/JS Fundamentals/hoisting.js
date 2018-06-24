//1 (undefined)
console.log(hello); //hello undefined at this point
var hello='world';


//2 (magnet)
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle); //will log this needle=magnet. Haystack above never logged outside of function.
}
//console.log(needle); this would print haystack, as defined outside of the function


//3 (super cool)
var brendan = 'super cool';
function print(){ //this function is never called, so 'only okay' doesn't ever take effect
	brendan = 'only okay';
	console.log(brendan);
}
//print(); if function were to be called, would print 'only okay' here, and on next line as brendan is now defined as such going forward rather than 'super cool'
console.log(brendan); //prints 'super cool', as defind outside of function


//4 (chicken, half-chicken)
var food = 'chicken';
console.log(food); //prints chicken
eat(); //calls function below
function eat(){
	food = 'half-chicken';
	console.log(food); //prints half-chicken
	var food = 'gone'; //never printed
}
//console.log(food); this would print chicken again, as a variable defined within function would not affect outside of it


//5 (error)
//mean(); //not a function. doesn't work to define variable mean as a function
console.log(food); //food not declared yet
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);


//6 (undefined, rock, r&b, disco)
console.log(genre); //not defined yet here
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre); //prints rock
	var genre = "r&b";
	console.log(genre); //prints r&b
}
console.log(genre); //prints disco from line 52


//7 (san jose, seattle, burbank, san jose)
dojo = "san jose";
console.log(dojo); //prints san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo); //prints seattle
	var dojo = "burbank";
	console.log(dojo); //prints burbank
}
console.log(dojo); //prints san jose again, function doesn't change outside variables

//8 (error)
console.log(makeDojo("Chicago", 65)); //runs functio and prints output
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {}; //dojo is a constant variable, can't change it
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now"; //this will throw an error, as you can't change the constant within the function
        }
        return dojo;
}
