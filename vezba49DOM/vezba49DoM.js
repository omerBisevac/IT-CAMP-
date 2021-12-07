// var naslov = document.getElementById("naslov");
// naslov.innerText = "Heading";

// var elem = document.getElementsByTagName("h1");
// var brojac = 1;
// for(el of elem) {
//     el.innerText = brojac;
//     brojac++;
// }

// elements = document.querySelectorAll("h1");
// elements.innerText = "This";

// element = document.getElementById("hed1");
// element.style.background = "red";
// element.style.color = "white";
// element.style.margin = "10px";

// const handler = () => {
//     el = document.getElementById("hed2");
//     el.style.background = "black";
//     el.style.color = "white";
//     el.style.margin = "50px";
// }

// function change() {
//     var el = document.getElementById('text');
//     el.innerText="Different text";
//     el.style.fontFamily = "Georgia";
//     el.style.fontSize = "100px";
//     el.style.background = "black";
//     el.style.color = "white";

// }
function change() {
    var hed1 = document.getElementsByTagName("h2")
    for(i of hed1) {
        i.style.color = "yellow";
    }
}
function changet() {
    var hed2 = document.getElementsByTagName("h1");
    hed2 = Array.from(hed2);

    hed2.map((el) => {
        el.style.color = "lightblue";
    })
}

function handler() {
    document.getElementById("smthng").innerHTML = "<h1>Text</h1>";
}
//