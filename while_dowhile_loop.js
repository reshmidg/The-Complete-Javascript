// Loops
// Quick and easy way to do something repeatedly

/* Many types of loops but all do basically the same thing: 
repeat something (i.e an action) a set number of times (could even be 0).*/


// while loop

/*
	while(condition){
		statement
	}
*/

// noprotect - This will allow us to do loops like want to do

let numberOfloops = 0;
while(numberOfloops < 10){
	console.log('I am looping'); // Enters into a infinite loop
}


let numberOfloops = 0;
while(numberOfloops < 10){
	console.log('I am looping'); 
	console.log(numberOfloops);
	numberOfloops += 1;
}

/*
	"I am looping"
	0
	"I am looping"
	1
	"I am looping"
	2
	"I am looping"
	3
	"I am looping"
	4
	"I am looping"
	5
	"I am looping"
	6
	"I am looping"
	7
	"I am looping"
	8
	"I am looping"
	9
*/


let num1 = 0;
let num2 = 0;
while(num1 < 8){
	num1 += 1;
	console.log(num1);
	num2 += num1;
}
console.log(num2);

/*
	1
	2
	3
	4
	5
	6
	7
	8
	36
*/

let num1 = 0;

while(num1 < 100){
	num1 += 10;
	loopDeLoop();
}
function loopDeLoop(){
	console.log('I am looping!!!');
}
/*
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
	"I am looping!!!"
*/


let num1 = 0;
let num2 = 0;
while(num1 < 8){
	num1 += 1;
	num2 += num1;
	if(num1 === 6){
		break;
	}
	
}
console.log(num2);  // 21 instead of 36 which is without break


const names = ['Chris','Bob','Joe'];
let index = 0;

while(index < names.length){
	if(names[index] === 'Joe'){
		console.log(names[index]); // "Joe"
		break;
	}
	index += 1;
}

console.log(index); // 2


const names = ['Chris','Bob','Joe'];

function nameLooper(arr, userName){
	let index = 0;

	while(index < arr.length){
		if(arr[index] === userName){
			console.log(arr[index]); // "Joe"
			break;
		}
		index += 1;
	}
}

nameLooper(names, 'Chris');



// do...while statement 
/*
	do{
		statement
	  } while(condition)
*/


let shouldRunOnlyOnce = false;

do{
	console.log('Looping!!!'); // "Looping!!!"
	shouldRunOnlyOnce = false;
} while(shouldRunOnlyOnce);


let shouldRunOnlyOnce = true;
let index = 0;
do{
	console.log('Looping!!!'); 
	index += 1;
	if(index === 10){
		shouldRunOnlyOnce = false;
	}
} while(shouldRunOnlyOnce);
 
 /*
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
	"Looping!!!"
 */



 let condition;
 do{
 	const userInput = prompt('Enter q to exit.');
 	if(userInput === 'q'){
 		condition = false;
 	}else{
 		condition = true;
 	}
 }while(condition);



 let totalMoney = 100;

 do{
 	checkIfCanPurchase();
 }while(totalMoney > 500);

 function checkIfCanPurchase(){
 	if(totalMoney > 500){
 		console.log('Can purchase');
 	}else{
 		console.log('Cannot purchase');
 	}
 }
