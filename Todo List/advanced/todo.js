//Ecmascript 6

let list = [];

const addToList = () => {
	
	let newTask = document.getElementById('new-task');
	let todoList =document.getElementById('list');
	let item = document.createElement('li');
	
	//add new task text to item
	item.innerText = newTask.value;
	
	//add remove functionality to item
	item.onclick = removeFromList.bind(this, list.length);
	 
	//add item to list 
	todoList.appendChild(item);
		
	//push it to array
	list.push(newTask.value);
	
	//reset the text 
	newTask.value = '';
	
	
}

const removeFromList = (index) => {
	 let todoList =document.getElementById('list');
	 
	 console.log(index);
	 list.splice(index, 1);
	 
	 todoList.innerHTML = "";
	 
	 reconstructList();
	 
	
} 

const reconstructList = () => {
	let todoList = document.getElementById('list');
	
	
		list.map((task, index) => {
		
		let item = document.createElement('li');
		
		item.innerText = task;

		item.onclick = removeFromList.bind(this, index);
		
		todoList.appendChild(item);
			
		})  
		
} 

