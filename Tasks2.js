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
