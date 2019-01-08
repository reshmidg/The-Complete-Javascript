/*
	What is hoisting?
	Hoisting means when we declare a varible and initialize it, the declaration is moved top of our code.
	eg:
	var hoistVar = 20;

	Internally, Javascript works in two lines
	a) Declares it as var hoistVar on the top
	var hoistVar;
	b) Initialize it later
	hoistVar = 20;

	Basically when the Javascript engine first parses the Javascript code, it moves all the declarations on top of the code and later initializes them.

	let and const are newly added in ES6 whereas var is there from ES5.
	Both let and const are used in block scopes whereas var is not used in block scope.
	The main difference between let and const is that const variables cannot be reassigned to a different value whereas let variables can be reassigned to some other value.

	Preferably, try to use const if you are sure that the variable won't change.
	If you are not sure whether the variable will be changed or not , use let.
	Lastly, use var if you don't need any block scoping.
*/

// Example of const
function sayHi(){
	const sayHi = true;
	if(sayHi === true){
		const myName = 'Reshmi';
		console.log(myName);
	}
}
sayHi(); 
/* Here myName cannot be reassigned to some other value 
	Output : Reshmi
*/


// Example of let
function sayHi(){
	let sayHi = true;
	if(sayHi === true){
		let myNum = 2;
		myNum = 3;
		console.log(myNum);
	}
}
sayHi();
/* Here myNum is reassigned to 3 
	Output : 3
*/

// Example of var
function sayHi(){
	var sayHi = true;
	if(sayHi === true){
		var myNum = 2;
	}
	console.log(myNum);
}

sayHi();

/* Here myNum is printed as 2 even after the if block ends.
	Output : 2
*/