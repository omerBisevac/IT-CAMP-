//  var unos = parseInt(prompt("Unesite broj:"));
//  var unos2 = parseInt(prompt("Unesite drugi broj:"));

// function myf(a,b) {
//     console.log("Zbir dva broja je:", a + b);
// }

// myf(unos,unos2);
//napraviti funkciju koji uzima jedan argument i ona varca string sa prvim velikim slovom a sva ostala mala;
// var word = prompt("Unesite rec:");
// function big(rec){
    
//     var one = rec[0].toUpperCase();
//     var two = rec.slice(1);
//     var full = one + two.toLowerCase();
//     return full;
 
// }
// var chng = big(word);
// console.log(chng);

// function calculateDogAge(ageP){
//     ageP = ageP * 7;
//     console.log(ageP);
// }

// calculateDogAge(5);

// function celsiusToFahrenheit(celsius){
//    fahren =  (9/5 * celsius) + 32 ;
//     console.log(fahren);
// }
// celsiusToFahrenheit(10);

// function fahrenToCelsius(fharen) {
//    c = (fharen - 32) * 5/9;
//    console.log(c);
// }
// fahrenToCelsius(50);

// function age(fage,cages) {
//     var ag =   fage - cages;
//     var father = ag - cages;
//     console.log(father);
// }
// age(36,7);
// function trougao(ug1,ug2) {
//     var funk = 180 - ug1 - ug2;
//     console.log(funk);
// }
// trougao(30,60);
// function htol(hours) {
//     console.log(Math.floor(hours * 0.5));
// }
// htol(5);
var myarray = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    var noSheeps = [];
    var ovce = [];
    var j;
function sheep(arrayofSheeps) {
        for(j of myarray){
            if(j != false){
                ovce.push(j);
        }
    
    }
        console.log(`There are ${arrayofSheeps.length} sheeps in total`);
}
sheep(ovce);