var items = ['Tom', 'Bill', 'Kim'];

//output '<Tom><Bill><Kim>'

var test = items.reduce(function(x, y){
	return  x + ('<' +y +'>');
});

// 0 + 'tom'
// 'tom' + 'bill;' //das
// 'das' + 'kim'
console.log(test);
