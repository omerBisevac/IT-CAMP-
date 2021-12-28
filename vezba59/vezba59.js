// const person = {
//     firstName: "Omer",
//     lastName: "Developer",
//     getName() {
//         console.log(this.firstName + this.lastName);
//     }
// };

// function registerUser(country,lang) {
//     this.getName();
//     console.log(`My country is ${country} and my language is ${lang}`);
// }

// //BIND
// // const register = registerUser.bind(person);
// // register("Serbia","Srb");

// registerUser.call(person,"Serbia","srb");


//CONSTRUCTOR FUNCTIONS
// function Todo(name,completed){
//     this.name = name;
//     this.copmleted = completed;
// }
// Todo.prototype.getElement = function () {
//     console.log(this.name);
// }

// const todo = new Todo('Buy Eggs',false);
// console.log(todo);




// function Name(name,last){
//     this.name = name;
//     this.last = last;
// }
// const name = new Name("Omer","Bisevac");
// console.log(name);


function Enemy(life,name,level){
    this.life = life;
    this.name = name;
    this.level = level;
}
Enemy.prototype.getInfo = function () {
    console.log(this.life,this.name,this.level);
}
Enemy.prototype.attack = function() {
    console.log("Attack");
}

var enemy = new Enemy(10,"Krax",100);
console.log(enemy);