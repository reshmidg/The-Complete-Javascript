// Nested functions helps in reducing clutter of global namespace
function squareAndMultiply(num1, num2){
	function squarer(x){
		return x*x;
	}
	return squarer(num1) * squarer(num2);
}
console.log(squareAndMultiply(2,4)); // 64
console.log(squarer(2)); // ReferenceError: squarer is not defined


function squareAndMultiply(num1, num2){
	let test = 'This is a test text'; // This let variable ia accessible inside squarer and multiplyBy10 functions
	function squarer(x){
		let testLet = 'This is another test'; // This is accessible only inside squarer function
		return x*x;
	}
	function multiplyBy10(y){
		return y*10;
	}
	return squarer(num1) * multiplyBy10(num2);
}
console.log(squareAndMultiply(2,4));  // 160


function personFormatter(firstName, lastName, age){
	function formatterNames(arg1,arg2){
		return arg1 + ' ' +arg2;
	}
	const formattedName = formatterNames(firstName, lastName);
	return formattedName;
}
console.log(personFormatter('Chris','Jones',20)); // Chris Jones


function personFormatter(firstName, lastName, age){
	function formatterNames(arg1,arg2){
		return arg1 + ' ' +arg2;
	}

	function dataFormatter(fullName, num){
		const dataFormattedObj = {
			name : fullName,
			age : num
		}
		return dataFormattedObj;
	}

	const formattedName = formatterNames(firstName, lastName);
	return dataFormatter(formattedName,age);
}
console.log(personFormatter('Chris','Jones',20)); 
/* [object Object] {
  age: 20,
  name: "Chris Jones"
}*/



function formatterNames(arg1,arg2){
	return arg1 + ' ' +arg2;
}

function dataFormatter(fullName, num){
	const dataFormattedObj = {
		name : fullName,
		age : num
	}
	return dataFormattedObj;
}

function personFormatter(firstName, lastName, age){
	const formattedName = formatterNames(firstName, lastName);
	const dataFormatted = dataFormatter(formattedName,age)
	return dataFormatted;
}
console.log(personFormatter('Chris','Jones',20)); 
/* [object Object] {
  age: 20,
  name: "Chris Jones"
}*/



