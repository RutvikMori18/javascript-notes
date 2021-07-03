//object is an unsorted collection of related of related data in the form of key and value pairs

const fname = 'jonney';
const person = {
    fname,
    lname: 'cruse',
    age: 50,
    car: {
        brand: 'toyoya',
        year: 2018,
        property: 'test',
        color: 'blue'
    }
}

console.log(person);


//dot notation 
console.log(person.age);


//square bracket notation 

const property = 'age';

console.log(person[property]);
console.log(person['fname']);

//objects methods

const myobj = {
    mymethod: () => {

    },
    mymethod1: function () {

    },
    mymethod3() {

    }
}

const dog = {
    name: 'daghiyo',
    bark: () => {
        //this keyword
        console.log('woof woof');
    }
}

dog.bark();
console.log(dog.name);

//object.key() creats an array containing the key of an object.

//initialize an object
const employees = {
    boss: 'Rutvik',
    secretary: 'john',
    sales: 'jim',
    accountant: 'jam',
};
//static object methods

//Object.keys
const position = Object.keys(employees);
console.log(position);

//Object.values
const empinfo = Object.values(employees);
console.log(empinfo);

//Object.entries() create nested array of the key/value pairs of an object.

const entries = Object.entries(employees);

console.log(entries);

//Object.freeze() prevents modification to properties from being added or removed from an objct

const frozen = Object.freeze(employees);

frozen.boss = 'mori'

console.log(employees);


//Object.seal() prevents new properties from being added to an object but allow the modification of existiong properties

const newEmp = Object.seal(employees);
//
newEmp.boss = 'Mori';
//
console.log(newEmp);
