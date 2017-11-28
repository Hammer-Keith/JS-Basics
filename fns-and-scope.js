//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
var isTyler = function(isItTyler){
  if(isItTyler === "Tyler"){
    return true;
  }
  else return false;
}//Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

/*
var getName = function(){
  prompt("what is name")
}
getName();
*/

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var getName = function(){
  return prompt("what is your name")
}

var welcome = function(){
  alert("Welcome, " + getName());
}
welcome();


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//a perameter is this      V
//  var welcome = function(param){}

//an argument is this V
//             welcome(65);


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


/*false
null
undefined
0
NaN
""
are falsey values plop em in an if statement to check if truethy
if (var){

}
*/

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

var myName = function(){
  return "Keith";
}


//Now save the function definition of myName into a new variable called newMyName

var myName = function(){
  return "Keith";
}
var newMyName = (myName);
alert(newMyName);

//Now alert the result of invoking newMyName

//alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function(){
  return function(){return "keith";};
}

//Now save the result of invoking outerFn into a variable called innerFn.

var outerFn = function(){
  return function(){return "keith";};
}
var innerFn = (outerFn());
console.log(innerFn());

//Now invoke innerFn.
