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




const getRollNo = () => {
    setTimeout(() => {
    console.log('gettingRollNo');
    let roll_no = [1,2,3,4,5];
    console.log(roll_no)

    setTimeout((rollno) => {
        const biodata = {
            name : 'umair',
            age : 32
        }    
    console.log(
        `my roll no is ${rollno} 
         my name is ${biodata.name} 
         and i m ${biodata.age} years old`);
                
        setTimeout( (name) => {
            biodata.gender = 'male';

            console.log(
                `my roll no is ${rollno} 
                 my name is ${biodata.name} 
                 and i m ${biodata.age} years old and 
                 i am a ${biodata.gender}`);
        }, 2000, biodata.name);
    },2000, roll_no[1]);


  }, 2000);
};

getRollNo();
