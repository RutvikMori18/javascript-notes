//javascript differentiates data types on:

//-->primitive valus (Numbers, String, Boolean,...)
//-->complex values (Objects, Array)

let c = 5;
let a = c;

c = 2;

console.log(c, a);

const animals = ['dogs', 'cats'];

const otheranimals = animals;

animals.push('bhow');

console.log(animals);
console.log(otheranimals);




const person = {
    fname: 'jon',
    lanme: 'doe'
}
const otherperson = person;

person.fname = 'jimmy';

console.log(person);
console.log(otherperson);

//PERSON AND OTHERPERSON POINT TO THE SAME LOCATION IN THE MEMORY


//cloning arrays

//1st ways : spread operator

//const num = [1, 2, 3, 4, 5, 6];
//
////console.log(...num); //display not the array 
//const copiednumber = num;
//
//const newnum = [...num]; //copies the array 
//
////console.log(newnum);//display the form of the array
//num.push(10);
//
//console.log(num);
//console.log(copiednumber);
//console.log(newnum);


//2nd way : array.slice();

const num = [1, 2, 3, 4, 5, 6];

//console.log(...num); //display not the array 
const copiednumber = num;

const newnum = num.slice(); //copies the array 

//console.log(newnum);//display the form of the array
num.push(10);

console.log(num);
console.log(copiednumber);
console.log(newnum);


//cloning Objects
//1st way : spread operator

//const person1 = {
//    name: "jon",
//    age: 25
//};
//
//const otherperson1 = {
//    ...person1
//};
//
//person1.age = 30;
//
//console.log(person1);
//console.log(otherperson1);


//2nd way: Object.assign()

const person1 = {
    name: "jon",
    age: 25
};

const otherperson1 = Object.assign({}, person1);

person1.age = 30;

console.log(person1);
console.log(otherperson1);


const people = {
    fname: 'Rutvik',
    car: {
        brand: 'jaguar',
        color: 'black',
        wheels: 5
    }
}

//JSON.srtringify() methods
const stringifiedpeople = JSON.stringify(people);
const newpeople = JSON.parse(stringifiedpeople);
console.log(stringifiedpeople);
console.log(people);
console.log(newpeople);

newpeople.fname = 'mori';
newpeople.car.color = 'red';

console.log(people);
console.log(newpeople);
