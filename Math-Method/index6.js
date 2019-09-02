/* 
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
  var C = r * 2 * Math.PI;
  var S = r * r * Math.PI;
  console.log(C, S);
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27