// Switch statement

/*
switch(expression){
	case value1:
		statement to be executed when result of expression
		matches value1
		break;
	case value2:
		...
		break;
	case value3:
		...
		break;
	default:
		break;
}

*/


const myFruit = 'apple';

if(myFruit === 'apple'){
	console.log('Awesome! I love apples.');
}else if(myFruit === 'orange'){
	console.log('Oranges are cool.');
}else if(myFruit === 'pear'){
	console.log('Pears are good too');	
}else{
	console.log('That sounds OK too.');
}



const myFruit = 'apple';
switch(myFruit){
	case 'apple' :
		console.log('Great! I love Apples'); // Great! I love Apples
		break;
	case 'orange' :
		console.log('Good choice.');
		break;
	case 'banana' :
		console.log('OK');
		break;
	default :
		console.log('I didnt understand that for sure.');
		break;
}


const myFruit = 'orange';
switch(myFruit){
	case 'apple' :
		console.log('Great! I love Apples'); 
	case 'orange' :
		console.log('Good choice.');
	case 'banana' :
		console.log('OK');
	default :
		console.log('I didnt understand that for sure.');
}

// "Good choice."
// "OK"
// "I didnt understand that for sure."


function fruitLogger(fruit){
	switch(fruit){
		case 'apple' :
			console.log('Great! I love Apples'); 
			break;
		case 'orange' :
			console.log('Good choice.');
			break;
		case 'banana' :
			console.log('OK');
			break;
		default :
			console.log('I didnt understand that for sure.');
			break;
	}
	console.log('Break out of switch statement');
}

fruitLogger('apple'); 
// "Great! I love Apples"
// "Break out of switch statement"


function fruitLogger(fruit){
	switch(fruit){
		case 'apple' :
			console.log('Great! I love Apples'); 
			return; // This will return the function
		case 'orange' :
			console.log('Good choice.');
			break;
		case 'banana' :
			console.log('OK');
			break;
		default :
			console.log('I didnt understand that for sure.');
			break;
	}
	console.log('Break out of switch statement');
}

fruitLogger('apple'); 
// "Great! I love Apples"


function fruitLogger(fruit){
	switch(fruit){
		case 'apple' :
		case 'orange' :
		case 'banana' :
			console.log('Great! I love fruit.');
			break;
		default :
			console.log('I didnt understand that for sure.');
			break;
	}
	console.log('Break out of switch statement');
}

fruitLogger('orange'); 
// "Great! I love fruit."
// "Break out of switch statement"



function fruitLogger(fruit){
	switch(fruit){
		case 'apple' :
		break;
		case 'orange' :
		case 'banana' :
			console.log('Great! I love fruit.');
			break;
		default :
			console.log('I didnt understand that for sure.');
			break;
	}
	console.log('Break out of switch statement');
}

fruitLogger('apple'); 
// "Break out of switch statement"



function numChecker(num){
	let value;
	switch(num){
		case 0:
		case 1:
		case 2:
			value = 'low range';
			break;
		case 3:
		case 4:
		case 5:
			value = 'mid range';
			break;
		case 6:
		case 7:
		case 8:
			value = 'high range';
			break;
		default:
			value = 'Input number between 0-8';
			console.log(value);
			return;
	}
	setVolume(value);
	console.log('The value is '+value);
}

function setVolume(n){
	console.log('Volume is set at '+n); 
}

numChecker(1); // The value is low range
numChecker('hello');  // Input number between 0-8
numChecker('1'); // Input number between 0-8
numChecker(8);
// Volume is set at high range
// The value is high range



const donutPicker = (flav) => {
	switch(flav){
		case 's':
			return 'sprinkles';
		case 'c':
			return 'chocolate glazed';
		case 'b':
			return 'bear claw';
		default:
			// return 'Didnt understand';
			return null;
	}
}
const donut = (selection) =>	{
	const selectedDonut = donutPicker(selection);
	if(!selectedDonut){
		console.log('Incorrect selection');
	}else{
		console.log('You have selected '+selectedDonut);
	}
}
donut('s'); // You have selected sprinkles
donut(121); // Incorrect selection


