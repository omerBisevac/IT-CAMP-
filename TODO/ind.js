var btn = document.getElementById("bt");
var todo = document.querySelector("#todo-list");
var words = document.getElementById("words").innerText = "";
console.log(words);
// console.log(words);
// console.log(todo);
// console.log(btn);
var inp = document.querySelector("#words");
console.log(inp);
btn.addEventListener("click",(s) => {
    s.preventDefault();
    var newItem = document.createElement("div");
    // newItem.style.border= "1px solid white";
    // newItem.style.margin = "5px";
    // newItem.style.padding = "20px ";
    // newItem.style.backgroundColor = "white";  
    newItem.classList.add("btn");  
    console.log(newItem);
    newItem.innerHTML = inp.value;
    inp.value = "";
    todo.appendChild(newItem);
    //newItem.addEventListener("click",del);
    var check = document.createElement("button");
    check.classList.add("check");
    check.innerHTML = '<i class="fas fa-check"></i>';
    newItem.appendChild(check);
    const dell = document.createElement("button");
    dell.innerHTML = '<i class="fas fa-trash-alt"></i>';
    dell.classList.add("del");
    newItem.appendChild(dell);
    dell.addEventListener("click",() => {
        newItem.remove();
    });
    check.addEventListener("click",() => {
           newItem.style.opacity = "0.7";
        //    inp.value
    })
})
// function del(e) {
//     todo.target.remove();
// }

localStorage.clear();
