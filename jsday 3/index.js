/** 
Write a function "opposite" which takes a number as input and returns the opposite number;
*/
function opposite(num){
  return -num;
}

/** 
Write a function "evenOrOdd" that takes an integer as an argument and returns "Even" for even numbers and "Odd" for odd numbers
*/
function evenOrOdd(num){
 return num %2 == 0 ? "Even" : "Odd"
  
 }
   console.log(evenOrOdd(144));

/** 
Write a function "addUpto" which takes a number as an argument and add each number upoto the given input number.
Example. addUpto(5) = 1 + 2 + 3 + 4 + 5 = 15
*/
function addUpto(num){
let total = 0;
 for(let i=1; i<num; i++){
   total = total+i;
 }
  return total;
}
console.log(addUpto(5));


/** 
Write a function "vowelCounter" that takes a string as arguments and returns the total number of vowels in that string as output.
Example: vowelCounter("abcde") = 2
*/
function vowelCounter(word){
let vowels = "aeiou";
let total=0;
  for(let i=0;i<word.length;i++){
    let letter= word[i];
  if(vowels.includes(letter)){
    total= total +1;
  } 
}
  return total;
}
console.log(vowelCounter("abcde"));
/** 
write a function "getMiddle" that takes a string as argument. Your job is to return the middle character of the given string. If the string's length is odd, return the middle character and if it is even, return the middle two characters.
*/
function getMiddle(word){
  word = word.toString();
  if(word.length % 2 == 0){
    //even
    let middleIndex =word.length/2;
    let beforeMiddle = middleIndex-1;
    return word[beforeMiddle]+word[middleIndex];
  }else{
    //odd
    let middleIndex = Math.floor(word.length/2);
    return word[middleIndex];
  }
  } 
console.log(getMiddle("123456"));
/** 
Write a function "XO" that checks if a string has same amount of 'x' and 'o'. 
Output must be boolean. 
Example: XO("ooxx") = true
XO(xxoxx) = false
*/
function XO(word){
  xCount = 0;
  oCount = 0;
  for(let i=0; i< word.length; i++){
if(word[i] == "X") {
  xCount = xCount+1;
}  else if(word[i] == "O"){
 oCount = oCount+1 ;
}
  }
return xCount == oCount;
}
console.log(XO("xoxoxo"));


/** 
Implement the facebook like system.
Write a function "likes" that takes an array as input containing the names of the people who likes an item. It must return the display text as follows:

1. likes([]) = "No one likes this";
2. likes(["Peter"]) = "Peter likes this"
3. likes(["Peter", "Jacob"]) = "Peter and Jacob like this"
4. likes(["Max", "John", "Mark"]) = "Max, John and Mark like this";
5. likes(["Alex", "Jacob", "Mark", "Max"]) = "Alex, Jacob and 2 others like this"
*/
function likes(names){
let size = names.length;
  if(size == 0){
       return "No one likes this";
  }else if (size== 1){
    return names[0]+ "like this";
  }else if (size == 2){
    return names[0]+ "and" + names[1]+ "like this";
  }else if (size ==3){
    let first =  names[0];
    let second = names[1];
    let third = names[2];
  
  return `${first},${second} and ${third}like this`;
  } else {
    let first =  names[0];
    let second = names[1];
    return `${first},${second} and ${names.length}l other like this`;
  }
}
console.log(likes("peter,jacob,mark,max"));
