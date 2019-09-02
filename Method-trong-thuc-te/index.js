var users = [
	{name: 'Tom', gender: 'male'},
	{name: 'Hieu', gender: 'female'},
	{name: 'Cart', gender: 'male'},
	{name: 'Cho', gender: 'female'},
	{name: 'Ga', gender: 'male'}
];

var userList = $('#userList');
var genderFilter = $('#genderFilter');

render(userList, users);

genderFilter.on('change', function() {
	var selectdGender = this.value;
	var genderFilters = users.filter(function(user) {
		return user.gender === selectdGender;
	});
	render(userList, genderFilters);
});


function render(container, items) {
	var htmlItem = items.map(function(item){
		return '<li>' +item.name +'</li>';
	});
	var xuatHtml = htmlItem.join('');
	container.html(xuatHtml);
}


