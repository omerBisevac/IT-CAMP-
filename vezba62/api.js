// var inp = document.querySelector("#ids");
// var btn = document.querySelector("#btn");
// var em = document.querySelector("#em");

// btn.addEventListener("click",function(){
//     let text;
//     if(document.querySelector("#ids").validity.rangeUnderflow){
//         text = "Value too small"
//     }
//     else {
//         text="INput OK";
//     }
//     em.textContent = text;
// })
// function displayTime(){
//     var elt = document.querySelector("#clock");
//     var now = new Date();
//     elt.innerHTML = now.toLocaleTimeString();
//     setTimeout(displayTime,1000);
// }
// window.onload = displayTime;
// var btnn = document.querySelector(".btnn",pict);
// var smg = document.querySelector(".smg");
// btnn.addEventListener("click",);
// async function pict() {
//     smg.style.backgroundImage = "url('circle.webp')";
// }
// var time = new Date();
// console.log(time.toLocaleTimeString());


//INTRODUCRION TO JAVASCRIPT API
fetch('https://reqres.in/api/products/3')
    .then(response => response.json())
    .then(data => console.log(data));



// fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
//     .then(response => response.json())
//     .then(data => console.log(data));


fetch('lake.jpg')
    .then(response => response.blob())
    .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        Image.src = objectURL;
    })




// const data = {
//     username : 'example'
// };
// fetch('https://example.com/profile', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//     console.log('Success:', data);
// })
// .catch((error) => {
//     console.error('Error:',error);
// })