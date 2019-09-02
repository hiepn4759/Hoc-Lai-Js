var arr = [0,1,2,3,4];

function BinhPhuong(arr) {
	var kq = [];
	for(var i = 0; i < arr.length; i ++) {
		if(arr[i] % 2 === 0){
			kq.push(Math.pow(arr[i], 2));
		}
	}
	return kq;
}

console.log(BinhPhuong(arr));