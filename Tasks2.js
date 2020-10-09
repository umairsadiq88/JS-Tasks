// Tasks 2

// 1) nested object destructring?
// 2) function ke arguments mein destructring karsakte  hain?
// 3) object clone kartay hoay object ki properties kaisay change hosakti hai?



// let myObj = {

//     name: "Umair Sadiq",
//     position: "Assist. Manager Marketing",
//     company: "SIND MEDICAL Stores",
//     address: {
//         address: 1
//     }
// }

// let objectKeys = Object.keys(myObj);
// // console.log(objectKeys);

// for (let i= 0; i < objectKeys.length; i++) {
//     console.log(objectKeys[i]);
// }

// 19 Sep 2020
// Chapters

// 1) try & catch

// 2) for of Loop 

// 3) for in Loop 

// 4) MAP

// 5) filter



// 22 Sep 2020

// Chapters

// 1) Set
// 2) shortCircuit 
// 3) promises async sync (introduction with example) 

// Tasks
// 1) (this) parhna hai

// Remaining topics

// 1) this
// 2) classes
// 3) default value
// 4) promises (how to make promises)
// 5) reduce (if sir need )


//Task (This)

// console.log(this);


// const umair = {
//     name : "umair sadiq",
//     firm : "SIND MEDICAL STORES",
//     sum: function() {
//         var add = 2+2;
//         console.log("sum of two no. is" + " " + add);
//         console.log(this.name);
//         console.log(this.firm);
//         console.log(this);
//     }
// }

// umair.sum();

// This Keywords refers to the object it belogs to.

// it has different values depending on where it is used:

// 1) alone, this refers to the global objects.
// 2) in regular functions refer to global object.
// 3) in a method, this ref3ers to the owner object.
// 4) in a function, in strict mode this is undefined.


// const iterable = [10,20,30];
// let sum = 0;
// for(let value of iterable){
//     sum += value
//     console.log('sum in loop', sum)
// }
// console.log(sum)



// 29 Sep 2020 sir Usama

// Chapters

// 1) Async callback
// 2) Promise (Pending, Resolve or Reject) with example
// sir usama git link : https://github.com/xamQrexii/async-javascript

// "behos hotey reh gaye bus...."

// 3) fetch from server
// reference via video: https://www.youtube.com/watch?v=PoRJizFvM7s&t=1293s 


// Tasks 
// 1) Promise.all
// 2) async await

// Remaining topics
// 1) async await
// 2) classes
// 3) default value
// 4) reduce (if sir need )




// Here is a quick example of Callback:

// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);


// 02 Oct 2020 Sir Usama

// Chapters

// 1) async await with try catch 
// Zindagi phir gulzar hogai..

// 2) classes
// tip: https://www.w3schools.com/js/js_object_classes.asp 


// Tasks 
// 1) async await ki madad sey user data get karna hai
// link: jsonplaceholder
// code: from sir 

// 2) in classes statics kisi method k sath is tamal karsaktey hai 
// 2) car color change with method k sath property change


// Remaining topics

// Default values


