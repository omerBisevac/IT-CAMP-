// var ime = prompt("Unesite ime:").trim();
// var prezime = prompt("Unesite prezime").trim();


// var person = {
//     name : ime,
//     last: prezime,
//     age: 18
// };
// console.log(person);
// delete person.age;

// console.log(person);

// var num = parseInt(prompt("Unesite broj:"));

// if (num > 0) {
//     console.log(num * (-1));
// }
// else {
//     console.log(num);
// }

var word = prompt("Unesite rec");
var newn = "";
for(i=word.length;i>0;i--){
    console.log(word[i]);
    newn += word[i]
   
}
if (newn == word) {
    console.log("Palindrom");
}
else {
    console.log("Nije palindrom");
}
//domaci napraviti program za izracuna faktorijal unetog broja;;;