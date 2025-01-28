


// //  Sort 
// // Given a array of elemnent sort that in ascending order


// const array = ['a', 'z' , 'y' , 'd' , 'e'];
// array.sort();

// console.log('Sorted Array' , array) // 



// const array3 = ['A' , 'a' ,  'b' , 'c' , 'Z' , 'z']

// array3.sort();

// console.log('Sorted Array' , array3) // 

// //  How to sort above case ? 



// const numbers =  [23,200, 1000 , 500 , 56]


// // ascending order
// const compareFunc = (a,b) => {
//     return a-b
// }


// //  descending order
// const compareFunc2 = (a,b) => {
//     return b-a
// }
 
// numbers.sort(compareFunc)

// console.log('ASC  Sorted Numbers' , numbers)


// numbers.sort(compareFunc2)

// console.log('Desc Sorted Numbers' , numbers)



// // find method in javascript 



// const array4 = [3,4,5,6,100 , 200];

// // if element%10 ===0 && element%5===0

// const check = (element) => {
//     return element%10===0 && element%5===0
// }

// const findElement = array4.find(check);

// console.log('findElement' ,findElement)



// const ages = [98 , 90 , 80 , 60 , 28];


// function checkAge(a) {
//     return a ===18
// }

// const validAge = ages.find(checkAge);

// console.log('checkAge' , validAge)





//  forEach

const array4 = [2,4,5,6,7,8];
function printData(elem , index) {
    console.log(elem) /// 
}
array4.forEach(printData)

const array5 = [2,4,5,6,7];

// evenOrOdd(2,0)
// evenOrOdd(4,1)
// evenOrOdd(5,2)
// evenOrOdd(6,3)
// evenOrOdd(7,4)

function evenOrOdd(elem  , index) {
    if(elem%2 ==0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}
array5.forEach(evenOrOdd)



//  Map 

// Given an array of element , return a new array  which  is result of square of each element


const array6 = [2,3,4,5,6,7,8];


function modifyElement(element , index) {
   return element*element
}

const res = array6.map(modifyElement);
console.log('map res ' , res)



function farenHite(array){

    return  array.map((celcius)=>{
        return (celcius*9/5)+32
    })
}



// filter all even number 



function isEven(elem , index) {
    return elem %2===0
}

const array7 = [3,4,5,6,7,8,9,1,10];

const filterRes = array7.filter(isEven)

console.log(filterRes , 'filterRes')

//  Given a array element find sum of element


const arra6 =  [2,3,4,5,6,7,8];

function sum(acc , elem , index) {
    return acc+ elem;
}


const value = arra6.reduce(sum , 0);


console.log('Value' , value)