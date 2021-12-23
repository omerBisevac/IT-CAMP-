//Elements
var btn = document.getElementById("bt");
var todo = document.querySelector("#todo-list");
var words = document.getElementById("words").innerText = "";
var ins = document.querySelector("#ins");
var inp = document.querySelector("#words");
//
btn.addEventListener("click",(s) => {
    s.preventDefault();//stops refreshing website
    //creating element "li" after appedning it to "div" and "li"
    let newItem = document.createElement("li");
    ins.appendChild(newItem); 
    newItem.classList.add("btn");  
    console.log(newItem);
    newItem.innerHTML = inp.value;
    addLocal(inp.value);
    inp.value = "";
    todo.appendChild(newItem);
    //newItem.addEventListener("click",del);
    //check button
    var check = document.createElement("button");
    check.classList.add("check");
    check.innerHTML = '<i class="fas fa-check"></i>';
    newItem.appendChild(check);
    //dell button
    const dell = document.createElement("button");
    dell.innerHTML = '<i class="fas fa-trash-alt"></i>';
    dell.classList.add("del");
    newItem.appendChild(dell);
    dell.addEventListener("click",dellet);
    function dellet() {
        newItem.classList.add("falling");
        newItem.remove();
        
    }
    check.addEventListener("click",() => {
        newItem.style.opacity = "0.5";
        newItem.style.textDecoration = "line-through";
    })
})

//Adding element in local storage
function addLocal(todo){
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];

    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));;

}

//Removing element from Local storage
function removeLocalTodo(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.remove();


}