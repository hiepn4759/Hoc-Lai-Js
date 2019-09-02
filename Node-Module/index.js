//node module

var  Mouse = require('./mouse');
var Cat = require('./cart');

var mickey = new Mouse('black');
var jerry = new Mouse('green');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);