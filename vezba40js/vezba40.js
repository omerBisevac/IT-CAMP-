console.log(1);
console.log("hello world")
console.log("1" + "1");
var name = "Omer Bisevac";
console.log(5**3);// 5 na 3.
console.log(10 % 2); //ostatak.
console.log(typeof "something");
//break

var text = "Something";
var numb = 200;
console.log(text);
console.log(text);
console.log(numb);
console.log(numb);
/// three variable with trhee different values , evaluates  by formula of 
var a = 5;
var b = 6;
var c = 7;
var Obim = a + b + c
console.log("Obim trougla je " + Obim + ".");
//da se izracuna povrsina pravougaonika 
var school = "Bratstvo";
// var lenOfSchool = school.length;
// console.log(lenOfSchool);
// 
// var charB = school[0];
// console.log(charB);
console.log(school.slice(0,4));
var last = school.slice(4);
console.log(last);
//replace
var rep = school.replace("t","d");
console.log(rep);
// upper,lower
var txt = "dobar DAN";
var txt_2 = "dobar dan"
console.log(txt.toLowerCase());
console.log(txt_2.toUpperCase());
//concat
var hel = "hello";
var con = hel.concat(" world");
console.log(con);
//javascript homework

// exercise 2.11

function changetxt() {
    var titl = document.getElementById('uniq');
    titl.innerHTML="Changed with button";
}
function pargh() {
    var btn = document.getElementById('con');
    btn.textContent = "this text is also changed";
}
let luigiDebt = 140;
luigiDebt = luigiDebt - 40;
console.log(luigiDebt);

console.log(Math.max(10,100));
console.log(Math.min(199,299));
var num = Number(prompt("Pick a Number: "));
console.log("Your number is " + num);

function col() {
    
    var back = document.body;
    back.style.backgroundColor = "green";
    
}