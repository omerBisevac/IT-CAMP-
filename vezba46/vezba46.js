var n=0;
var unos = Number(prompt("Unesite broj:"));

while(unos != 1){
        var s=0;
        var n;
        s = unos * unos;
        var first = String(s).charAt(0);
        var scnd = String(s).charAt(1);
        n = Math.pow(first,2) + Math.pow(scnd,2);
//    n = Math.pow(s[0],2) + Math.pow(s[1],2);
//   console.log(n);
        
  alert(n);
}