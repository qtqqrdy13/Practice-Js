//сложение 3 разными вариациями РАБОТАЕТ ДЛЯ + - * /!!!!!!!!!!!!!!
/*const inputA = prompt('enter first number');
const inputB = prompt('enter second number');
const A = parseFloat(inputA);
const B = parseFloat(inputB);
if(!isNaN(A) && !isNaN(B) ) {
const lol = A + B;
console.log(`sum ${A} and ${B} equals ${lol}`);
}
else{
    console.log('enter ur numbers');
}
*/
/*function addNumbers(a , b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }else{
        throw new Error('each arguments must be numbers');
    }
}
try {
    const result = addNumbers(34 , ede);
    console.log(`result of summery: ${result}`);
} catch (error) {
    console.error(error.message);
}
*/
/*var a = 3;
var b = 4;
var c = a + b;
console.log(c);
*/
//Возведение в степень 3 вариациями 
/*const a = parseFloat(prompt('enter the number')); 
const b = parseFloat(prompt('enter the exponent'));
const result = Math.pow (a, b);
console.log(`result of summery: ${result}`);
*/
/*const a = parseFloat(prompt ('enter the number'));
const b = parseFloat(prompt ('enter the exponent'));
let c = 1;
for(let i = 0; i < b; i++){
    c *= a;
}
console.log(`result: ${c}`);
*/
function random(promptMessage){
let num;
do{
num = parseFloat(prompt (promptMessage))
if(isNaN(num)) {
    console.log('enter correct number');
}
}while(isNaN(num))
    return num
}
const a = random('enter ur number');
const b = random('enter ur exponent');
let result = 1;
for(let i = 0; i < b; i++){
     result *= a;
}

console.log(`result ${result}`);