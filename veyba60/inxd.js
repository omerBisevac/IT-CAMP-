var niz = [];
var unos = Number(prompt("Koliko boja zelite da uneste:"));

for(i=1;i<=unos;i++){
    var boja = prompt("Unesite boju:");
    niz.push(boja);
    
}

var bojee = document.querySelector("#boje");
// niz.forEach(function(element){
    //     // console.log(element);
    // })
    for(i=0;i<niz.length;i++){
        var s = document.createElement("li");
        s.innerText = niz[i];
        bojee.appendChild(s);
    
}

var btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click",() => {
    var boja = prompt("unesite boju koju ce te da izbacite:");
    //for(i=0;i<niz.length;i++){
        // if(boja != niz[i]){
        //  alert("greska");
        // }
        for(i=0;i<niz.length;i++){ 
        if(boja === niz[i]) {
            niz.values.remove();
            // s.remove(niz.value);
        }
    }
})
// for(i=0;i<niz.length;i++){
//     if(niz.length === 0){
//         console.log("greska");
//     }

// }