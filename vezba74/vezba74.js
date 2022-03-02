// var main = document.querySelector("body");
// var container = document.querySelector(".container");
// var s = document.createElement("div");
// var img = document.createElement("img");
// var par = document.createElement("h1");
// var text = document.createElement("p");
// var b =  document.createElement("h3");
// var icon1 = document.createElement('p');
// var icon2 = document.createElement('p');
// var icon3 = document.createElement('p');
// var icon4 = document.createElement('p');
// var newDiv = document.createElement('div');
// par.innerHTML = "John Doe";
// par.style.color ="red";
// container.style.display = "flex";
// container.style.justifyContent = "center";
// container.style.alignItems = "center";
// main.style.background = "lightblue";
// s.style.border = "1px solid white";
// s.style.borderRadius = "10px";
// s.style.display = "flex";
// s.style.justifyContent = "center";
// s.style.alignItems="center";
// s.style.height = "60vh";
// s.style.width = "50vw";
// s.style.backgroundColor = "white";
// s.style.margin = "10px";
// s.style.flexDirection = "column";
// img.style.height = "15vh";
// img.style.width = "15vh";
// img.style.borderRadius = "30px";
// img.style.display = "flex";
// img.style.justifyContent = "center";
// img.style.alignContent = "center";
// img.style.padding= "10px";

// s.appendChild(img);
// img.src = "jump.jpg";
// s.appendChild(par);
// b.innerHTML ="Bettwe Visuals";
// s.appendChild(b);

// text.innerHTML="It atkes monumental imrpovement for <br /> us to change how we live our lives.<br />Design is the way we access that<br /> improvment.";
// s.appendChild(text);

// s.appendChild(newDiv);
// newDiv.style.display ="flex";
// newDiv.style.alignItems = "center";
// newDiv.style.justifyContent = "center";

// icon1.innerHTML = '<i class="fab fa-facebook"></i>';
// icon1.style.color = "red";
// icon1.style.padding ="10px;"
// icon1.style.maring = "10px";
// newDiv.appendChild(icon1);

// icon2.innerHTML = '<i class="fab fa-twitter"></i>';
// icon2.style.color = "red";
// icon2.style.padding ="10px;"
// icon2.style.maring = "10px";

// newDiv.appendChild(icon2);

// icon3.innerHTML = '<i class="fab fa-github"></i>';
// icon3.style.color = "red";
// icon3.style.padding ="10px;"
// icon3.style.maring = "10px";
// newDiv.appendChild(icon3);

// icon4.innerHTML = '<i class="fab fa-pinterest-p"></i>';
// icon4.style.color = "red";
// icon4.style.padding ="10px;"
// icon4.style.maring = "20px";

// newDiv.appendChild(icon4);
// // s.innerHTML = '<i class="fab fa-facebook"></i>';
// // s.innerHTML = '<i class="fab fa-twitter"></i>';
// // s.innerHTML = '<i class="fab fa-github"></i>';
// // s.innerHTML = '<i class="fab fa-pinterest-p"></i>';
// main.appendChild(s);
// console.log(s);

//CALL STACK -> web API -> EVENT QUE -> CALL STACK
// const second = () => {
//     console.log("Hello There!");
// }

// const first = () => {
//     console.log("Hi there!");
//     second();
//     console.log("The End");
// }

// first();

// var a = 10;
// var b = 20;
// console.log(a);
// setTimeout(() => {
//     console.log(a*b,"222");
// },3000)
// setTimeout(() => {
//     console.log(a*b);
// },1000)
// console.log(b);


// var text = "asdadasd";
// for(i=0;i<text.length;i++){
//     console.log(text.length);
//     console.log(text.length*text.length)
// }


//CALL BACK

function showResult(some) {
    console.log(some);
}

function myCalculator(num1,num2,myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5,5,showResult);


//addres of function
greeting = function (name) {
    console.log('hello' + name);
}

function Name(arg1) {
    var name = "omer";
    arg1(name);
}

Name(greeting);



function greet(name,myFunction) {
    console.log("Hello World!");
    myFunction(name);
}
function sayName(name) {
    console.log("Hello" + ' ' + name);
}

setTimeout(greet,200,'john',sayName);





// 1 nacin

const persons = ['Cristina','Ana'];
const messages = person.map((name) => {
    return `Hello, ${name}!`;
});
console.log(messages)



// 2 nacin

function map(array,callback) {
    console.log('map() starts');
    const mapperdArray = [];
    for(const item of array) {
        mapperdArray.push(callback(item));
    }
    console.log('map() completed');
    return mapperdArray;
}
function greet(name) {
    console.log('greet() called');
    return `Hello, ${name}!`;
}
const persons = ['Cristina'];
console.log(map(persons,greet));


let myPromise = new promise((myResolve,myReject) => {
    setTimeout(() => {
        myResolve("resolve");
        myReject("reject");
    },3000);
})

myPromise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("end")
    })