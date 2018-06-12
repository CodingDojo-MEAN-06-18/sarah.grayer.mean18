var array = ['cat', 'dog', 'fish'];

for(var index in array){
  //console.log(index) //prints index (0, 1, 2)
}

for(var index of array){ //gives element of array
  //console.log("this is ===>", index);
}

for (var thing of array.entries()){
  //console.log(index); entries creates an array with each element. prints an array with the index, element
  var index = thing[0];
  var element = thing[1];
  //console.log(index, element) //extracts and prints the index, element, no array
}

for (var[index, element] of array.entries()){
  //console.log(index, element); //shorter way to print above. destructure content, extracts and immediately puts in variable names.
}
