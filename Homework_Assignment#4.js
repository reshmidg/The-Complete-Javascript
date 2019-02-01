function Men(name){
	const men = ['Bob', 'Mark', 'Socrate'];
	if(name){
		if(men.indexOf(name) > -1){
			console.log('Name is mortal.');
			return true;
		}else{
			console.log('Please enter an identified name.');
			return false;
		}
	}else{
		console.log('Please enter a proper name.');
		return false;
	}
}

console.log(Men('Mark'));




const cakeArray = ['Vanilla', 'Chocolate'];
const isChocolate = true;

function cakeFlavour(cakeArray, isChocolate){
	if(!isChocolate){
		return cakeArray.shift();
	}else{
		return cakeArray.pop();
	}
}

console.log(cakeFlavour(cakeArray, isChocolate));

