var user = document.querySelector(".container");
var h = document.createElement("h2");
var pict = document.createElement('img');
var bel = document.createElement('h3');
pict.classList.add('mypict');
h.classList.add("name");
bel.classList.add("name2")

async function myData(){

    var myUrl = await fetch("https://api.github.com/users/omerBisevac");
    var data = await myUrl.json();
    console.log(data);
    pict.src = data.avatar_url;
    user.appendChild(pict);
    h.innerHTML = data.login;
    user.appendChild(h);
    bel.innerHTML = data.login;
    user.appendChild(bel);
}
myData();