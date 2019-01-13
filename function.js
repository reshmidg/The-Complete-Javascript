/*
A function is a Javascript procedure - a set of statements that performs a task  or calculates a value.
it is a reusable piece of code that can be called anywhere in the program provided you define the scope correctly.
*/

const myName = 'Reshmi';
function sayHi(){
	console.log('Hi'+' '+myName); // Hi Reshmi
}
sayHi();


function sayHi(){
	const myName = 'Reshmi';
	console.log('Hi'+' '+myName); // Hi Reshmi
}
sayHi();


function sayHi(userName){
	console.log('Hi'+' '+userName); 
}
sayHi(); // Hi undefined
sayHi('Billy'); // Hi Billy


function sayHi(firstName, lastName){
	console.log('Hi'+' '+firstName); // Hi Sally                           // Hi Billy			// Hi Chris
	console.log('Hi'+ ' '+lastName); // Hi undefined					   // Hi Jones			// Hi Jane
}
sayHi('Sally'); 
sayHi('Billy','Jones');

const Chris = 'Chris';
const Jane = 'Jane';
sayHi(Chris,Jane);

function sayHi(firstName, age){
	console.log('Hi'+' '+firstName+ '! '+'You are '+age); 	// Hi Sally! You are 30
	
}
sayHi('Sally',30); 


function numberDoubler(num){
	num*2;
}
console.log(numberDoubler(10));  // undefined 

function numberDoubler(num){
	return;
	num*2;
}
console.log(numberDoubler(10));  // undefined 


function numberDoubler(num){
	return num*2;
}
console.log(numberDoubler(10)); // 20

function numberDoubler(num){
	const doubledValue = num * 2;
	return doubledValue;
}
const numberTwoDoubled = numberDoubler(2); 
const numberFiveDoubled = numberDoubler(5);
console.log(numberTwoDoubled); // 4

function numberAdder(num1, num2){
	return num1 + num2;
}
console.log(numberAdder(numberTwoDoubled, numberFiveDoubled));




const myName = 'Chris';

function sayHi(){
	if(!myName){
		var myName = 'Bob';
	}
	console.log('Hi'+' '+myName); // Hi Bob
}

sayHi();


function sayHi(myName){
	if(!myName){
		var myName = 'Bob';
	}
	console.log('Hi'+' '+myName); // Hi Chris
}

sayHi('Chris');



var sayHi = function(myName){
	if(!myName){
		var myName = 'Bob';
	}
	console.log('Hi'+' '+myName); // Hi Chris
}

sayHi('Chris');



sayHi('Chris');
var sayHi = function(myName){
	if(!myName){
		var myName = 'Bob';
	}
	console.log('Hi'+' '+myName); // sayHi is not a function
}


const squareNumber = function(num){
	return num * num;
}

const numberAdder = function(num1 , num2){
	return num1 + num2;
}
console.log(numberAdder(squareNumber(4),10)); // 26


const numberAdder = function(squarer , num2){
	const squared = squarer(4);
	return squared + num2;
}
console.log(numberAdder(squareNumber,10)); // 26


// A primitive number is passed to a function by value, so if the function changes the value, actual value is not changed

let myNumber = 100;

function addTwenty(num){
	return num + 20;
}
console.log(addTwenty(myNumber)); // 120
console.log(myNumber); // 100

let myString = 'I am a string';

function addHello(string){
	return 'Hello' + ' '+ string;
}
console.log(addHello(myString)); // Hello I am a string
console.log(myString); // I am a string


const myInfo = {name: 'Reshmi', age : 30};

function changeAgeTo31(myObj){
	myObj.age = 31;
}

console.log(myInfo);
changeAgeTo31(myInfo);
console.log(myInfo);


const myNumbers = [1,2,3,4,5];

function addToArray(myArr){
	myArr.push(6);
}

console.log(myNumbers);
addToArray(myNumbers);
console.log(myNumbers);