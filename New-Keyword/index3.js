/* 
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student
  và in ra kết quả
*/

var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
};

function updateObj(obj, x) {
  delete obj[x];
  console.log(obj);
}

updateObj(student, 'rollno'); 
/* 
    var student = { 
      name : "David Rayy", 
      sclass : "VI", 
    }; 
*/