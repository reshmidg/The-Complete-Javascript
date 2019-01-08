// Variable is a placeholder that stores some data or information

var myName = "Reshmi";
var myFavNum = 24;
var myArr = [3,9,2,78,"Jane","Bob"];
var myObject = {name:"Chris",age:30};

console.log(myName);
console.log(myFavNum);
console.log(myArr);
console.log(myObject);

console.log(typeof myName);
console.log(typeof myFavNum);
console.log(typeof myArr);
console.log(typeof myObject);


function sayHi(){
	console.log("Hi"+" "+myName);
}

sayHi();


var count = 1;

function increase(){
	count += 1;
	console.log(count);
}

increase(); // outputs 2
increase(); // outputs 3
increase(); // outputs 4

var myNAME = 'Chris';
console.log(myName); // gives reference error



var myName = 'Bob';

function sayName(){
	console.log(myName);
}

sayName();
// Bob


var myName = 'Bob';

function sayName(){
	var myName = 'Chris';
	console.log(myName);
}

sayName();
// Chris


var myName = 'Bob';

function sayName(){
	myName = 'Chris';
	console.log(myName);
}
console.log(myName);
sayName();
// Bob
// Chris


var myName = 'Bob';

function sayName(){
	myName = 'Chris';
	console.log(myName);
}

sayName();
console.log(myName); 
// Chris 
// Chris

var 234 = '123';
// Gives error


var myName = 'Bob';

function sayName(){
	var _myName = 'Chris';
	console.log(_myName);
}

sayName();

var myName = 'Chris';
var anotherName = myName;
var yetAnotherName = anotherName;

console.log(myName);
console.log(anotherName);
console.log(yetAnotherName);
