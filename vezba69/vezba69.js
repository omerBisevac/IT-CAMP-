// function setup() {
//     var name = document.querySelector("#name");
//     name.focus();
// }
// window.addEventListener("load",setup,false);
// function errorCheck(){
//     var na = n.value;
//     console.log(n)
//     if(na.length < 5) {
        
//         er.textContent = 'Not long enough...'
//     }
//     else {
//         er.textContent = ""
//     }
    
// }
// function tip(){
//     er.innerHTML = "Username must be at least 5 characters";    
// }
// var n = document.getElementById("name");
// var er = document.querySelector('#er');

// n.addEventListener('focus',tip);
// n.addEventListener("blur",errorCheck);

// var text = "some text is written";
// var part = /some/;
// console.log(part.test(text));
// var request = new XMLHttpRequest();
// request.open("GET","data.csv");
// request.setRequestHeader("Content-Type","text/plain");
// request.send(null);
function postMessage(msg){
    var request = new XMLHttpRequest();
    request.open("POST",log.php);
}