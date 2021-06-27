//BLOCK OF CODE
//
//A FUNCTION DECLATATION (defining a Function)
function squre(number) {
    console.log("i'm here.!");
    return number * number;
}
//


//A FUNCCTION CALL (function calling)

const result = squre(10);

console.log(result);


////function declaration
//function name(param){
//    //statement
//    //have access to 'this keyword'
//}
//
////function experssion
//
//const name = function(params){
//    //statement
//}
//
////an arrow functoin expression
//const name = (params) =>{
//    
//    //statements
//}

//name();


function hii(name) {
    console.log(`hiii, ${name}`);


}

hii('Rutvik');


//returns undefined

function add(a, b) {
    return a + b;
}

const sum = add(2, 5);
console.log(sum);
//
//function test() {
//    return true;
//    return false;
//}
//
//const bool = test();
//console.log(bool);

//Arrow function
//
//const name = (params) =>{
//    
//}

const square = (number) => {
    return number * number;
}

const sqr = square(5);

console.log(sqr);

//parameters - used when defining afunction
//arguments - pssed when making a function call
