function sayHi(){
	var shouldSayHi = true;
	if(shouldSayHi === true){
		var myName = 'Reshmi';
		console.log('Hi'+ ' '+myName);
	}
}

sayHi(); // Hi Reshmi



function sayHi(){
	var shouldSayHi = true;
	if(shouldSayHi === true){
		var myName = 'Reshmi';
	}
	console.log('Hi'+ ' '+myName);
}

sayHi(); // Hi Reshmi


function sayHi(){
	var shouldSayHi = true;
	if(shouldSayHi === true){
		var myName = 'Reshmi';
	}
	myName = 'Bob';
	console.log('Hi'+ ' '+myName);
}

sayHi(); // Hi Bob


function sayHi(){
	var shouldSayHi = true;
	var reallySayHi = true;
	if(shouldSayHi === true){
		var myName = 'Reshmi';

		if(reallySayHi === true){
			var myLastName = 'Smith';
		}
	}
	myName = 'Bob';
	myLastName = 'Jones';
	console.log('Hi'+ ' '+myName + ' '+ myLastName);
}

sayHi();


function sayHi(){
	var shouldSayHi = true;
	if(shouldSayHi === true){
		let myName = 'Reshmi';
	}
	console.log('Hi'+ ' '+myName);
}

sayHi(); // ReferenceError myname is not defined


function sayHi(){
	var shouldSayHi = true;
	if(shouldSayHi === true){
		let myName = 'Reshmi';
		console.log('Hi'+ ' '+myName);
	}
}

sayHi();  // Hi Reshmi


// let helps keep the code fragment more local.
function sayHi(){
	var shouldSayHi = true;
	if(shouldSayHi === true){
		let myName = 'Reshmi';
		console.log(shouldSayHi);
	}
}

sayHi(); // true


function sayHi(){
	var shouldSayHi = true;
	let myName;
	if(shouldSayHi === true){
		myName = 'Reshmi';
		console.log(myName);
	}else{
		myName = 'Chris';
		console.log(myName);
	}
}

sayHi();

// const is also similar to let. It is in block scope. Const cannot be reassigned.
function sayHi(){
	var shouldSayHi = true;
	const myName = 'Reshmi';
	if(shouldSayHi === true){
		myName = 'Reshmi';
		console.log(myName);
	}else{
		myName = 'Chris';
		console.log(myName);
	}
}

sayHi(); // Uncaught TypeError: Assignment to constant variable.

const MYNAME = 'Reshmi';
MYNAME = 'Smith';
console.log(MYNAME); // Uncaught TypeError: Assignment to constant variable.


const myArr = [1,2,3];
myArr = [4,5,6];
console.log(myArr); // TypeError: Assignment to constant variable.

// You can't reassign it to an entirely different value but you can mutate the original data. You can modify the data inside this array but can't point to something else. Here myArr points to [1,2,3]
const myArr = [1,2,3];
console.log(myArr);
myArr.push(4);
console.log(myArr);


const myObject = { name : 'Chris'};
console.log(myObject); // [object Object] { name: "Chris"}

const myObject = { name : 'Chris'};
console.log(myObject); // [object Object] { name: "Chris"}
myObject = { name : 'Bob'};
console.log(myObject); // TypeError: Assignment to constant variable.

const myObject = { name : 'Chris'};
console.log(myObject); // [object Object] { name: "Chris"}
myObject.name = 'Bob';
console.log(myObject); // [object Object] { name: "Bob" }


function sayHi(){
	if(true){
		 const myName = 'Jim';
	}
	console.log(myName);
}
sayHi(); // Uncaught ReferenceError: myName is not defined

function sayHi(){
	if(true){
		 const myName = 'Jim';
		 console.log(myName);
	}
}
sayHi(); // Jim

function sayHi(){
	const myName = 'Jane';
	if(true){
		 const myName = 'Jim';
		 console.log(myName);
	}
	console.log(myName);
}
sayHi();  
// Jim 
// Jane

function sayHi(){
	const myName; // Const variables should have a value assigned.
	if(true){
		 const myName = 'Jim';
		 console.log(myName);
	}
	console.log(myName);
}
sayHi();  // SyntaxError: Missing initializer in const declaration