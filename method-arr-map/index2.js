/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
// Khai báo tripple function ở đây

var numbers = [10, 5, 8];

function tripple(num){
	return num*3;
}

var  temp = numbers.map(tripple);

console.log(temp);