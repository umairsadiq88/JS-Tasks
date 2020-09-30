// Callback
//Any function that is passed as an argument is called a callback
// A callback is a function that is to be executed after another function has finished executing - hence the name 'call back'.

// Example

// const funA = () => {
//     setTimeout(function(){
//     console.log('welcome FunA');
//     },3000);
// }

// const funB = () => {
//     console.log('welcome FunB');
// }

// funA();
// funB();

// another example

// const perOne = (friend, callfrnd) => {
//     console.log
//     (`I am busy right Now. I am talking
//     to ${friend}. i will call you back.`);
//     callfrnd();
// }

// const perTwo = () => {
//     console.log(`Hey what's up. i call back you. dekha`)
// }

// perOne("Umair", perTwo);

//CallBack Hell Example

// API
// 1: 2s student roll not
// 2: 2s 2nd name and age
// 3: 2s gender

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

// function createPost(post, callback) {
//     setTimeout( () => {
//         posts.push(post);
//         callback();
//     },2000);
// }

// createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);
