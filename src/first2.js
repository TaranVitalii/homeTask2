'use strict';
window.randomArray = function (){
	let arr=[];

	while (arr.length <50) {
		let randomValue = Math.floor(Math.random()*100);
		while(arr.indexOf(randomValue) < 0){
			arr.push(randomValue);
		}

	}
	arr.sort((a,b)=> a-b )
	return arr;
	}
export{randomArray};