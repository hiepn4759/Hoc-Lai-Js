/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  var test = [];
  for(var i = 0 ; i < arr.length ; i ++) {
  	 test.push(Math.abs(arr[i]));
  }
  console.log(test);
}

positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]