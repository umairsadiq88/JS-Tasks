// Tasks 2

// 1) nested object destructring?
// 2) function ke arguments mein destructring karsakte  hain?
// 3) object clone kartay hoay object ki properties kaisay change hosakti hai?



let myObj = {

    name: "Umair Sadiq",
    position: "Assist. Manager Marketing",
    company: "SIND MEDICAL Stores",
    address: {
        address: 1
    }
}

let objectKeys = Object.keys(myObj);
// console.log(objectKeys);

for (let i= 0; i < objectKeys.length; i++) {
    console.log(objectKeys[i]);
}