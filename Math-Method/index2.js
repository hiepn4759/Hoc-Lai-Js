/* 
  Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
  Làm tròn điểm trung bình
*/

function average(arr) {
  var sum = arr.reduce(function(a,b){
  	return a + b;
  });
 var tB = Math.ceil(sum / arr.length);
 console.log(tB);
}

average([8, 8 , 6.75]) // 8