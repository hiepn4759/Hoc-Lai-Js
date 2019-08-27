var numbers = [1,2,3,4];

var temp = numbers.map(function(num){
	return num*num;
});

console.log(temp);


var hinhChuNhat = [
	{width:10, height: 5},
	{width:10, height: 20},
	{width:4, height: 16}
];

var temp1 = hinhChuNhat.map(function(obj){
	var rObj = {};
	rObj[obj.width] = obj.height;
	return rObj;
});

console.log(temp1);