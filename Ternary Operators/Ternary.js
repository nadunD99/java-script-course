//Ecmascript 6

let animal = "cat";

const printToScreen = (prop) => {
/*	let food = undefined;
	if(animal === "cat"){
		food="fish"
	}else{
		food = "kibble"
	} */
	
	//one line if statement
	let food = animal === "dog" ? "fish" : "kibble";
	
	document.getElementById('answer').innerText = food;
}

printToScreen(animal);
