//  var unos = parseInt(prompt("Unesite broj:"));
//  var unos2 = parseInt(prompt("Unesite drugi broj:"));

// function myf(a,b) {
//     console.log("Zbir dva broja je:", a + b);
// }

// myf(unos,unos2);
//napraviti funkciju koji uzima jedan argument i ona varca string sa prvim velikim slovom a sva ostala mala;
var word = prompt("Unesite rec:");
function big(rec){
    
    var one = rec[0].toUpperCase();
    var two = rec.slice(1);
    var full = one + two.toLowerCase();
    return full;
 
}
var chng = big(word);
console.log(chng);
