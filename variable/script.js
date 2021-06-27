// create the variable using var keyword
// var VariableName = "Welcome Variables";
// console.log(VariableName);

//create the variable using let keyword
// let VariableName = "Welcome! Variables";
// console.log(VariableName);

//create the variable using const keyword
let VariableName = "Welcome! Variables";
console.log(VariableName);
//this is single line comment

/*
this 
is 
multiple
line 
comment

*/

//String
const examle = "Hello Minions..!";
console.log(examle);

const singlequotes = 'hello charlie';

const backticks = `Hello, ${singlequotes}, welocome  ${2+5}`;

console.log(backticks);

//numbers

const number = 10;
const deci = .10;

console.log(number);
console.log(deci);

const fnum = 5;
const snum = 10;
const result = fnum / snum;
console.log(result);


//booleans
const cool = true;
//if(cool){
//    console.log("you are cool man..!");
//}
//else {
//    console.log("you are not cool...!");
//}
//true - yes,1 
//false - no,0

const age = 20;
console.log(age > 18); //it will give "true"

//null
const num1 = null;
console.log(num1); //it will give null means it is unknown value


//undefiend
let x;
console.log(typeof (x));

//Objects collection of more data

//const name = "Mori";
//const age = 21;

const person = {
    name: "mori",
    age: 21,
}

console.log(person);
//Dot notation
console.log(person.age);
console.log(person.name);

//Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const date = new Date();
console.log(date);

//statically typed
//int float boolean
//dynamically typed
let msg = "hii,there";
console.log(typeof msg);

msg = 1000;
console.log(typeof msg);
