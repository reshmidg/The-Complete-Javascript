var sayHi = function(){
	console.log('Say Hi!');
}
sayHi(); // Say Hi!


var sayHi = () => {
	console.log('Say Hi, I am using an arrow function.');
}
sayHi(); // Say Hi!


const multiplier = (num1, num2) => {
	return num1 * num2;
}
console.log(multiplier(5,10)); // 50


const users = [
	{name: 'Chris', age: 30},
	{name: 'Billy', age: 28},
	{name: 'Jane', age: 21}
];

const userNameList = users.map(function(user){
	return user.name;
});

console.log(userNameList); // ["Chris", "Billy", "Jane"]


const users = [
	{name: 'Chris', age: 30},
	{name: 'Billy', age: 28},
	{name: 'Jane', age: 21}
];

function mapUserNames(myArr){
	const userNameList = myArr.map(function(user){
		return user.name;
	});
	return userNameList;
}

console.log(mapUserNames(users)); // ["Chris", "Billy", "Jane"]


const users = [
	{name: 'Chris', age: 30},
	{name: 'Billy', age: 28},
	{name: 'Jane', age: 21}
];

const mapUserNames = (myArr) => {
	const userNameList = myArr.map((user) => {
		return user.name;
	});
	return userNameList;
}

console.log(mapUserNames(users)); // ["Chris", "Billy", "Jane"]





const multiplier = (x, y) => {
	return x * y; // Here since only one expression we can remove the curly braces and since it is return statement we can remove the return keyword as well.
}
//return keyword is implicit in arrow functions when curly braces are removed. But if curly braces are added return is mandatory
const multiplier = (x, y) => x * y; // Here curly braces and return keyword is removed
console.log(multiplier(2, 3)); // 6


const squarer = (num) => num * num;
console.log(squarer(4)); //16 
// If single parameter, bracket can be removed. But when no parameters, bracket is compulsory
const squarer = num => num * num;
console.log(squarer(4)); //16

const sayHi = () => {
	console.log('Say Hi!');
}
sayHi(); // Say Hi!



const users = [
	{name: 'Chris', age: 30},
	{name: 'Billy', age: 28},
	{name: 'Jane', age: 21}
];

const mapUserNames = (myArr) => 
	myArr.map((user) => user.name);

console.log(mapUserNames(users)); // ["Chris", "Billy", "Jane"]



const numbers = [1,2,3,4,5,6,7,8,9,10];

const filteredNumbers = numbers.filter(function(num){
	return num === 5;
});

console.log(filteredNumbers); // [5]


const filteredNumbers = numbers.filter(function(num){
	return num % 2 === 0;
});

console.log(filteredNumbers);  // [2, 4, 6, 8, 10]


const filteredNumbers = numbers.filter(function(num){
	return num % 2 !== 0;
});

console.log(filteredNumbers); // [1, 3, 5, 7, 9]


const filteredNumbers = numbers.filter((num) => num % 2 === 0 );

console.log(filteredNumbers);  // [2, 4, 6, 8, 10]


const numbers = [1,2,3,4,5,6,7,8,9,10];
const numberDoubler = (num) => {
	const numberContainer = [];
	num.forEach((n) => {
		const doubled = n*2;
		numberContainer.push(doubled);
	});
	return numberContainer;
}
console.log(numberDoubler(numbers)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


function numberMultiplier(x, y){
	return x * y;
}
console.log(numberMultiplier(5)); // NaN


function numberMultiplier(x, y){
	x = x || 5;
	y = y || 10;
	return x * y;
}
console.log(numberMultiplier()); // 50


function numberMultiplier(x, y){
	x = x || 5;
	y = y || 10;
	return x * y;
}
console.log(numberMultiplier(2, 3)); // 6


function numberMultiplier(x, y){
	x = x || 5;
	y = y || 10;
	return x * y;
}
console.log(numberMultiplier(2)); // 20


// ES6
function numberMultiplier(x=5, y=10){
	return x * y;
}
console.log(numberMultiplier()); // 50



function numberMultiplier(x=5, y=10){
	return x * y;
}
console.log(numberMultiplier(6, 3)); // 18


function numberMultiplier(x=5, y=10){
	return x * y;
}
console.log(numberMultiplier(3)); // 30



function stringSplitter(str){
	return str.split(' ');
}

console.log(stringSplitter('Hi There!')); // ["Hi", "There!"]


function stringSplitter(str){
	return str.split(' ');
}

console.log(stringSplitter()); // Cannot read property 'split' of undefined


function stringSplitter(str='How are you?'){
	return str.split(' ');
}

console.log(stringSplitter()); // ["How", "are", "you!"]


const initialStr = 'How are you?';
function stringSplitter(str=initialStr){
	return str.split(' ');
}

console.log(stringSplitter()); // ["How", "are", "you!"]


const initialStr = 'How are you?';
function stringSplitter(str=initialStr){
	return str.split(' ');
}

console.log(stringSplitter('I am fine.'));  // ["I", "am", "fine."]


const bankAccount = {
	canSpendMoney : true,
	balance : 100
}

function purchaseItem(price, acct = bankAccount){
	if(acct.canSpendMoney){
		acct.balance -= price;
		if(acct.balance <= 0){
			acct.canSpendMoney = false;
		}
		return true;
	}else{
		return false;
	}
}
console.log(purchaseItem(100)); // true
console.log(purchaseItem(1)); // false



const bankAccount = {
	canSpendMoney : true,
	balance : 100
}

function purchaseItem(price, acct = bankAccount){
	if(acct.canSpendMoney){
		acct.balance -= price;
		if(acct.balance <= 0){
			acct.canSpendMoney = false;
		}
		return true;
	}else{
		return false;
	}
}
console.log(purchaseItem(99)); // true
console.log(purchaseItem(1, {canSpendMoney:true, balance:40}));  // true



function logAllArguments(x, y, z){
	console.log(arguments);
}
logAllArguments(1, 2, 3); // It creates an object with index as ke yand value as arguments 
/*[object Arguments] {
  0: 1,
  1: 2,
  2: 3
}*/


function logAllArguments(x, y){
	console.log(arguments);
	console.log(arguments[0]); // 4
	console.log(arguments[1]); // 5
	console.log(arguments[2]); // 6
}
logAllArguments(4, 5, 6); 
/*[object Arguments] {
  0: 4,
  1: 5,
  2: 6
}*/


function logAllArguments(x, y){
	const args = Array.prototype.slice.call(arguments, logAllArguments.length);
	console.log(args);
	console.log(args.sort());
}
logAllArguments(6, 5, 2, 10, 6); // [2, 10, 6]
logAllArguments(true, 5, 1, 3, 6);  // [1, 3, 6]

// Same in ES6 using Rest parameter
function logAllArguments(x, ...y){
	console.log(y);	// [5, 2, 3, 6]
	console.log(y.sort()); // [2, 3, 5, 6]
}
logAllArguments(6, 5, 2, 3, 6); 


function multiply(multiplier, ...nums){
	return nums.map((n) => multiplier * n);
}
console.log(multiply(10, 5, 2, 3, 6));  // [50, 20, 30, 60]



// Arrow function cannot be used when creating a function

function Dog(years, breed){
	this.age = years;
	this.type = breed;
}

var spike = new Dog(3, 'Golden Retriever');
console.log(spike); 
/*
[object Object] {
  age: 3,
  type: "Golden Retriever"
}
*/


const Dog = (years, breed) => {
	this.age = years;
	this.type = breed;
}
var spike = new Dog(3, 'Golden Retriever');
console.log(spike); // "TypeError: Dog is not a constructor at hopufef.js:5:13


function Dog(years, breed){
	this.age = years;
	this.type = breed;
	console.log(this);
}

var spike = new Dog(3, 'Golden Retriever');
var fido = new Dog(5, 'Poodle');

console.log(this); // window object
console.log(this.document); // document object


/* [object Object] {
  age: 3,
  type: "Golden Retriever"
}
[object Object] {
  age: 5,
  type: "Poodle"
}
*/



function test(){
	console.log(this); // window object
}
test();


function test(){
	'use strict';
	console.log(this); // undefined
}
test();



function Dog(years, breed){
	console.log(this); // this refers to current function object
	this.age = years;
	this.type = breed;
	setInterval(function(){
		console.log(this); // window object
	},1000);
}

var spike = new Dog(3, 'Golden Retriever');
var fido = new Dog(5, 'Poodle');


function Dog(years, breed){
	const that = this; // Captured at certain point in the execution of the program
	that.age = years;
	that.type = breed;
	setInterval(function(){
		that.age += 1;
		console.log(that); // window object
	},1000);
}

var spike = new Dog(3, 'Golden Retriever');
var fido = new Dog(5, 'Poodle');


// Arrow functions do not create their own context. They inherit the context of this based on the enclosing context.
function Dog(years, breed){
	this.age = years;
	this.type = breed;
	setInterval(() => {
		this.age += 1;
		console.log(this); // Here, since Arrow functions do not create their own context this refers to Dog Object.
	},1000);
}

var spike = new Dog(3, 'Golden Retriever');
var fido = new Dog(5, 'Poodle');
