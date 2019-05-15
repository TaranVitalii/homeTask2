
export function randomArray(){
	let arr=[];

	while (arr.length <50) {
			let randomValue = Math.floor(Math.random()*100);
			if(arr.indexOf(randomValue) === -1){
				arr.push(randomValue);
			}
	}
	arr.sort((a,b)=> a-b )
	return arr;
	}
window.randomArray=randomArray;
