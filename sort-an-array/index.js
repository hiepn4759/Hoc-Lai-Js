var numbers = [2, 9, 3, 4, 1];

var asc = numbers.sort(function(a, b){
	return b - a;
	// return a - b;
})

console.log(asc);


var employees = [
	{ name: 'Hiep', age: 21},
	{ name: 'Thu', age: 18},
	{ name: 'Long', age: 25},
];

var sortEml = employees.sort(function(giaTri1, giaTri2){
	return giaTri1.age - giaTri2.age;
});

console.log(sortEml);
