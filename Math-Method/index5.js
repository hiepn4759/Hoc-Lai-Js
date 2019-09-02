/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {
	if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
		console.log('yes');
	}else{
		console.log('no')
	}
}

rightTriangle(3, 4, 5); // "Yes"

rightTriangle(1, 2, 3); // "No"
