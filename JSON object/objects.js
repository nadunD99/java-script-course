//Ecmascript 5

//Ecmascript 6
let user = {
	username:"Please enter username",
	age:20,
	bio:"Please enter bio",
	Ulocation:"Please enter location"
	
	};
	
updateUser = (field, id) => {
	var input = document.getElementById(field).value;
	user[id] = input;
	updateDom();
	
	
}
	
updateDom = () => {
	document.getElementById('username').innerText = user.username; 
	document.getElementById('age').innerText = user.age;
	document.getElementById('bio').innerText = user.bio;
	document.getElementById('Ulocation').innerText = user.Ulocation;
	
}

updateDom();