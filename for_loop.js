// For loops
// Repeats until a specified conditions evaluate to false
/*
	for(initial expression; condition; increment expression){
		statement
	}
*/

var index = 0;
for(index; index<10; index+=1){
	console.log(index);
}
/*
	0
	1
	2
	3
	4
	5
	6
	7
	8
	9
*/


const iceCreams = ['vanilla', 'chocolate', 'butterscotch', 'strawberry'];

for(var i=0; i<10; i+=1){
	console.log(iceCreams[i]);
}

/*
	"vanilla"
	"chocolate"
	"butterscotch"
	"strawberry"
	undefined
	undefined
	undefined
	undefined
	undefined
	undefined
*/


const iceCreams = ['vanilla', 'chocolate', 'butterscotch', 'strawberry'];

for(var i=0; i<iceCreams.length; i+=1){
	console.log(iceCreams[i]);
}

/*
	"vanilla"
	"chocolate"
	"butterscotch"
	"strawberry"
*/


const iceCreams = ['vanilla', 'chocolate', 'butterscotch', 'strawberry'];

function iceCreamLooper(arr,type){
	for(var i=0; i<iceCreams.length; i+=1){
		if(arr[i] === type){
			console.log(arr[i]+' '+'is at position '+index);
		}
	}
}

iceCreamLooper(iceCreams,'Vanilla');


for(let i=1; i<=100; i++) {
	//if((i%3 == 0) && (i%5 == 0)) { 
	if(i%15 === 0) {
		console.log('fizz buzz');
	}else if(i%3 == 0) {
		console.log('fizz');
	}else if(i%5 == 0) {
		console.log('buzz');
	}else {
		console.log(i);
	}
}


for(let i=1; i<=20; i++) {
	if(i%15 === 0) {
		break;
	}else if(i%3 == 0) {
		console.log('fizz');
	}else if(i%5 == 0) {
		console.log('buzz');
	}else {
		console.log(i);
	}
}

/*
	1
	2
	"fizz"
	4
	"buzz"
	"fizz"
	7
	8
	"fizz"
	"buzz"
	11
	"fizz"
	13
	14
*/


for(let i=1; i<=20; i++) {
	if(i%15 === 0) {
		continue; // Tells the code to start the next iteration of the loop and skip any remaining code blocks it has for this particular version of the loop.
		console.log('Test');
	}else if(i%3 == 0) {
		console.log('fizz');
	}else if(i%5 == 0) {
		console.log('buzz');
	}else {
		console.log(i);
	}
}

/*
	1
	2
	"fizz"
	4
	"buzz"
	"fizz"
	7
	8
	"fizz"
	"buzz"
	11
	"fizz"
	13
	14
	16
	17
	"fizz"
	19
	"buzz"
*/



let x = 0;
while(x < 10){
	x += 1;
	if(x === 5){
		console.log('I am being skipped');
		continue;
	}
	console.log(x);
}

/*
	1
	2
	3
	4
	"I am being skipped"
	6
	7
	8
	9
	10
*/


for(let i=0;i<3;i++){
	console.log('Outer loop'+i);
	for(let j=0; j<2;j++){
		console.log('Inner loop'+j)
	}
}
/*
	"Outer loop0"
	"Inner loop0"
	"Inner loop1"
	"Outer loop1"
	"Inner loop0"
	"Inner loop1"
	"Outer loop2"
	"Inner loop0"
	"Inner loop1"
*/

outerLoop:
for(let i=0;i<3;i++){
	console.log('Outer loop'+i);
	InnerLoop:
	for(let j=0; j<10;j++){
		console.log('Inner loop'+j);
		if(j === 3){
			break;
		}
	}
}
/*
	Outer loop0
	Inner loop0
	Inner loop1
	Inner loop2
	Inner loop3
	Outer loop1
	Inner loop0
	Inner loop1
	Inner loop2
	Inner loop3
	Outer loop2
	Inner loop0
	Inner loop1
	Inner loop2
	Inner loop3
*/


outerLoop:
for(let i=0;i<10;i++){
	console.log('Outer loop'+i);
	InnerLoop:
	for(let j=0; j<10;j++){
		console.log('Inner loop'+j);
		if(j === 3){
			break outerLoop;
		}
	}
}
/*
	Outer loop0
	Inner loop0
	Inner loop1
	Inner loop2
	Inner loop3
*/


outerLoop:
for(let i=0;i<10;i++){
	console.log('Outer loop'+i);
	InnerLoop:
	for(let j=0; j<10;j++){
		console.log('Inner loop'+j);
		if(j === 3){
			break InnerLoop;
		}
		if(i == 2){
			break outerLoop;
		}
	}
}
/*
	Outer loop0
	Inner loop0
	Inner loop1
	Inner loop2
	Inner loop3
	Outer loop1
	Inner loop0
	Inner loop1
	Inner loop2
	Outer loop2
	Inner loop0
*/


setTimeout(function(){
	console.log('One second has passed.');
},1000);
// "One second has passed."


for(var i=0; i<5; i++){
	setTimeout(function(){
		console.log(i);
	},1000);
}
/*
	5
	5
	5
	5
	5
*/

function looper(){
	for(var i=0; i<5; i++){
		setTimeout(function(){
			console.log(i);
		},1000);
	}
}
looper();
/*
	5
	5
	5
	5
	5
*/


function looper(value){
	setTimeout(function(){
		console.log(value);
	},1000);
}
for(var i=0; i<5; i++){
		looper(i);
}

/*
	0
	1
	2
	3
	4
*/


for(let i=0; i<5; i++){
	setTimeout(() => {
		console.log(i);
	},1000);
}

/*
	0
	1
	2
	3
	4
*/
