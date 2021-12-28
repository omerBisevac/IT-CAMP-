floors = 3;
function elevator(left,right,call){
    call = Number(prompt("Unesite broj sprata:"));
    if(call > left && call > right){
        return "left";
    }
    else if(call > left && right >= call){
        return right;
    }
    else if(call === 0 && left === 0 && right === 0){
        return "left";
    }
    else {
        return right;
    }
}
