


//  Sort 
// Given a array of elemnent sort that in ascending order


const array = ['a', 'z' , 'y' , 'd' , 'e'];
array.sort();

console.log('Sorted Array' , array) // 



const array3 = ['A' , 'a' ,  'b' , 'c' , 'Z' , 'z']

array3.sort();

console.log('Sorted Array' , array3) // 

//  How to sort above case ? 



const numbers =  [23,200, 1000 , 500 , 56]


// ascending order
const compareFunc = (a,b) => {
    return a-b
}


//  descending order
const compareFunc2 = (a,b) => {
    return b-a
}
 
numbers.sort(compareFunc)

console.log('ASC  Sorted Numbers' , numbers)


numbers.sort(compareFunc2)

console.log('Desc Sorted Numbers' , numbers)



// find method in javascript 



const array4 = [3,4,5,6,100 , 200];

// if element%10 ===0 && element%5===0

const check = (element) => {
    return element%10===0 && element%5===0
}

const findElement = array4.find(check);

console.log('findElement' ,findElement)



const ages = [98 , 90 , 80 , 60 , 28];


function checkAge(a) {
    return a ===18
}

const validAge = ages.find(checkAge);

console.log('checkAge' , validAge)


