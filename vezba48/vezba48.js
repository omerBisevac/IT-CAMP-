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




// var person = {
//     name : "Omer",
//     last : "Bisevac",
//     age: 18,
//     sayHello: function () {
//         console.log(this);//whole object , 
//         console.log(this.name);
//     }
// };

// person.sayHello();



// a = [1,2,3,4,5];

// var nova = a.map(function (element,index,array
//     ){
//     console.log(element);
//     console.log(index);
// }
// )


// console.log(nova);

// function doubleNumbers(arr) {
//        b=arr.map(s += i)
//        // function (){
//          //   return el* 2;

//         //}
//     }

// var numbers = [56,4,78,2,4];

// numbers.forEach(function (el){
//     console.log(el);
// }
// );

//filter
// numbers = [1,3,4,5,12,6];

// fniz = numbers.filter(function (el) {
//     return el>2;
// });
// console.log(fniz);

// //every
// numbers = [12,3,4,5,1];
// ev = numbers.every(function (el){
//     return el > 5;
// })
// console.log(ev);
// some (da li svi elemtni ispunjavanju uslov;)




//indexOf
// numbers = ["orange",'apple','banana'];

// num = numbers.indexOf("apple");
// console.log(num);
// //includes
// fruits = ['apple','bannana','mango'];

// a = fruits.includes('apple');

// console.log(a);
// // find 
// numbers = [1,2,3,4,5,6,7];

// a = numbers.find(function (el) {
//     return el > 5;
// });


// console.log(a);
//
// var fun = ()=>{
//     console.log("arrow function");
// }
// fun();

// var numbers = [12,3,51,31,31,451];
// var s = numbers.filter((el) => {
//     return el > 5;
// })
// console.log(s);

//
// var people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]


// function provera(ljudi){
//     names = people.map((el) => {
//       if(el.age>18){
//           return `${el.name} moze`;
//       }
//       else {
//           return `${el.name} ne`;
//       } 
//     }
//     console.log(names);
//  }
//  provera(ljudi);
// var ar = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// var names = ar.map(function (el){
//     return el.name;
// });
// console.log(names);

// a = () => {
//     let k = "nesto";
//     console.log(k);
// };

// a();
// b=7;
// c = 11;
// k = "Hello World";
// console.log(k);
// scope ,clousers,hoisting
//dete ima pristup roditelju dok roditelj nema pristup detetu


//For a given lesson time in minutes (min) , write a function price to calculate how much the lesson costs
// var unos = Number(prompt("Unesite broja sati:"));
// var price = 30;


// function time(mins) {
//     sum = 30;
//     mins -=60;
//     while(mins>5){
//         sum+=10;
//         mins-=30;
//     }
//     return sum;
// };

// time(unos);
// var unos = Number(prompt("Unesite broj:"));
// function snumber(n) {
//     var specialNumbers = [0,1,2,3,4,5];
//     n  = n.toString();
//     for(i=0;i<n;i++){
//      if(specialNumbers.includes(parseInt(n[i]))){
//          return "Special";
//      }
//      else {
//         return "NOT!!";
//      }

//  }

    

// }
// console.log(snumber(unos));

// function isPOwerOfTwo(n) {
   

// }
// isPOwerOfTwo(333);