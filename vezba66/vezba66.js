var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var num = document.querySelector(".num")
start.addEventListener("click",starts);
stop.addEventListener("click",stopWorker);
let w;
function starts(){
    if(typeof(w) == "undefined"){
        w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event){
        num.innerHTML = event.data;
    }    

}
function stopWorker(){
    w.terminate();
    w = undefined;
}