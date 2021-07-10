//Asynchronous code

//set Interval

//setInterval(() => console.log("Hello.."), 1000);

//const myInterval = setInterval(() => console.log("Hello.."), 1000);
//
//clearInterval(myInterval);


//setTimeout - it will return after the time interval
//const myInterval = setTimeout(() => console.log("Hello.."), 5000);

//clearTimeout(myInterval);

//it will run in asyn because it has timeout so run botom code and then run the time interval code



//what is synchronus javascript ?
//    syn js is one in which the code is executed line by line and their task are completed instantly ,

//const fun1 = () => {
//    console.log("function 1");
//
//    fun2();
//    console.log("function 1 part 2");
//}
//
//const fun2 = () => {
//    console.log("function 2");
//}
//
//fun1();


//asynchronous JS example
//const fun1 = () => {
//    console.log("function 1");
//
//    fun2();
//    console.log("function 1 part 2");
//}
//
//const fun2 = () => {
//    setTimeout(() => {
//        console.log("function 2");
//    }, 1000);
//
//}


//asyn js is one in which some line of code take time to run . these tasks are run in the background while the js engine keeps executing other lines of the asyn tasks gets available, is then used in the program.
//fun1();



//DATA FETCHING

//API
//const fetchUser = (username, callback) => {
//
//    setTimeout(() => {
//        console.log("[now we have the photos]");
//
//        callback({
//            username
//        });
//    }, 2000);
//}
//
//
//const fetchUserphoto = (username, callback) => {
//
//    setTimeout(() => {
//        console.log("[now we have the photos]");
//        callback(['photos1', 'photos2']);
//    }, 2000);
//}
//
//const fetchUserphotodetails = (photo, callback) => {
//
//    setTimeout(() => {
//        console.log(`[now we have the photos details ${photo}]`);
//        callback('details...');
//    }, 2000);
//}
//
//fetchUser('mori', (user) => {
//    console.log(`youe name is : ${user.username}`);
//
//    fetchUserphoto(user.username, (userphotos) => {
//        console.log(`your photos are : ${userphotos}`);
//
//        fetchUserphotodetails(userphotos[0], (details) => {
//            console.log(`your photos details are : ${details}`);
//
//
//        });
//    });
//});


//promises
//they are objects that either return the successfully fetched data , or the error


//aaya thi kay smajanu nathi..
//const fetchUser = (username) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log("[now we have the username]");
//
//            resolve({
//                username
//            });
//
//        }, 1000);
//    });
//}
//
//const fetchUserphoto = (username) => {
//
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log("[now we have the photos]");
//            resolve(['photos1', 'photos2']);
//        }, 2000);
//    });
//
//}
//
//const fetchUserphotodetails = (photo) => {
//
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log(`[now we have the photos details ${photo}]`);
//            resolve('details...');
//        }, 2000);
//    })
//}
//
//individual calling
////fetchUser.then((user) => {
////    console.log(user.username);
////});
////fetchUser.catch((error) => {
////    console.log(error);
////})
////NOT USING THIS =>CALLBACK
////fetchUser('mori', (user) => {
////    console.log(`youe name is : ${user.username}`);
////
////    fetchUserphoto(user.username, (userphotos) => {
////        console.log(`your photos are : ${userphotos}`);
////
////        fetchUserphotodetails(userphotos[0], (details) => {
////            console.log(`your photos details are : ${details}`);
////
////
////        });
////    });
////});
// fetch using .then
//fetchUser('mashin')
//    .then((user) => fetchUserphoto(user.username))
//    .then((photos) => fetchUserphotodetails(photo[0]))
//    .then((details) => console.log(`your photo details are ${details}`))

//fetch using async and await function

//const displayData = async () => {
            //    const user = await fetchUser('MORI');
            //    const photos = await fetchUserphoto(user.username);
            //    const details = await fetchUserphotodetails(photos[0]);
            //
            //    console.log(details);
            //}

//ASYN FUNCTION RETURN PROMISES!!!

//AWAIT AND ASYNC
//ASYNC => AWAIT
//const fetchNumber = async () => {
//    return 55;
//}

//console.log(fetchNumber());


//fetchNumber().then((number) => {
//console.log(number);
//})
//console.log(number);
//})

//const fetchednumber = async () => {
//    const number = await fetchednumber();
//    console.log(number);
//}
//
//fetchednumber();
