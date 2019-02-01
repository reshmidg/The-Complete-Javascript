function Men(member){
	this.member = member;
	this.mortal = true;
}


const men = ['Bob', 'Mark', 'Socrate'];
const isMen = new Men(men);

const socrate = 'Socrate';
const allMenMortal = true;
const isSocrateAMen = true;
const isSocrateMortal = true;


	
if(isMen.member.indexOf(socrate) > -1 && isMen.mortal){
	console.log('All men are mortal');
	console.log('Socrate is a man');
	console.log('Socrate is mortal');
}else if(isMen.member.indexOf(socrate) > -1 && !isMen.mortal){
	console.log('All men are not mortal');
	console.log('Socrate is a man');
}else if(isMen.member.indexOf(socrate) === -1 && isMen.mortal){
	console.log('All men are mortal');
	console.log('Socrate is not  man');
}else{
	console.log('All men are not mortal');
	console.log('Socrate is not a man');
	console.log('Socrate is not mortal');
}




const isVanilla = true;
const isChocolate = true;
if(isVanilla || isChocolate){
	console.log('This cake is either vanilla or chocolate');
	if(isChocolate === false){
		console.log('This cake is not chocolate');
		console.log('Therefore,this cake is vanilla');
	}
}
