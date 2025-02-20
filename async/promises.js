// // // console.log('Creating a promises....')

// // // // here resolved and rejected are two callback functions
// // // function promiseCallback(resolved , rejected) {
// // // //
// // // }
// // // const promise1 = new Promise(promiseCallback);
// // // console.log(promise1)
// // // // Promise success or fullfilled
// // // function promiseCallback1(resolved , rejected) {
// // //     resolved()
// // // }
// // // const promise2 = new Promise(promiseCallback1);
// // // console.log('Resolved or Success' , promise2)
// // // function promiseCallback2(res , rej) {
// // //     rej()
// // //     res()
// // // }  
// // // const promise3 = new Promise(promiseCallback2);
// // // console.log('Rejected or Error' , promise3)




// // const promise4 = new Promise((res, rej)=>{
// //     const values = Math.ceil(Math.random()*10)
// //     if(values %2===0) {
// //         setTimeout(()=>{
// //             res(values)
// //         }, 2000)
// //     } else {
// //         setTimeout(()=>{
// //             rej('Odd')
// //         }, 2000) }
// // })
// // console.log(promise4) // 
// // function success(value) {
// //     console.log('success' , value)
// // }
// // function error(value){
// //     console.log('ERROR' , value)
// // }
// // promise4.then(success).catch(error).finally(()=>{
// //     console.log('Hamesh call hoga')
// // })

// // console.log('end')


// const promiseCallback =(res , rej)=>{
   
//     setTimeout(()=>{
//         res(5)
//     } , 4000)
// }

// const newPr =  new Promise(promiseCallback)

// console.log(newPr)


// // function Promise (callback) {

// //     callback(resolved  , rejected)
// // }


// newPr.then((value)=>{
//     console.log(res)
// }).catch(error => {
//     console.log(error)
// }).finally(()=>{
//     console.log('SB sahi ha')
// })

async  function getData(url){
    // fetch(url).then((res)=>{
    //     res.json().then(result =>{
    //         console.log('hello' ,result)
    //     })
    // })

 try {
    const data = await fetch(url);
    const response  = await data.json()
    console.log(response)
 } catch(error) {
    console.log(error)
 }
}

// getData('https://jsonplaceholder.typicode.com/users')


// Promise chaining 

// then  => then  (Yes)
// catch => then (Yes)
// catch => catch (No)
// Then => catch (No)

const pp = Promise.resolve(2);
pp.then(res =>{
    console.log(res) //  2
    return res*res
}).then(res2 =>{
    console.log(res2)
    return 'Hurrah'
}).then(res3 =>{
    console.log(res3)
}).catch(error =>{
    console.log('error')
})
const error  = Promise.reject(5)
// error.then(res =>{
//     console.log(res) // 
// }).catch(value =>{
//     console.log(value)
//     return 'chalega'
// }).then(res =>{
//     console.log('Then after catch' , res)
// })


error.catch(res =>{
    console.log(res)
}).finally(()=>{
    console.log('finally')
})
.catch(res =>{
    console.log('nahi chalge')
})
