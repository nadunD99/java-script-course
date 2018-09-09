//Ecmascript 6

let sampleobject = {
	
	username: "tingo",
	bio: "happy time eater",
	intrests: ["chains", "cartoons", "movies"],
	age: 24,
	weight: 195,
	sex: "Yes Please"
}

const iterator = (obj) => {
	const keyList = document.getElementById('keys');
	const valuesList = document.getElementById('values');
	for (let key in obj){
		let keyItem = document.createElement('li');
		keyItem.innerText = key;
		
		let valueItem = document.createElement('li');
		valueItem.innerText = obj[key];
		
		keyList.appendChild(keyItem);
		valuesList.appendChild(valueItem);
		
	}
	
}

iterator(sampleobject);