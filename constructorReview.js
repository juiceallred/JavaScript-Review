//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function Animal(species, name, legs, color, food) {
  if(!Array.isArray(food)) {
    return console.error('expected Animal food to be an array')
  };
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function person(name, age, height, gender) {
  var newObj = {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
  return newObj
}

//Create a animal array and a person array.

  //code here
var animal1 = new Animal('dog', 'lou', 4, 'black', ['meat', 'dog food', 'table scraps', 'bugs']);

var person1 = person('Justin', 29, '6 ft 2 inches', 'male');

//Create two instances of Animal and push those into your animal array

  //code here
var animal2 = new Animal('cat', 'gus', 4, 'orange', ['meat', 'cat food', 'table scraps', 'bugs']);
var animal3 = new Animal('walrus', 'wally', 0, 'brown', ['fish', 'other fish', 'small fish', 'human flesh'])

//Create two instances of person and push those into your person array.

  //code here
var person2 = person('Sarah', 29, '5 ft 8 inches', 'female');
var person3 = person('Derek', 25, '6 ft 0 inches', 'male');

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  var chosenFood = this.food[Math.floor(Math.random()*this.food.length)];
  alert(this.name + " ate " + chosenFood)
}

animal2.eat();

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
