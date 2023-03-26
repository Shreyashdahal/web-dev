console.log("Javascript")
// window.alert("hello");
//confirm dialog box
//let = window.confirm("are you sure you want to exit")
//console.log(answer);

//prompt dialog box
//let answer = window .prompt("what is your name")
//if(answer == "saumya sexit"){
  //  window.alert("you are correct");
//}
//console.log(answer)
//document 
//document.body.style.backgroundColor = "white";
//document.body.style.fontFamily = "sans-serif";
//document.body.style.text = "sans-serif";

//document.body.style.textAlign = "center";
//selector
//let movies = document.getElementsByClassName("movielist");
//movies.style.backgroundcolor = "cyan";
//console.log(movies);

//query selector
let movies = document.querySelector(".movielist");
movies.style.backgroundColor="red";

movies.classList.add("big-red");
//query selector all
let movies1 = document.querySelectorAll(".movielist")
movies1[1].style.backgroundColor = "blue"

//Event listener

document.addEventListener("click",function(){
window.alert("you are gay");
});

//let button = document.querySelector('.click');
//button.addEventListener("click",function(){
   // window.alert("you pressed a button");
//});
let button = document.querySelector('.dark');
button.addEventListener("click",function(){
 document.body.classList.toggle("dark");
 if(button.textContent == "Dark Mode"){
    button.textContent = "Light Mode";
 }else{
  button.textContent = "Dark Mode";  
 }
});



