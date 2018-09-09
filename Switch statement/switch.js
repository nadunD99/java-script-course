//Ecmascript 6

let answer = "jyyyim"; // chage name for differnt answers

const printAnswer = (solution) => {
	let rightAnswer;
	switch(solution){
		case "jim":
			rightAnswer = "Jim is right answer"
			break;
			
		case "tom":
			rightAnswer = "Tom is the  answer"
			break;
		
		default:
			rightAnswer = "A Name we do not know is the answer" 
		
	}
	document.getElementById('answer').innerText = rightAnswer;
}

printAnswer(answer)

