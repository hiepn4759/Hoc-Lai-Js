var products = [
	{ name: 'dienThoai', price: 10 , stock: 1000},
	{ name: 'dienThoai1', price: 15 , stock: 500},
	{ name: 'dienThoai2', price: 19 , stock: 2000},
	{ name: 'dienThoai3', price: 14 , stock: 2000},
];

//1. sap xep gia theo thu tu giam gian
//2. sap xep hang ton kho nhieu nhat
var sortPrice = products.sort(function(gia1, gia2){
	return gia2.price - gia1.price;
});

console.log(sortPrice);

var sortStock = products.sort(function(stock1, stock2){
	return (stock2.price * stock2.stock) - (stock1.price * stock1.stock); 
});
console.log(sortStock);