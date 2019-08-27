var PhaCaPhe = {
	Pha: function(onDone){
		console.log('Pha roi nhe....');
		onDone();
	}
};

var callB = function(){
	console.log('tit tit');
};	

console.log(PhaCaPhe.Pha(callB));