// btn = document.getElementById("btn");

// btn.addEventListener("click",()=> {
//     document.getElementById("id").style.color = "red";
// })

var brp = document.getElementById("min");
var brm = document.getElementById("plus");
var pl5 = document.getElementById("plu");
var mins = document.getElementById("minl");
brm.addEventListener("click", () => {
    var br = document.getElementById("zer").innerText++  ;
})
brp.addEventListener("click", () => {
    var br = document.getElementById("zer").innerText--;
})
pl5.addEventListener("click",()=>{
    var br = document.getElementById("zer").innerText =parseInt(document.getElementById("zer").innerText)+5 ;

    
})
mins.addEventListener("click",()=>{
    var br = document.getElementById("zer").innerText -= 5;
})
function thiss() {
    var saved = document.getElementById("savednum");
    saved.innerText = br + " - "; 
}
thiss();
//  const frutiList = ['apple','banana','tomato'];
// const ulElement = document.querySelector('ul');
// frutiList.forEach((fruit) => {
//     const itemElement = document.createElement('li');
//     itemElement.textContent = fruit;
//     ulElement.appendChild(itemElement);
// }
// var list = document.getElementById("lis");
// var li = document.createElement('li');
// list.appendChild(li);
// console.log(list);
