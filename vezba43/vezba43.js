// var unos = Number(prompt("Unesite broj: "));

// if (unos % 2 == 0) {
//     alert("Broj je paran");
// }
// else {
//     alert("broj je neparan");
// }
//

// function minNum (num1,num2) {
//     console.log(Math.min(num1,num2));
// }

// minNum(10,3);

// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     }
//     else {
//         return base * power(base,exponent -1 );
//     }


// }
// console.log(power(2,5));

// var myArray = ['bmw','mercedes','audi','polo'];
// var i;
// for (i = 0; i < myArray.length; i++) {
//     var all = myArray[i];
//     console.log(all);
// }

// var unos = Number(prompt("Unesite broj:"));
// var unos2 = Number(prompt("Unesite drugi broj: "));

// if (unos > unos2 ) {
//     alert("Prvi broj je najveci");
// }
// else if (unos === unos2) {
//     alert("jednaki su");
// }
// else {
//     alert("Drugi broj je najveci");
// }



// var unos = prompt("Unesite dan:");

// switch (unos.toLowerCase()) {
//     case  "ponedeljak":
//         console.log("danas je ponedeljak");
//         break;
//      case  "utorak":
//         console.log("danas je utorak");
//         break;
//     case  "sreda":
//             console.log("danas je sreda");
//             break
//      case  "cetvrtak":
//                 console.log("danas je cetvrtak ");
//                 break;
//       case  "petak":
//                     console.log("danas je petak");
//                     break;
//         case  "subota":
//                         console.log("danas je subota");
//                         break;
//         case  "nedelja":
//                             console.log("danas je nedelja");
//                             break;
//         default: 
//             console.log("Nista");


// }
//math.random() * 10;
//prompt 1 - 5 guess game

// for(i=0; i< 7; i++) {
//     console.log("HEllo");
// };

// var myArr = ['banana','kivi','apple','mango'];
// for(i=0;i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// var unos1 = Number(prompt("Unesite broj:"));
// var unos2 = prompt("Unesite ime:");

// for (i =0; i < unos1; i++) {
//     console.log(unos2);
// }


// var unos1 = Number(prompt("Unesite prvi broj:"));
// var unos2 = Number(prompt("Unesite drugi broj:"));

// for (i=unos1; i < unos2 ; i++ ) {
//     if (i % 2 == 0){
//         console.log("broje je paran",i);
//         }
//     else if (i % 2 == 1) {
//         console.log("broj je neparan",i);
//     }
// }
// var pocetnaVrednost = Number(prompt("Unesite pocetnu vrednost:"));
// var krajnjaVrednost = Number(prompt("Unesite krajnju vrednost:"));
// var nums = [];
// var s=0;
// for(i = pocetnaVrednost; i < krajnjaVrednost; i++){
//     nums.push(i);
//     s = s +i;
    
// }
// console.log(nums);
// console.log(s);
// var unos = Number(prompt("Unesite duzinu niza:"));
// var myArray2 = [];
// for(i=0;i<unos;i++){
//     var unos1 = prompt(`Unesite item ${i+1} u array:`);
//     if (unos1.length > 4) {
//         myArray2.pop(unos1);myArray2.push(unos1);

//     }
    
// }
// console.log(myArray2);

// for (i=0;i<myArray2.length;i++){
    
//     switch (myArray2[i]) {
//         case 'Banana':
//             console.log("Banana je zuta");
//             break;
//         case 'Jabuka':
//             console.log("Jabuka je crvena/zelena");
//             break;
//         case 'Ananas':
//             console.log("Ananas je zut");
//             break;
//         case 'Grozdje':
//             console.log("Grozdje je zeleno");
//             break;


//         default:
//             console.log("Voce ne postoji");
//     }
// }
// var myarr3 = ['bmw','audi','polo'];
// for( i of myarr3) {
//     console.log(i);
// }
// duzina = Number(prompt("Unesite duzinu:"));

// brojevi = [];

// for(i=0;i <duzina;i++){
//     broj= Number(prompt("Unesi broj:"));
//     brojevi.push(broj);
// }

// var maxNum = brojevi[0];

// for(broj of brojevi) {
//     if(broj > maxNum){
//         maxNum = broj;
//     }
// }
// console.log(maxNum);






//DOMACI
//Uneti pocetak i kraj , sve brojeve od pocetka do kraja dodati u niz.
//proci kroz niz i ako je broj paran zameniti ga sa  "paran"
//a akoje je neparan zameniti ga sa "neparan",ako je 0 ostaje 0


// var broj1 = Number(prompt("Unesite pocetni broj:"));
// var broj2 = Number(prompt("Unesite zadnji broj:"));
// var niz = [];
// for(i=broj1;i<=broj2;i++) {
//     niz.push(i);

// };
// for(i of niz){
//     if(i % 2 == 0){ 
//     i = "paran"
//      }
//      else if (i % 2 == 1){
//          i = "neparan";
//      }
//      console.log(i);
//    }
var unos = Number(prompt("Unesite broj:"));
var hash = "*"
var z="";
for(i=0;i<=unos;i++){
    for(i=0;i<=unos;i++){
        z = z + hash;
        console.log(z);
    }
}

// for(i=5;i>0;i--){
//     console.log(i);
// }

// var txt = "something";
// var txt2="";
// for(i=txt.length-1;i>= 0;i--){
//     txt2 += txt[i];
// }
// console.log(txt2);

var broj = Number(prompt("Unesite broj:"));
var drugi = Number(prompt("Unesite broj:"));

if (broj % drugi == 0){
    console.log("TRUe");
}
else {
    console.log("False");
}
//write a function which calculates the average of the 
//numbers in a given list.