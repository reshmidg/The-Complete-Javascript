// For...in loop
/*
	Loop through an object's properties in arbitrary order

*/


const users = {1: 'Sally', 2: 'Billy', 3: 'Ashley', 4: 'Timmy'};
console.log(users[1]); // Sally
console.log(users[6]); // undefined

for(let prop in users){
	console.log(prop);
}

/*
	"1"
	"2"
	"3"
*/
const users = {a: 'Sally', 2: 'Billy', 3: 'Ashley', 4: 'Timmy'};
for(let prop in users){
	console.log(prop);
	console.log(users[prop]);
}


const users = {a: 'Sally', 2: 'Billy', 3: 'Ashley', 4: 'Timmy'};
for(let prop in users){
	let newUser = users[prop];
	newUser = 'Active Users';
	console.log(newUser);
}

/*
	"Active Users"
	"Active Users"
	"Active Users"
	"Active Users"
*/


const users = {a: 'Sally', 2: 'Billy', 3: 'Ashley', 4: 'Timmy'};
for(let prop in users){
	if(users[prop] === 'Sally'){
		users[prop] = 'Sal';
	}
	console.log(users[prop]);
}

/*
	"Billy"
	"Ashley"
	"Timmy"
	"Sal"
*/

const drinks = ['coffee','sprite','tea','coke','pepsi'];
for(let d in drinks){
	console.log(d);
	console.log(drinks[d]);
}

/*
	"0"
	"coffee"
	"1"
	"sprite"
	"2"
	"tea"
	"3"
	"coke"
	"4"
	"pepsi"
*/

// for each is used for arrays. They are ordered. We can't use break or continue in for each loops.

const drinks = ['coffee','sprite','tea','coke','pepsi'];
drinks.forEach(function(d){
	console.log(d);
});
/*
	"coffee"
	"sprite"
	"tea"
	"coke"
	"pepsi"
*/
// ES6 way
const drinks = ['coffee','sprite','tea','coke','pepsi'];
drinks.forEach((d) => {
	console.log(d);
});


const drinks = ['coffee','sprite','tea','coke','pepsi'];
drinks.forEach((d) => {
	if(d === 'coke'){
		break;
	}
	console.log(d);
});

drinks.forEach((d) => {
	if(d === 'coke'){
		continue;
	}
	console.log(d);
});


// for...in loop . We can use break and continue statements
for(let d in drinks){
	if(drinks[d] === 'coke'){
		break;
	}
	console.log(drinks[d]);
}
/*
	"coffee"
	"sprite"
	"tea"
*/

for(let d in drinks){
	if(drinks[d] === 'coke'){
		continue;
	}
	console.log(drinks[d]);
}
/*
	"coffee"
	"sprite"
	"tea"
	"pepsi"
*/


// for...of loop works with break and continue
// Used for looping over data - like the values in an array
// Cannot be used with objects
const drinks = ['coffee','sprite','tea','coke','pepsi'];
for(const d of drinks){
	console.log(d);
}


for(let d of drinks){
	if(d === 'coke'){
		break;
	}
	console.log(d);
}
/*
	"coffee"
	"sprite"
	"tea"
*/


for(let d of drinks){
	if(d === 'coke'){
		continue;
	}
	console.log(d);
}
/*
	"coffee"
	"sprite"
	"tea"
	"pepsi"
*/


const myString = 'Hello';
for(const character of myString){
	console.log(character);
}

/*
	"H"
	"e"
	"l"
	"l"
	"o"
*/


var originalArray = [10,2,30,44,5];
for(let num of originalArray){
	num += 10;
	console.log(num); // 20	12 40 54 15
}


var originalArray = [10,2,30,44,5];

function numIncreaser(arr, numToBeIncBy){
	for(let num of arr){
		num += numToBeIncBy;
		console.log(num); // 40 32 60 74 35
	}
}

numIncreaser(originalArray, 30);



const originalArray = ['Chris','Chris','Sally','Billy','Bob','Jane','Billy'];
const uniqueSetArray = new Set(originalArray);
for(const arr of originalArray){
	console.log(arr);
}
/*
	"Chris"
	"Chris"
	"Sally"
	"Billy"
	"Bob"
	"Jane"
	"Billy"
*/

for(const arr of uniqueSetArray){
	console.log(arr);
}

/*
	"Chris"
	"Sally"
	"Billy"
	"Bob"
	"Jane"
*/
