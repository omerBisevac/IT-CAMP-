var log = document.querySelector(".log");
var username = document.querySelector(".text");
var password = document.querySelector(".pass");
var add = document.querySelector(".add");
log.addEventListener("click",() => {
    if(password.value.length < 5){
        add.classList.add("er")
        add.innerHTML = "Error!\nToo Small!";
    }
    else if(password.value.length > 5){
        add.innerHTML = "";
        alert(`Username: ${username.value} \n Password: ${password.value}`);
    }
})
console.log(password.innerHTML.length);