var reveal = document.querySelectorAll('.reveal');
var icons = document.querySelectorAll('.food');
var count = document.querySelector('#count');
var it = document.querySelectorAll('i');
var books = document.querySelector('.books');
var same = document.querySelectorAll('.same');
var carss = document.querySelector('.cars');
var ss = document.querySelector('.s');
var sp = Array.prototype.slice.call(same);
var test = Array.prototype.slice.call(icons);
var itag = Array.prototype.slice.call(it);
var rev = Array.prototype.slice.call(reveal);
var num = 0;
console.log(test);
rev.forEach(box => {
    box.addEventListener('click',function (event) {
       // carss.style.visibility = "hidden" &&
        box.classList.toggle('boxes');
        let s = setTimeout(function(){
            test.forEach(el =>{
                el.style.transition = '0.05s';
                el.style.visibility = 'hidden'
                // if(el == cars){
                //     carss.style.visibility = "visible";
                //     box.style.background =  'white';
                //     box.style.transition = 'all 0.3s ease';
                //     box.style.border = 'white';
                //     box.style.boxShadow =  '5px 5px 5px grey';
                //     clearInterval(s);
                // }
            })
            
            box.classList.toggle('boxes');
            
            clearInterval(s);
            
            //kad se okrene da ispita da li su iste
        },2000);
        test.map(i => {
            if(i === box.children.item(0)){
                i.style.visibility= 'visible';
                box.classList[1];
                
                //box.classList.toggle(box.children.item(0));
            }
            if(i === box.children.item(0)){
                
                count.innerText++;
                
                if(count.innerText > 12) {
                    count.innerHTML = 12;
                }
            }
            
            
        });
        
        // for(k of same){
            //     if( === k.textContent){
                
                //     }
                // }
                // console.log(box.children.item(0))
                // console.log(event.target)
                // console.log(test)
                // if(document.querySelector('.g') !== event.target && document.querySelector('.s') !== event.target){
                    //    box.style.background =  'white';
                    // box.style.transition = 'all 0.3s ease';
                    // box.style.border = 'white';
                    // box.style.boxShadow =  '5px 5px 5px grey';
                    //     clearTimeout(s)
                    // box.innerHTML = carss;
                    // };
                })
            })
            
            
            