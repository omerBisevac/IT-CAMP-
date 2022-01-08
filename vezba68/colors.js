//gloabal selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[tpye="range"]');
const currentHexes =document.querySelectorAll(".color h2");
let initialColors;


// functions



//color generator
function generateHex(){
    const letters = '#0123456789ABCDEF';
    let hash = '#';
    for(let i =0; i<6;i++){
        hash+=letters[Math.floor(Math.random()*16)];
    }
    return hash;
}

function randomColors(){
    colorDivs.forEach((div,index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    //add the color to the bg
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    })
}
randomColors()