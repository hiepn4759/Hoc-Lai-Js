var arr = [1,2,3,4];

var test = arr.reduce(function(x1, x2){
	console.log(x1);
	console.log(x2);
	return x1 + x2;
});

 console.log(test);


// gio hang

var orders = [
	{ name: 'A', quantity: 2, price: 100},
	{ name: 'B', quantity: 1, price: 400},
	{ name: 'C', quantity: 5, price: 15}
];

var dem = 0;
var test1 = orders.reduce(function(accumulator, currentValue){
	console.log(accumulator);
	console.log(currentValue);
	return accumulator + (currentValue.quantity * currentValue.price);
},dem);

console.log(test1);
