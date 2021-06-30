//const month = ['jan', 'feb', 'mar', 'apr'];
//
//console.log(month[0]);
//
//month[2] = 'dec';
//console.log(month);
//console.log(month.length);
//
//const values = [
//    'apple',
//    {
//        name: 'john'
//    },
//    true,
//    () => {
//
//    }
//];
//console.log(values);
//
//for (let i = 0; i < month.length; i++) {
//    console.log(month[i]);
//}


//motheds in arrays 
const names = ['john', 'bob', 'mark'];

//array push- adds a new element to the end of the array

names.push('dem');
console.log(names);


//array pop - delete the element from the end of the array.
names.pop();
console.log(names);

//array Shift - deletes the first element from the array.
names.shift();

//unshift - add the new value from the first index
names.unshift('dem');
console.log(names);

//array splice - in the middle we can dlt the element and also insert the elements.
names.splice(2, 0, 'jonny', 'mori');
console.log(names);

//array slice - copy the element from one array to another array
const jon = names.slice(1);
console.log(jon);


////forEach - always its type is undefine
//names.forEach((value, i) => {
//
//});

names.forEach((name, i) => {
    console.log(name, i);
});
//use when
//you want to do something with wach element of the array

//don't use when 
//you want to stop or break the loop when some condition is true
//you are working with asnyn 


//array map - have return value s owe have to use new array.
//const invent = [
//    {
//        price: 5,
//        name: 'eggs'
//    },
//    {
//        price: 4,
//        name: 'mayo'
//    },
//    {
//        price: 2,
//        name: 'bread'
//    },
//    {
//        price: 5,
//        name: 'biscuit'
//    },
//]
//const prices = invent.map((item) => item.price);
//console.log(prices);
//
//const items = invent.map((item) => item.name);
//
//console.log(items);


//array filter
const nums = [-10, -2, 0, 15, -55, 26];
const positive = nums.filter((num) => {
    return num >= 0;
});
console.log(positive);

const employeedata = [
    {
        name: 'rutvik',
        overtime: 5
    },
    {
        name: 'mori',
        overtime: 10
    },
    {
        name: 'jorge',
        overtime: 15
    },

];
//it will return boolean value
//const employeestoreward = employeedata.filter((employee) => employee.overtime > 7);
//
//console.log(employeestoreward);

//Array Find
//the find method for arrays retur nthe first value that satisfies the condition .

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = numbers.find((number) => number > 5);

console.log(value);


//array includes
//return boolean value
//it is case sensitive
const array1 = [1, 2, 3];
console.log(array1.includes(3));

const bookshelf = ['moby dick', 'the great gatsby', 'pride and prejudje'];

if (bookshelf.includes('moby dick') === true) {
    console.log("We have that book ,here you go .");
} else {
    console.log("We have not these type of books sorry.!");
}

//array sort =>alphabetically

const names1 = ['ann', 'car', 'bob', 'dean'];

names1.sort();
console.log(names1);

const numbers1 = [1, 32, 5, 58, 87, 3, 0];
numbers1.sort((a, b) => a - b); //accending order
console.log(numbers1);
numbers1.sort((a, b) => b - a);

console.log(numbers1);
//descending order


//array some => return true when atleast one element pass the test
const array = [1, 2, 3, 4, 5];

const greaterthan3 = (number) => number > 3;

console.log(array.some(greaterthan3)); //true


//array Every =>returns true onlyif all elements pass the test 

console.log(array.every(greaterthan3)); //false


//array reduce

const grossery = [29, 12, 45, 35, 87, 110];

//let total = 0;
//grossery.forEach((price)=>{
//    total+=price;
//});
//
//console.log(total);


//same thing using reduce method
const total = grossery.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0);
console.log(total);
