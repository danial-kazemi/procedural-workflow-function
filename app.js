'use strict';
// let price = 0.3;
// console.log(price * 5 / 100)

// var x = 100;
// function showInfo(){
//     console.log(x);
//     var x = 50;
//     console.log(x);

// }
// console.log(x)
// var x = 70;
// y = 50
// console.log(x)
// console.log(y)
// showInfo();


//  var obj1 = {

//  }

//  var obj2 = new Object();
// //  var obj3 =  Object.create();

//  console.log(obj1);
//  console.log(obj2);
//  console.log(obj3);

// Callback function
// function firstFunction(parameterts, callback) {
//     callback();
// }

// firstFunction(para, function(){
//     secoundFunction(para, function(){
//         thirdFunction(para, function(){

//         })
//     })
// })

//  let myPromise = new Promise((resolve, reject){
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolve the Promise");
//     }else {
//         reject("No ! rejected the promise");
//     }
//  })

// GET
// const getJoke = async (address) => {

//     const response = await fetch(address ,{
//         method: "Get",
//         headers: {
//             "Accept": "application/json"
//         }
//         });
//         console.log(response) 
//     const jsonJokeData = await response.text();
//     console.log(jsonJokeData)
//     // const joke = jsonJokeData.joke;

//     // postToWebPage(joke);
// }
// // const postToWebPage = (data) => {
// //     console.log(data);
// // }
// getJoke('https://icanhazdadjoke.com/')

const jokeObj = {"id":"8p49pWvcxAd","joke":"Every night at 11:11, I make a wish that someone will come fix my broken clock."}




// POST

// const postData = async (address,jokeObj) => {

//     const response = await fetch(address ,{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//         });
       
//     const jsonResponse = await response.json();
//     console.log(jsonResponse)
//     // const joke = jsonJokeData.joke;

//     // postToWebPage(joke);
// }
// // const postToWebPage = (data) => {
// //     console.log(data);
// // }
// postData('https://httpbin.org/post',jokeObj)



// const postData = async (address, jokeObj) => {

//     const response = await fetch(address ,{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//         });
       
//     const jsonResponse = await response.json();
//     console.log(jsonResponse)
//     // const joke = jsonJokeData.joke;

//     // postToWebPage(joke);
// }
// // const postToWebPage = (data) => {
// //     console.log(data);
// // }
// postData('https://httpbin.org/post',jokeObj)


// Procedural WorkFlow  Function

// Get Data From Form
const getDataFromForm = () => {

    const requestObj = 'https://api.imgflip.com/get_memes'

    return requestObj;
}

const buildRequestUrl = (requestData) => {
    // return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;

    return requestData;
}

const requestJoke = async (url) => {

    const response = await fetch(url);
    const jsonResponse = await response.json();    
    const joke = jsonResponse.data;
    postJokeToPage(joke);
    
}

const postJokeToPage = (joke) => {
    console.log(joke)
}
// Procedural "workflow" function

const processJokeRequest = async () => {
    const requestData = getDataFromForm();    
    const requestUrl = buildRequestUrl(requestData);    
    await requestJoke(requestUrl);
    console.log("Finished!")
}

processJokeRequest();