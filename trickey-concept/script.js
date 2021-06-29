//Global Scope


//const name = 'rutvik';

//const logname = () => {
//    console.log(name);
//}
//logname();
//
//
//const logname2 = () => {
//    console.log(name);
//}



//Local scope /Function scope


//const someFunction = () => {
//    //    local scope 1
//    const name = 'Jany';
//
//    const anotherFunction = () => {
//        //    local scope 2
//
//        console.log(name);
//    }
//    console.log(name);
//    anotherFunction();
//}
//
//someFunction();
//console.log(name);


//Block Scope


//if (true) {
//    var name = 'john sinhA';
//}
//console.log(name);


//hoisting in javascript


//variables are define of the above it's print
//below example not possible
console.log(age);
var age = 20;

function hoist() {
    //this example is right
    var message = "hello world.!";
    console.log(message);

}

hoist();


//Clousers


//it is says that the function which we called was outer function so the inner function was not called because we did not call the inner function so in the outer function we have to called the inner function.

const outer = () => {
    const outerVar = 'Hello.!';

    const inner = () => {
        const innerVar = 'Hi.!';
        console.log(outerVar, innerVar); //using the variable which we define outer function 
    }
    //    console.log(outerVar);
    inner();
}

outer();

//innerfn();
