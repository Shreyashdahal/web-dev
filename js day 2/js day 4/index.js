/** 
Write a JavaScript program to find the largest of three given integers
large(a,b,c) = a
largest(4,7,1)= 7 
 */
function largest(a,b,c){
    if (a>b && a>c){
      return a;
    }
    else if(b>a && b>c){
      return b;
    }
    return c;
  }
  
  
  
  /** 
  Write a function that takes an integer minutes and converts it to seconds.
  Examples
  convert(5) ➞ 300
  convert(3) ➞ 180
  convert(2) ➞ 120
  */
  function convert(min) {
    return min*60;
    
  }
  console.log()
  
  
  /** 
  Write a function that takes the base and height of a triangle and return its area.
  triArea(3, 2) ➞ 3
  triArea(7, 4) ➞ 14
  triArea(10, 10) ➞ 50
  The area of a triangle is: (base * height) / 2
  */
  function area(base,height){
    return (base*height)/2 ;
  }
  /** 
  Create a function that takes the age in years and returns the age in days.
  Examples
  calcAge(65) ➞ 23725
  calcAge(0) ➞ 0
  calcAge(20) ➞ 7300
  */
  function age(years){
    return years*365
  }
  
  /** 
  You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
  
  Examples:
  points(1, 1) ➞ 5
  points(7, 5) ➞ 29
  points(38, 8) ➞ 100
  */
  function points(twoPoint,threePoint){
    return twoPoint * 2 + threePoint * 3;
  }
  /** 
  Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
  
      wins get 3 points
      draws get 1 point
      losses get 0 points
  
    Examples
  
  footballPoints(3, 4, 2) ➞ 13
  footballPoints(5, 0, 2) ➞ 15
  footballPoints(0, 0, 1) ➞ 0
  */
  function points(win,draw,lose){
    return win*3 + draw*1 + loss*0;
  }
  
  /** 
  Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
  
  To illustrate:
  
  profitableGamble(0.2, 50, 9)
  
  ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
  */
  function profitableGamble(prob,prize,pay){
    return prob * prize > pay ? true : false;
  }
  
  
  
  
  
  
  
  
  
  /** 
  A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
  
  Create a function which calculates the amount of fuel it needs, given the distance.
  Examples
  
  calculateFuel(15) ➞ 150
  
  calculateFuel(23.5) ➞ 235
  
  calculateFuel(3) ➞ 100
  
  Notes
      Distance will be a number greater than zero.
      Return 100 if the calculated fuel turns out to be less than 100.
  */
  
  
  
  
  
  
  
  
  
  
  /** 
  Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
  Examples
  
  comp("AB", "CD") ➞ true
  
  comp("ABC", "DE") ➞ false
  
  comp("hello", "edabit") ➞ false
  
  */
  function comparision(str1,str2){
    
    return str1.lenght === str2.length? true:false;
  }
  
  /** 
  Given two strings, firstName and lastName, return a single string in the format "last, first".
  Examples
  
  concatName("First", "Last") ➞ "Last, First"
  
  concatName("John", "Doe") ➞ "Doe, John"
  
  concatName("Mary", "Jane") ➞ "Jane, Mary"
  */
  function concat(firstName,secondName){
    return secondName + "," + firstName ;
  }
  
  
  
  /** 
  
  Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
  
      The person is at least 15 years old.
      They have parental supervision.
  
  The function accepts two parameters, age and isSupervised. Return a boolean.
  Examples
  
  acceptIntoMovie(14, true) ➞ true
  
  acceptIntoMovie(14, false) ➞ false
  
  acceptIntoMovie(16, false) ➞ true
  
  */
  function movie(age,isSupervised){
   return age >= 15 || isSupervised == "true"? true:false; 
  }
  
  
  /** 
  Write a program to reverse a sentence.
  Example: "Hello World" = "World Hello"
  */
  function reverse(sentence){
    let arr = sentence.split(" ");
    return arr.reverse().join(" ");
  }
  console.log(reverse("Hello World"));
  
  
  