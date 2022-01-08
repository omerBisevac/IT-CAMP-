//Getting elements(buttons) form html
// var btn = document.querySelectorAll(".btn");
var a = document.querySelector(".btn1")
var s = document.querySelector(".btn2");
const d = document.querySelector(".btn3");
const f = document.querySelector(".btn4");
const g = document.querySelector(".btn5");
const h = document.querySelector(".btn6");
var j = document.querySelector(".btn7");
const k = document.querySelector(".btn8");
const l = document.querySelector(".btn9");
var kick = document.querySelector(".kickk");
var hihat = document.querySelector(".hihat");
var snare = document.querySelector(".snare");
var openhat = document.querySelector(".openhat");
var tom = document.querySelector(".tom");
var crash = document.querySelector(".crash");
var perc = document.querySelector(".perc");
var clap = document.querySelector(".clap");
var ride =document.querySelector(".ride");
var bpm = 200;
// window.document.addEventListener("keydown",function(event){
    //     var dc = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    //     console.log(dc)
    
    // })
    var interval = (60/bpm)*1000;
    window.addEventListener("keydown",function(event){
        if(event.keyCode == "65"){
            a.classList.add("playing");
         clap.play();
          }
          else{
              return "";
          }
    },interval)
window.addEventListener("keydown",function(event){
   if(event.keyCode == "68"){
    d.classList.add("playing");
    kick.play();
   }
   else{
       return "";
   }
 },interval);
window.addEventListener("keydown",function(event){
    if(event.keyCode == "83"){
        s.classList.add("playing");
     hihat.play();
      }
      else{
          return "";
      }
},interval)

window.addEventListener("keydown",function(event) {
    if(event.keyCode == "74"){
        j.classList.add("playing");
    snare.play();
    }
    // else if(event.keyCode != "74"){
    //     window.document.addEventListener("keydown",function(event){
    //         var rand = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    //     })
    // }
},interval)
window.addEventListener("keydown",function(event){
    if(event.keyCode == "70"){
        f.classList.add("playing");
     openhat.play();
      }
      else{
          return "";
      }
},interval)
window.addEventListener("keydown",function(event){
    if(event.keyCode == "75"){
        k.classList.add("playing");
     tom.play();
      }
      else{
          return "";
      }
},interval)
window.addEventListener("keydown",function(event){
    if(event.keyCode == "71"){
       g.classList.add("playing");
     crash.play();
      }
      else{
          return "";
      }
},interval)
window.addEventListener("keydown",function(event){
    if(event.keyCode == "76"){
        l.classList.add("playing");
     perc.play();
      }
      else{
          return "";
      }
},interval)
window.addEventListener("keydown",function(event){
    if(event.keyCode == "72"){
        h.classList.add("playing");
     ride.play();
      }
      else{
          return "";
      }
},interval)
// window.addEventListener("keydown",function(event){
//     if(event.keyCode == "76"){
//         h.classList.add("playing");
//      perc.play();
//       }
//       else{
//           return "";
//       }
// },interval)