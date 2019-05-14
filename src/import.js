import { yearsArr } from './first1';
import {randomArray } from './first2';
import {evenOddValue } from './first3';
import { newObject} from './first4';
import {isEmpty } from './first5';
import {factorial } from './first6';


const button1 = document.querySelector('#first');
const button2 = document.querySelector('#second');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');



button1.onclick = () => {
	console.log(yearsArr());

};
button2.onclick = () => {
	console.log(randomArray());

};
button3.onclick = () => {
console.log(evenOddValue());
};
button4.onclick = () => {
console.log(newObject());
};
button5.onclick = () => {
console.log(isEmpty());
};
button6.onclick = () => {
console.log(factorial());
};