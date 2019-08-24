var rectangle = {
	width: 10,
	height: 20,
	getWidth: function() {
		return this.width;
	},
	getHeight: function() {
		return this.height;
	},
	getArea: function() {
		return this.width * this.height;
	}
};


console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.getArea());