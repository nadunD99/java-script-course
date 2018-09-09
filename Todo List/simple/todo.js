//Ecmascript 6

let list = [];

const addToList = () => {
	
	let newTask = document.getElementById('new-task');
	let todoList =document.getElementById('list');
	let item = document.createElement('li');
	
	//add new task text to item
	item.innerText = newTask.value;
	
	//add item to list
	todoList.appendChild(item);
		
	//push it to array
	list.push(newTask.value);
	
	//reset the text
	newTask.value = '';
} 

