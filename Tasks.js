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
    }
}

//Replace of Key
const {type:origin, name:firmName, div:Divison} = firm;
console.log(firm);

//Replace of value
const {Divison: {depart: "Admin"}} = firm;
console.log(depart);

//Add of Key&Value

// const {type:origin, name:firmName, div:Divison} = firm;
// console.log(firm);