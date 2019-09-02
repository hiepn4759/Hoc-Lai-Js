var today = new Date();
console.log(today);

var mouse = {
	weight: 0.2,
	getWeight: function(){
		return this.weight;
	}
};

console.log(mouse.getWeight());


//constructor
function Mouse(color, weight){
	this.type = 'mouse';
	this.color = color;
	this.weight =  weight;
}

var mouse1 = new Mouse('blu', 0.2);
var mouse2 = new Mouse('green', 0.5);
console.log(mouse1);
console.log(mouse2);


//Bai tap
var tom = {
	name: 'Tom',
	mang: [],
	eat: function(mouse){
		this.mang.push(mouse);;
		return this;
	}
};
var m1 = { name: 'm1'};
var m2 = { name: 'm2'};
var m3 = { name: 'm3'};

tom.eat(m1).eat(m2).eat(m3);
console.log(tom);


function Tom(name){
	this.name = name;
}

var tom1 = new Tom('m1');
var tom2 = new Tom('m2');
var tom3 = new Tom('m3');
console.log(tom1);
console.log(tom2);
console.log(tom3);