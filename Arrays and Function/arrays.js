//Ecmascript 5
/*function submitUser(){
	
	
}*/


//Ecmascript 6
let namesArr = [];

//creating functon

/*const submitUser = () => {
	console.log("this is firing");
}*/

const submitUser = (actionType) =>{
	//step 1: collects the user's input
	let userInput = document.getElementById('user-input').value;
	console.log(userInput);
	
	//step 2: push that input into the array
	//namesArr.push(userInput);
	//console.log(namesArr);
	editArray(actionType, userInput)
	
	//step 3:Cleat the user's form field
	document.getElementById('user-input').value = "";
	
	//step 4: Print the array
	//document.getElementById('names').innerText = namesArr;
	printArray();
}


const editArray = (actionType, data ) => {
	if (actionType === "push"){
		namesArr.push(data);
		
		}else if(actionType === 'unshift' ){
		namesArr.unshift(data);
		
		}else if(actionType === 'pop'){
		namesArr.pop(data);
		
		}else if(actionType === 'shift'){
		namesArr.shift(data);
		
		}
		
	}
	
const removeUserAtIndex = () => {
	let arrIndex = parseInt(document.getElementById('array-index').value);
	console.log(typeof arrIndex);
	namesArr.splice(arrIndex, 1);
	
	//print array to DOM
	//document.getElementById('names').innerText = namesArr;
	printArray();
}

const printArray = () => {
	
	document.getElementById('names').innerText = namesArr;
	
}
