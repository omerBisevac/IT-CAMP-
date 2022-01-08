const quotes = [
    '\"The purpose of our lives is to be happy.\"',
    '\"Life is what happens when you re busy making other plans\"',
    '\"Get busy living or get busy dying\"',
    '\"You only live once, but if you do it right, once is enough\"',
    '\"If you want to live a happy life, tie it to a goal, not to people or things\"'
]
var mot = document.querySelector(".mot");
var gets = document.querySelector('.get');
var quote = document.querySelector(".quotes");
console.log(quote);
gets.addEventListener("click",() => {
    var qut = Math.floor(Math.random()* quotes.length);
    
    quote.classList.add("make");
    quote.textContent = quotes[qut];
})
var night = document.querySelector(".night");
night.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.transition = "0.3s"; 
    quote.style.color = "white";
    mot.style.color = "white";
})
