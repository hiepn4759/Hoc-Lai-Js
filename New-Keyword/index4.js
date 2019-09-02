/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

function lengthObj(obj) {
    var dem = 0;
    for(x in obj){
      dem++;
    }
    return dem;
  }
  
  var student = {
    name: "Jerry", 
    age: 14,
    role: "student"
  }
  
  lengthObj(student); // length: 3