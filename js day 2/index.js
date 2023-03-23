/** 
=============== Math methods ===============================
1. Math.PI
2. Math.round
3. Math.pow
4. Math.sqrt
5. Math.ceil
6. Math.floor
7. Math.random
*/
console.log(Math.PI);
console.log(Math.round(5.37));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(49));
console.log(Math.ceil(3.57));
console.log(Math.floor(3.57));
console.log(Math.random())





/** 
=============================== String Methods =======================
1. String Length
2. indexOf
3. uppercase
4. lowercase
5. split
6. slice
7. includes


*/
let abc = "abcdefghijklmnopqrstuvwxyz";
console.log("String length:", abc.length);
console.log(abc.indexOf("zad"));

const name = "envelope";
console.log(name.indexOf("lope"));

console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
let cities = "kathmandu,manchester,delhi,barcelona";
let newCities = cities.split(',');

console.log(newCities);
console.log(cities.slice(0, 9));
console.log(cities.includes("kathmandu"));
console.log();
console.log();


/** 
================= Array methods ============================
1. Convert to string = .toString()
2. Join items in array = .join("_")
3. Remove last element = .pop()
4. Length of array = .length
5. reverses the order = .reverse
*/
console.log(newCities.toString());
console.log(newCities.join("-"));
console.log(newCities.length);
console.log(newCities.reverse());
console.log(newCities.pop());
console.log(newCities);
console.log(newCities.push("kathmandu"));
console.log(newCities);

/** 
================= Date Object ===================================
1. new Date();
2. Get hour from date object
3. Get Minutes
4. get Year
5. 
*/
let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getFullYear());
console.log(Date.now());
let Time = Date.now();
console.log(newDate(time));


