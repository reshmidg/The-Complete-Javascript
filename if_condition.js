// If statement
// Tells the code : If this thing is true, run more code
/*
if(expression){
	statement(s) to be executed if expression evaluates to truthy or falsy
}
*/

const shouldSayHi = true;
if(shouldSayHi === true){
	console.log('Hi There!');
}

/*

== known as equlity operator. Checks for equality after it does type conversion
=== known as Identity operator. Does not do any type conversion. It just checks if two values are of same types and if so do they have same values.

*/


const numberFive = 5;
console.log(numberFive);

const stringFive = '5';
console.log(stringFive);

console.log(numberFive === stringFive); // false

console.log(numberFive == stringFive); // true
// Here JS converts numberFive to string for us and assumes that that's what we want. 

console.log(numberFive + stringFive); // '55'

// If you want to do a type conversion do it before the == check.

const stringConversion = parseInt(stringFive);
console.log(numberFive + stringConversion); // 10

console.log(numberFive === stringConversion);  // true


const myArr = [1, 2, 3];
const myOtherArr = [1, 2, 3];

console.log(myArr === myOtherArr); // false
console.log(myArr == myOtherArr); // false

const myArr = [1, 2, 3];
const myOtherArr = myArr;

console.log(myArr === myOtherArr); // true
console.log(myArr == myOtherArr); // true

const myObject = {name: 'Chris'};
const myOtherObject = {name : 'Bob'};

console.log(myObject === myOtherObject); // false
console.log(myObject == myOtherObject); // false

const myObject = {name: 'Chris'};
const myOtherObject = myObject;

console.log(myObject === myOtherObject); //true
console.log(myObject == myOtherObject); // true


const myFirstNumber = 123;
const mySecondNumber = 120;
if(myFirstNumber === mySecondNumber){
	console.log('Hi There!');
}

const bankAccountBalance = 200;
const costOfItem = 180;
const tax = 0.5;
if(bankAccountBalance >= costOfItem + tax){
	console.log('You can purchase this item!');
}
if(bankAccountBalance <= costOfItem + tax){
	console.log('You cannot purchase this item!');
}
if(bankAccountBalance !== costOfItem + tax){
	console.log('I am running');
}

console.log(bankAccountBalance === costOfItem); // false
console.log(bankAccountBalance !== costOfItem); // true 
console.log(bankAccountBalance == costOfItem); // false
console.log(bankAccountBalance != costOfItem); // true 

const bankAccountBalance = '24';
const costOfItem = 24;
console.log(bankAccountBalance === costOfItem); // false
console.log(bankAccountBalance !== costOfItem); // true 
console.log(bankAccountBalance == costOfItem); // true
console.log(bankAccountBalance != costOfItem); // false 

//Nested if conditions
const bankAccountBalance = 200;
const costOfItem = 180;
const tax = 0.5;
if(bankAccountBalance >= costOfItem){
	console.log('Balance ok! Checking tax'); // Balance ok! Checking tax
	if(tax >= 0.5){
		console.log('Tax amount too high'); // Tax amount too high
	}
}


if(bankAccountBalance >= costOfItem){
	console.log('Balance ok! Checking tax'); // Balance ok! Checking tax
	if(tax >= 0.5){
		console.log('Tax amount too high');// Tax amount too high 
		if(100 === 100){
			let myName = 'Reshmi';
			console.log(myName); // Reshmi
		}
		console.log(myName); // myName is not defined
	}
}

if(bankAccountBalance >= costOfItem){
	console.log('Balance ok! Checking tax'); // Balance ok! Checking tax
	if(tax >= 0.5){
		console.log('Tax amount too high'); // Tax amount too high
	}
	if(100 === 100){
		console.log('I am firing too'); // I am firing too
	}
}

const bankAccountBalance = 200;
const costOfItem = 180;
const canSpendMoney = true;

if(bankAccountBalance >= costOfItem){
	if(canSpendMoney === true){
		console.log('OK'); // OK
	}
}


if(bankAccountBalance >= costOfItem && canSpendMoney === true){
		console.log('You can purchase the item'); // You can purchase the item
}

const bankAccountBalance = 1;
const costOfItem = 180;
const hasCreditCard = true;
const creditLimit = 200;

if((bankAccountBalance >= costOfItem) || 
	(hasCreditCard && creditLimit > costOfItem)){
		console.log('You can purchase the item'); // You can purchase the item
}

const hasReachedCreditLimit = false;
if(!hasReachedCreditLimit){
	console.log('You can purchase the item');
}

let myName;
console.log(myName); // undefined
console.log(!myName); // true

let myName = undefalse
console.log(!myName); // true

let myName = 'Reshmi';
console.log(!myName); // false

const bankAccountBalance = 1;
const costOfItem = 180;
const hasCreditCard = true;
const hasReachedCreditLimit = false;
if((bankAccountBalance >= costOfItem) || 
	(hasCreditCard && !hasReachedCreditLimit)){
		console.log('You can purchase the item'); // You can purchase the item
}

if(bankAccountBalance >= costOfItem){
		console.log('You can purchase the item'); 
}else{
	//console.log('You cannot purchase this item');
	if(hasCreditCard && !hasReachedCreditLimit){
		console.log('You can pay by credit'); // You can pay by credit
	}else{
		console.log('You cannot afford');
	}
}


if(bankAccountBalance >= costOfItem){
	console.log('You can purchase the item'); 
}else if(hasCreditCard && !hasReachedCreditLimit){
	console.log('You can pay by credit'); // You can pay by credit
}else{
	console.log('You cannot afford');
}