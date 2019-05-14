'usestrict';


function yearsArr(){ 
let res1 = prompt('enter first year',2019);
let res2 = prompt('enter second year',2019);


if (isNaN(res1)){
	res1 = 2019;
}else if(isNaN(res2)){
	res2=2019;
} else if(res1>res2){
	res1=2019;
	res2=2019;
}
let res3 = Math.floor(res2/4);
let res4 = Math.ceil(res1/4);
let arr=[];

for (; res4 <= res3 ;res4++){
	let newRes1 = res4*4;
	arr.push(newRes1);
}
return arr;

};
window.yearsArr=yearsArr;
export{yearsArr};
