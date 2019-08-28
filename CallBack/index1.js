/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love '
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. 
 * Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, 
 * chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

function sayHello(){
	console.log('i love');
}

function countAndDo(func){
	for(var i  = 1; i <= 10 ; i ++){
		console.log(i);
	}
	func();
}

countAndDo(sayHello);