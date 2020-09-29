// TASKS dtd 12 SEP 2020

// 1. Save an object in local storage and get the object and print individual key-value
// 2. Save an object in session storage and get the object and print individual key-value
// 3. How to do nested destructuring on an object and replace the value of a nested object key
// 4. How to spread an object and change the value of the nested object while spreading an object

// Task 1  Local Storage
// localStorage.setItem('fname', 'Muhammad');
// localStorage.setItem('lname', 'Umair');
// localStorage.setItem('email', 'umairsadiq2010@gmail.com');

// console.log(localStorage.getItem('fname'));
// console.log(localStorage.getItem('lname'));
// console.log(localStorage.getItem('email'));

//Remove local Storage Data
// localStorage.removeItem('fname')

//remove all

// localStorage.clear();

// =======xx=======

//Task 2 Session Storage

// sessionStorage.setItem('CNIC', '123456789');
// sessionStorage.setItem('Roll#', '45878');
// console.log(sessionStorage);

//Remove Session Storage Data
// sessionStorage.removeItem('Roll#')

//remove all

// sessionStorage.clear();

//Task 3
// nested destructuring object and replace the value of a nested object key

// nested destructuring object

// let firm = {
//         type: "Pharmaceutical",
//         name: "SIND MEDICAL STORES",
//         div: {
//             divID: "Vaccine",
//             depart: "Marketing",
//         }
// }

// const {type, name, div:{depart}} = firm;
// console.log(depart);

// replace the value of a nested object key

let firm = {
  type: "Pharmaceutical",
  name: "SIND MEDICAL STORES",
  div: {
    divID: "Vaccine",
    depart: "Marketing",
  },
};

// const {div: {divID, depart: {depart="Admin"}}} = firm;
// console.log(depart);

//Task 4
// Spread an object and change the value of the nested object while spreading an object

// const firm2 = {
//   ...firm,

//   div: { divID: "Vaccine", depart: "Admin" },
// };

// console.log(firm2);

let myObj = {
  name: "Muhammad Umair",
  city: "khi",
  address: {
    address: 1,
  },
};

let objectKeys = Object.objectKeys(myObj);

console.log(objectKeys);

console.log(myObj[objectKeys[1]]);

for (let index = 0; index < objectKeys.length; index++) {
  console.log(myObj[objectKeys[index]]);
}


//Topic 

ObjectDot assign 
object.keys 
object.value
rest operators
objectDotassign