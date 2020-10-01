
// //Async/Await

// There's a special syntax to work with promises in a more comfortable fashion

// called "async/await". it's surprisingly easy to understand and use.

// The word"asyn" before a function means one simple thing: a function always returns a Promise.

// so the async keyword is added to functions to tell them to return a promise rather than directly returning the value

// we can use await when calling any function that returns a Promise, including web API functions. 

// The keyword await makes Javascript wait unitil that mrpose settles and returns.API its result.






const pobj1 = new Promise ( (resolve, reject) => {
    
    setTimeout( () => {
    let roll_no = [1,2,3,4,5];
    resolve(roll_no);
    // reject('Error while communicating')
    }, 2000);

} );

const getBiodata = (indexdata) => {
    return new Promise ((resolve, reject) => {
        setTimeout( (indexdata) => {
            let biodata = {
                name : 'umair',
                age : 32
            }
            resolve( `My roll No is ${indexdata}, My name is ${biodata.name} and i am ${biodata.age} years old.` );
        }, 2000, indexdata)
    }); 
}


async function getData(){
    const rollnodata = await pobj1;
    console.log(rollnodata);

   const biodatas = await getBiodata(rollnodata[1]);
   console.log(biodatas);

   return biodatas;
}

const getname = getData().then((myname) => {
    console.log(myname);
});
console.log(getname);

