// the "new" keyword .

//creats a new object .

const person = {};
const person1 = new Object();

console.log(person);
console.log(person1);

person.fname = 'jon';
person1.fname = 'sina';


console.log(person);
console.log(person1);

console.log(typeof person);
console.log(typeof person1);




//the "this" keyword.
//used in constructor
function sentence(word) {
    this.word = word;

    console.log(this);
}
const fstring = new sentence('hello..! brother good morning');


function car(color, brand, wheels) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this);
}


const bluecar = new car('blue', 'audi', 4);
const redcar = new car('red', 'BMW', 4);


//CLASS
//A class is a schema for an object that can save many values

class people {
    constructor(name, age, isWorking) {
        this.name = name;
        this.age = age;
        this.isWorking = isWorking;
    }
}

const user = new people('maya', 30, true);

console.log(user);

const createpeerson = (name, age, isworking) => ({
    name,
    age,
    isworking
});
//for the constructor there is no object create from  new keyword
const user1 = createpeerson('mori', 21, true);
const user2 = createpeerson('m', 51, true);
const user3 = createpeerson('mo', 31, true);
const user4 = createpeerson('mor', 20, true);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
