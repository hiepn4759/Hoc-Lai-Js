var products = [
	{ ten: 'hiep', gia: 120 , soluong: 2},
	{ ten: 'abc', gia: 100 , soluong: 3},
	{ ten: 'hiep', gia: 300 , soluong: 4},
	{ ten: 'hiep', gia: 500 , soluong: 4},
];

// 1. lay cac san pham
// 2. tinh tong tien con ton kho
// 3. chon cac san pham ton kho lon(tong tren 800)

function layThongTin() {
	products.filter(function(item) {
		console.log(item.ten)
	});
	products.reduce(function(x, y){
		console.log(x + (y.gia * y.soluong));
	}, 0);
}
layThongTin();