let myTitle = document.getElementById("greeting");
let myHeading = document.getElementsByTagName("h1")
myHeading.addEventListener = ("click", function() {
    myHeading.innerHTML = "Welcome home!";
})
// manipulating a butons action in console and alert tab
let button = document.getElementById("myButton")
button.addEventListener("click", function()  {
    console.log("Button clicked");
    console.log("welcome Home!");
    alert('hey you pocked me!');
    var elementa = document.getElementById("boss")
    elementa.innerHTML = "Welcome home!";
    var elements = document.getElementById("name");
    elements.innerHTML = "Welcome Home Sheriff, you are such a nice soul!";
});
// workig with arrays
let map1 = new Map();
map1.set("FirstName", "Sheriff");
map1.set("LastName", "Jack");
map1.set("Email", "jacobo@gmail.com");
map1.set("friend1", "Roy");
map1.set("friend2", "Mills");
console.log(map1);

// finding out te attributes in the array by name
console.log("map1 have FirstName: " + map1.has("FirstName"), + map1.get("FirstName"));





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

