"use strict";

var myTitle = document.getElementById("greeting");
var myHeading = document.getElementsByTagName("h1");
myHeading.addEventListener = ("click", function () {
  myHeading.innerHTML = "Welcome home!";
}); // manipulating a butons action in console and alert tab

var button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("Button clicked");
  console.log("welcome Home!");
  alert('hey you pocked me!');
  var elementa = document.getElementById("boss");
  elementa.innerHTML = "Welcome home!";
  var elements = document.getElementById("name");
  elements.innerHTML = "Welcome Home Sheriff, you are such a nice soul!";
}); // changing text in the webpage with Js

/*function grade(marks){
    if (marks<=50){
        return console.log("Fail");}
    else{
        return console.log("Pass")}
}
function gfg1(marks){
    let result=(marks<40)? "Unsatisfactory" :
        (marks<60)? "Average" :
            (marks<80)? "Good" : "Excellent";
    console.log(result);}
*/