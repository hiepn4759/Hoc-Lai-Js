/* 
  Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
*/

function trigonim(number) {
  var x = Math.sin(number);
  var y = Math.cos(number);
  var z = Math.tan(number);
  console.log(x, y, z);
}

trigonim(45);
// Sin(45) = 0.850
// Cos(45) = 0.525
// Tan(45) = 1.619