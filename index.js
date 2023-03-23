/** Printing Hello World in Javascript console */
console.log("hello world my name is saumya man shrestha's friend");
console.log(1+1);

/* ================== Data Types ========================
 There are eight basic data types in javascript.
  1. String
  2. Number
  3. Boolean
  4. Object
  5. Null
  6. Undefined
  7. Symbol
  8. BigInt
*/

/* ============ String ======================
Anything inside the quotation marks is a string.
There are three diffrent types of quotation marks:
1. Double Quotation ("")
2. Single Quotation ('')
3. Backtick Quotation (``);

There is no diffrence between 1 and 2. But with backtick quotation we can write javascript quote inside using ${} symbol.
*/
console.log("hello world ${1+1}");
console.log('hello form single quote');
console.log(`hello from blacktick ${1+1}`);


/* ================== Numbers ======================
  There is no separate integer or floating point number in javascript.      Every mathematical number is of Number data type in js.
*/
console.log(-1);
console.log(3.3333);
/* ============== Boolean =========================
  Takes one of the two values: true or false
*/
console.log(true);
console.log(false);

/* ============== How to check data type ===========
 typeof operator is used to check the data type of a data
 */

console.log(typeof 2.2)
console.log(typeof false)

/* 
======================variables==========================*/
let name= "steven smith";
let over = 10;
let win = true;

console.log(name);
console.log(name);
console.log(name);



/*=================Constans============================= */
const birth_year= "1998";
const PI = 3.14159
/* =============== If Statement =====================
*/
let israining = false ;
let isgoingtorain = true;
if(israining){
  console.log("rihana umbrella");
}
else if(isgoingtorain) {
  console.log("rihana umbrella");
}
else
 {
  console.log("go out and enjoy the weather");
}

/* ================ Comparision Operators ====================
  1. is greater than (>)
  2. is less than (<)
  3. is equal to (==)
  4. is strictly equal to (===)
  5. is greater than or equal to (>=)
  6. is less than or equal to (<=)

*/
const num = 10;
if(num>0) {
  console.log("positive");
} else if (num<0){
  console.log("negative");
} else if(num == 0) {
  console.log("ZERO");
}

/* Create a grade calculator that prints "Distinction" if grade is greater than or equal to 80, "First Division" if grade is greater than or equal to 60 and less than 80, "Second Division" if grade is greater than 50 and less than 60, otherwise "Fail" 
*/
const score = 0;
if(score>= 80){
  console.log("Distinction")
}else if (score>=60 && score<80){
  console.log("FIrst division")
}else if (score>50 && score<60){
  console.log("second division")
}else 
  console.log("FAIL")

/* ================= Logical Operators ====================== 
1. AND Operator (&&) returns true if all conditions are true
2. OR Operaor (||) returns true if one of the conditions is true
3. NOT Operator (!) returns opposite of the given value
*/


/* ============== For Loops ==============================
Used when same task is being done multiple times.  Like printing a name 100 times.
for (starting_statement; stopping_condition; action) {
  // some task
}
*/
 
 let i= 10;

for(i;i>= 0;i = i- 1){
  console.log(i);
}

/* ========================= While Loops ====================== 
  Same use cases as for loops.
  // starting condition
  while(stopping_condition) {
    // some task
    

    // action
  }
*/
let start = 0;
while(start< 10){
  console.log(start);
  start = start+ 1;
}

/* ====================== Functions ============================
  Functions are like machines that takes some input, process them and produce some output.
  
  function name_of_function(input) {
    return output;
  }

*/
function printer(name){
  console.log(`Your name is ${name}`)
}
let output = printer("Mitcheal Santner");
console.log(output);

function add(num1,num2){
  return num1+num2;
  
}
const subtract =  (num1,num2) => {
  return num1-num2;
}
let result= add(5,6);

/* ==================== Object =====================================
Object are like collection of diffrent data. Like in real world, everything is an object and every object has some properties. Like car is a object and has properties like color, brandName, Model etc.
Similarly, Object is Javascript is just like real world objects that has some properties and values.
*/
const student = {
  name : "Marcel Sabitzer",
  roll: 69,
  greet: function(){
  return "good morning" ;
  }
}
console.log(student.name, student.roll)
console.log(student.greet());

/* ============================= Array ============================
Arrays are also the collection of diffrent data, but unlike objects they don't need properties to store data.
let favorite_animes = ["Death Note", "Steins Gate", "Classroom of Elite"];
*/
const fruits = ["apple", "saumya",123,{id:1}];
fruits.push="strawberry";
fruits.pop="strawberry";

const top_10_movies = [
  {
  id: 1,
    name:"aftersun",
    genre:"drama",
},
  {
    id:2,
    name: "before sunrise",
    genre: "romance"
    
  }
]
console.log(top_1-_movies[0].name);
console.log(typeof top_10_movies);
/**  Problem 1
Write a function named "fullName" that takes input "firstName" and "lastName" and returns the fullName;
*/

/** Problem 2 
Write a function named "reverseMachine" that takes some string as input and return the reverse of that string.
Like: input = "dog" output = "god"

*/