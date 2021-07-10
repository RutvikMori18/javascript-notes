//ESMAScript 6 or ES6

//const and let 

var age = 23;
console.log(age);

var age = 49;
console.log(age);


//let age = 23;
//console.log(age);
//let age = 15;
//console.log(age); //gives an error because age already define

//const age = 12;
//age = 1;
//console.log(age); //gives error because of const


//Arrow function
//const multiply = (x) => x * x;
//console.log(multiply(5));
//
//
////default parameters
//
//const add = (a = 0, b = 0, c = 0) => {
//    return a + b + c;
//}
//
//console.log(add(2, 5, 6));
//console.log(add(2, 5));
//
//
/////template string
//
//const customer = 'john';
//const order = {
//    name: 'ipad',
//    price: 1500,
//}
//
//const msg = `Hello, ${customer} do you want to buy an ${order.name} at the price of ${order.price}`;
//
//console.log(msg);


//IMPORTS AND EXPORTS

//import {
//    dogs,
//    dognumber
//} from './dogs.js';
//console.log(`my dogs are : ${dogs}`);


//SPREAD AND REST OPERATOT(...)
//if we dont know that how many parameter user input then this method are used
//const add = {
//    ...args
//} => {
//    console.log(args);
//    return args.reduce((acc, val) => acc + val);
//}
//
//console.log(add(2, 2, 5, 2));
//spread operator it will used for the print array from outside the operator and this is used to  make a new variable 
//const number = [1, 2, 3, 4, 5, 6];
//const num1 = {
//    ...number
//};
//num1.push(7);
//console.log(num1);
//console.log(number);
//console.log(...number);


//OBJECT DESTRUCTURINT

const person = {
    fname: 'rutvik',
    lname: 'mori',
    car: {
        color: 'blue',
        wheels: 5
    },
    animals: {
        dog: {
            name: 'bhuriyo',
            age: 2
        },
        cat: {
            name: 'pemli',
            age: 2
        }
    }

}


//print all the value given in above

console.log(person.fname);
console.log(person.lname);
console.log(person.car.color);
console.log(person.car.wheels); //and so onn


//insted of above we can write this 
const {
    fname,
    lname,
    car,
    animals: {
        dog,
        cat
    }
} = person;

console.log(fname);
console.log(lname);
console.log(car.color);
console.log(car.wheels);
console.log(dog.name);
console.log(dog.age);
console.log(cat.name);
console.log(age);


//ARRAY DESTRUCTRING

const intro = ['hello', 'i am', 'rutvik'];
const [greeting, , , , name] = intro;

console.log(greeting, name);
