// const posts = [ 
//     {title: 'Post one', body: 'This is post one'}
//     {title: 'Post two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//      let output = '';
//      posts.forEach((post, index) => {
//         output += `<li>${post, title}</li>`; 
//      });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         posts.push(post);

//     const error = false;

//     if(!error) {
//         resolve();
//     } else {
//         reject('Error: Something went wrong');
//     }
// },2000);


// createPost({ title: 'Post Three', body: 'This is Post Three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async / Await




// Promise.all
// const promise1 = Promise.resolve('Helllo World');
// const promise2 = 10;
// const promise3 = new Promise ((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))


// API
// 1: 2s student roll not
// 2: 2s 2nd name and age
// 3: 2s gender


//exector
//promise produce
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

//promise consume

pobj1.then((rollno) =>{
    console.log(rollno);
    getBiodata(rollno[1]).then( (kuchbhi) => {
        console.log(kuchbhi);
    })
}) .catch((error) => {
    console.log(error)
});
