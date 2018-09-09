//Ecmascript 6
let arr1 = [1,2,3,4,5,6,7,8,9,10];

const sumUpArray = (arr) => {
let sum = 0;

/*	//for loop example
	for (let i=0; i < arr1.length; i++)
	{
		sum += arr[i];
	}
*/

//map method ---  comman use in reactjs 
/*	arr.map((number)=>{
		sum += number;
	}); 
*/
	
	//For each example----for each loop is slow
/*	arr.forEach((number)=>{
		sum += number;
	});
*/

//object model example	

let arr2 = [
	{
		name : "Amila",
		cash :25000
	},
	{
		name : "Perera",
		cash :32000
	},
	{
		name : "Kusal",
		cash :95000
	},
	{
		name : "Janith",
		cash :50000
	},
	{
		name : "Kaushalya",
		cash :75000
	}
];

const goThroughNames = (arr) => {
	const arrlength = arr.length;
	const list = document.getElementById('names');
	
	//for loop way
	/*for (let j=0; j< arrlength; j++)
	{
		let item = document.createElement('li');
		item.innerText = arr[j].name + " has $" + arr[j].cash;
		list.appendChild(item);
	}
	*/
	
	//same thing with map method

	arr.map((user)=>{
	let item = document.createElement('li');
	item.innerText = user.name + " has $" + user.cash;
	list.appendChild(item);
	
});
	
};

goThroughNames(arr2);





	
	document.getElementById('calculate').innerText = sum; 
}

sumUpArray(arr1);



