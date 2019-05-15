

export function yearsArr(){ 
let startYear = prompt('enter first year',2019);
let lastYear = prompt('enter second year',2019);


if(isNaN(startYear)){
	startYear = 2019;
} ;
if(isNaN(lastYear)){
	lastYear=2019;
};
if(startYear>lastYear){
	startYear=2019;
	lastYear=2019;
};

let divisionStartYear = Math.ceil(startYear/4);
let divisionLastYear = Math.floor(lastYear/4);
let arr=[];

for (; divisionStartYear <= divisionLastYear ;divisionStartYear++){
	let leapYear = divisionStartYear*4;
	arr.push(leapYear);
}
return arr;
};

window.yearsArr=yearsArr;

