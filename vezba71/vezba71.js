// var add = document.querySelector('.add');

// document.addEventListener('click',()=> {
//     for(i=0;i<20;i++){
//     s = document.createElement("div");
//     s.innerHTML = "TxT";
//     s.classList.add("two");
//     document.body.appendChild(s);
  
//   }
  
// })
var arr = [];
var word = document.querySelector(".word");
var s =word.innerText.split(' '); 
var new_string = '';
for(let i of s){
    if(i.length > 10){
        //arr.push(i.toUpperCase());
        new_string += i.toUpperCase();
    }
    else {
        new_string += i  + ' ';
    }
}
word.innerHTML = new_string;
console.log(arr);
// for(i=0;i<word.innerHTML.length;i++){
//     arr.push(word[i]);
// }
// console.log(arr);
string1.innerHTML = string1.innerHTML.split(" ").map(word => word.lenght > 10 ? word.toUpperCase() : word).join(" ");
//h1 ispod button da text nestane i pojavi se
