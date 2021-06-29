const single = 'This is a String';
const double = "This is a String";
const backTicks = `This is a String`;

console.log(single);
console.log(double);
console.log(backTicks);


//length
const name = 'john';
console.log(name.length);
console.log(name[2]);
const firstletter = name[0];
const lasletter = name[name.length - 1];

//UPPERCASE and lowercase

const mix = "Hello.! How are you.?";
mix.length;
const lower = mix.toLowerCase;
console.log(lower);
const upper = mix.toUpperCase;
console.log(upper);

//searching for a substring
const hobbies = "I love HTML,CSS and JavaScript";

//indexOf()
const firstindex = hobbies.indexOf('JavaScript');
console.log(firstindex);

//lastindexOf()
const lastindex = hobbies.lastIndexOf('JavaScript');
console.log(lastindex);

//includes() returen boolean value true or false
const incld = hobbies.includes('JavaScript');
console.log(incld);

//startsWith()
console.log(hobbies.startsWith('I love'));

//endswith()
console.log(hobbies.endsWith('.'));

//Getting a substring 
const exampleString = 'hotdog';

//slice()
const dog = exampleString.slice(3, 6);
console.log(dog);

//split()
const exampleStr = 'The quick brown frox jumps of over the lazy dog';
console.log(exampleStr.split(' '));

//reverse a string 
const exampleString1 = 'test';

const reversestring = exampleString1.split("").reverse().join("");
console.log(reversestring);

//repeat()

const dogSays = "woof";
console.log(dogSays.repeat(5));

//Trim()
const extrim = 'Hello , world.! ';

console.log(extrim.trim(''));
