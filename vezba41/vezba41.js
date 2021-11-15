// var test = " something ";
// test.trim(); // removes spaces from the string
// //
// var num_to_str = 15;
// console.log(typeof num_to_str.toString());

// console.log("5" === 5);
// console.log(5 == 4);
// // &&
// // ||
// // !
// var fruits = ['apple','strawbberry','banana'];
// console.log(fruits);

// fruits[0] = "kiwi"

// var2 = fruits
// console.log("Ovo je prvi niz", fruits);
// console.log("ovo je drugi niz:", var2);


// //array methods w3schools
// //
// // array of strings
// var myArray2 = ['merceses','bmw','polo'];
// console.log(myArray2);
// //adding item to last position
// myArray2.push("audi");
// console.log(myArray2);
// // adding string to first position
// myArray2.unshift('porsche');
// console.log(myArray2);
// console.log(myArray2[0]);

// console.log(5 != 5) 

// var myarray = ["banana","apple","orange"];

// myarray3 = myarray.join("=");

// console.log(myarray);

// lastItem = myarray.pop();

// console.log(lastItem);

// firstItem = myarray.shift();
// console.log(firstItem);

// delete myarray[1];
// console.log(myarray)
// //
// //
// var myarray = ["banana","apple","orange"];
// var left = myarray.splice(0,1);

// console.log(myarray);
// console.log(left);

//new lecture

var mojaLista = ["Bmw","MErcedes","Audi","Polo",'Yugo'];
var oldCars = mojaLista.splice(3,2,"Porcsche","Bugatti");
console.log("Old cars " , oldCars);
console.log("New list",mojaLista);
var firstTwo = mojaLista.slice(0,2);
console.log(firstTwo);

if (5 > 2) {
    console.log("This is True");
}
var age = 18;
var potrebnih = 24;

if (age >= potrebnih) {
    console.log("bigger")
}
console.error("This is error");
