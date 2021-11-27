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
// var myarray = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//     var noSheeps = [];
//     var ovce = [];
//     var j;
// function sheep(arrayofSheeps) {
//         for(j of myarray){
//             if(j != false){
//                 ovce.push(j);
//         }
    
//     }
//         console.log(`There are ${arrayofSheeps.length} sheeps in total`);
// }
// sheep(ovce);


// var n = Number(prompt("unesite broj:"));
// if(n > 500000) {
//     console.log("");
// }
// function number(num) {
//     brojac = 0;
//     for(i=0;i<=n;i++){
//         if(n % i == 0) {
//             brojac++;
//         }
//     }
//     return brojac;
// }
// var s = number(n);
// console.log(s);



// function cookingTime(eggs){
//         return Math.ceil(eggs/5);
    

// }

// var s = cookingTime(10);
// console.log(s);


// function num(begin,end,step){
//     if(begin > end) {
//         return 0;
//     }
//    else {
//     var sum = 0;
//     for(i=begin;i<=end;i++){
//        sum = sum + i;
//        i=i+step-1;
//     }
//    }
// }
// var n = num(1,5,1);
// console.log(n);

// const sequenceSum = (begin, end, step) => {
//     // May the Force be with you
//     var sum = 0
//     for (let i = begin; i < end; i += step) {
//         sum += i   
//     }
//     return sum
//   };

// sequenceSum(1,20,3)
// sequenceSum(2, 6, 2)
// sequenceSum(1, 5, 1)

// function two(a,b){
//     var arr = [];
//     for(i=a;i<=b;i++){
    
//         arr.push(i);
    
//      }
//      return arr
// }
// var s = two(5,10);
// console.log(s);
// //

// function elevatirDistance(array) {
//     sum=0;
//     for(i=0;i < array.length;i++){
//         sum += Math.abs(array[i]-array[i+2]);
//     }
// }
// var my = function () {

// }

// my();




var person = {
    name : "Omer",
    last : "Bisevac",
    age: 18,
    sayHello: function () {
        console.log(this);//whole object , 
        console.log(this.name);
    }
};

person.sayHello();



a = [1,2,3,4,5];

var nova = a.map(function (element,index,array
    ){
    console.log(element);
    console.log(index);
}
)


console.log(nova);

function doubleNumbers(arr) {
       b=arr.map(s += i)
       // function (){
         //   return el* 2;

        //}
    }
