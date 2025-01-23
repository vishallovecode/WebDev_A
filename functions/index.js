// // console.log('Functions important han...')

// // function greetMessage (userName) {
// //     const message = `Hi ${userName} , its cold chaye pia kya aj ?`
// //     console.log(message)
// // }

// // // greetMessage('Ishan'); 
// // // greetMessage('Harshita'); 
// // // greetMessage('Alex'); 
// // // greetMessage('Ramesh'); 
// // // greetMessage('Shyam'); 
// // // greetMessage('Brijesh')

// // const names = ['Ishan' , 'Harshita' , 'Alex', 'Ramesh', 'Shyam', 'Brijesh'];

// // for(let  i=0;i<names.length;i++){
// //     greetMessage(names[i])
// // }

// // function multiply(a=1,b=1,c=1,d=1){
// //     // if(a && b && c && d){
// //     //     const result  = a*b*c*d;
// //     //     console.log(result)
// //     // } else if(a && b && c) {
// //     //     const result  = a*b*c;
// //     //     console.log(result)
// //     // }
// //     // else if(a&&b) {
// //     //     const result  = a*b;
// //     //     console.log(result)
// //     // } else {
// //     //     console.log(a)
// //     // }
// //     return a*b*c*d;
  
// // }


// // const res = multiply(3,4,5,2) //  120

// // const res2 = multiply(3,4,5) // 3*4*5*undefined => NaN



// // const res3 = multiply(3,4,5 , 0)  // 0

// // console.log(res , res2 , res3)



// // function sum(a,b,c) {
// //     console.log(a*b*c)
// // }


// // const res4 = sum(1,2,3);
// // console.log('Res4',res4)

 

// const sum = (a,b) => {
//     return a+b
// }

// console.log(sum(2,3))


// const addition = (a,b)=> a+b;

// console.log(addition(2,3))

// function plus(a,b) {
//     return a+b
// }
// console.log(plus(2,3))



// // if only one parameter

// // const isEven = (a) =>  a%2 ==0;

// // const isEven = (a) =>   {
// //    return  a%2 ==0;
// // }


// // function isEven(a)   {
// //     return  a%2 ==0;
// //  }
 

//  // if ony one parameter


//  const iseEven = a => a%2===0;






// //  Higher Order functions and callback functions 




// const mul  = (a,b) => {
//     console.log(a,b)
// }


// mul(3,4)


// const Order = (callback)=> {
//    // 
//     callback() // becase here we are callin a functions means this value should be functions
// }


// const Print = ()=> {
//     console.log('hey i AM FINE..')
// }

// Order(Print);


// const Operations = (type , a,b , additionCallback , subtractionCallback , multiplyCallback) => {
//     if(type === 'Addition') {
//       // addition
//      const value =  additionCallback(a,b)
//      console.log('Addition' , value)
//     } else if(type === 'Subtraction') {
//         // subtraction
//         subtractionCallback(a,b)
//         console.log('Subtraction' , value)

//     } else {
//         // Multiply
//         multiplyCallback(a,b)
//         console.log('Multiply' , value)

//     }
// }

// const add = (a,b)=>a+b
// const sub = (a,b)=>a-b
// const multiply = (a,b)=>a*b

// Operations('Addition' , 5,6 , add ,sub ,multiply)






// // if functions is returning another functions is also called higher order functions


// const HOF2 = ()=>{
//     const func = ()=>{
//         console.log('Rajaji')
//     }
//     return func;
// }


// const func2 =HOF2();


//////////// Spread Operator and Rest Operator(...) //////////////////////

const A = [1,2,3,4,5,6,7]

console.log(...A);

// Find the maximum value in given array 

const P = [40 , 50 , 20 , 30 , 100 , 29];

const max = Math.max(...P) //  Math.max(40 , 50 , 20 , 30 , 100 , 29)
console.log('Maximum value' , max)

const Add = (a,b , ...args) => {
    let sum = a+b;
    for(let i=0;i<args.length;i++) {
        sum = sum + args[i]
    }
    return sum;
}


const value = Add(1,2,3,4,5,6,7,8,9,12,1);

console.log('Sum' , value)


//  Given a array of length N , find the sum of given array  ,
//  use spread and rest operator for same


const studentsMarks = [90 , 70 , 80 , 30 , 45, 67]; 
Add(...studentsMarks)  //  Add(90 , 70 , 80 , 30 , 45, 67) // spread 






