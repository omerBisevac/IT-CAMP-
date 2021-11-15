// // unetiBrojGodina = prompt("Broj godina");

// // if (unetiBrojGodina >= 18) {
// //     alert("Punoletni ste");
// // }
// // else {
// //     alert("Maloletni ste");
// // }
// // var broj = prompt("Unesite nesto");
// // console.log(broj);
// // var  something = parseInt( broj);
// // console.log(typeof something);
// // //if 

// var i;
// for (i=0; i < 50; i = i + 1) {
//     console.log(i);
//     if (i == 25 ) {
//         break;
//     };
// };
// var yourName;
// do { 
// yourName = prompt("Your name:");
// } while (!yourName) {
//     console.log(yourName);
// }
// var j=0;
// var hash = "";
// for(j=0;j< 8;j++) {
//     hash = hash + "#";
//     console.log(hash);
// }

//  var k;
//  for (k=0; k < 101; k ++) {
//      if (k % 3 == 0) {
//          console.log("Fizz");
//       }
//       else if (k % 5 == 0) {
//           console.log("Bizz");
//       };
//        if (k % 3 == 0 && k % 5 == 0) {
//           console.log("FizzBuzz");
//       };
//       console.log(k);
//  };

// var g;
// var hash2 = "\t";
// for (g =0 ; g<9 || g % 2 == 0; g++) {
//     hash2 = hash2 + "#";
//     console.log(hash2);
// };

// var num = Number(prompt("Unesite num:"));
// if (num === 20) {
//     alert("broj je 20");

// }
// else {
//     alert("broj nije 20");
// }
var myList = ['limon' ,'milk','strawberry','onions'];

var unos = Number(prompt("Unesite 1 ako zelite da dodate\nUnesite 2 ako zelite da izbacite:"));
if (unos === 1) {
    var unos1 = prompt("Odlucili ste za 1\nUnesite jos jedan item;");
    if (unos1.length > 8) {
       
        alert("Upozorenje!Najvise 8 slova");
        
    }
    else {
        myList.push(unos1);
    }
    
    console.log(myList);
}
else if (unos === 2) {
    var something = unos.pop();
    console.log(myList);
}
    else {-
    alert("Uneli ste porgresnu vrednost!");
}