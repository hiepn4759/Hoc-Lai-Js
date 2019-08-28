var myCart = {
	name: 'huyen',
	weight: 45,
	height: 150,
	age: 21,
	eat: function(){
		console.log('Meo meo, my name is ', this.name);
	},
	eat1: function(myMouse){
		this.weight = this.weight + myMouse.weight;
		this.height += myMouse.height;
	}
};

var myMouse = {weight: 10, height: 10};

console.log('truoc khi chua an', myCart.weight, ': weight' , myCart.height);

myCart.eat1(myMouse);

console.log('sau khi an ' , myCart.weight, ': weight', myCart.height);