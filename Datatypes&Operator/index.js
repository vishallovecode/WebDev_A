// number  data types

let a = 20; // number

let b =20.5; // number

 let c = .05; // number

 //We can use typeof for getting the type of given variable and value;

 console.log('typeof c' , typeof c)
 console.log('typeof b' , typeof b)
 console.log('typeof a' , typeof a)

 console.log(typeof typeof 2) // string why ?? =>  typeof 2=>  'number' , typeof 'number'=> string


 // Methods of number ,  Math.min , Math.max , Math.floor , Math.ceil , Math.random  , Math.toFixed


 console.log(Math.floor(4.9999)) // 4
 console.log(Math.ceil(4.000000001)) // 5

 console.log(Math.max(1,2,3,4,510)) //  510
 console.log(Math.min(1,2,3,4,-510)) //  -510
 const percentage = 223.5555555
 console.log(percentage.toFixed(2)) // 


 // Math.random() => Generate random value between 0 and 1

 console.log(Math.random())
 console.log(Math.random())
 console.log(Math.random())
 console.log(Math.random())


 // Generate a random value between 2 and 8

//  Math.random() =>  0 
//  Math.random()+2 =>  2

//  Math.random()=> 1*6 +2 => 8


//  Math.random()*6 + 2 ; 

//   Generate random value between min and max;



// String Datatypes in Javascript



let firstName = 'Vishal'
let lastName = "Sharma"

// const msg = '
// '


// string template

const userName = "Tim tom"
const birthDayWishes = `Hi , ${userName} , 
Happy birthday to you , 
now you are not minor  you can vote.`


 // Accessing character using index

const country = "India"; // ['I' , 'n', 'd', 'i' ,'a' ]

console.log(country[0]) //  I

console.log(country[3]) //  i

console.log(country[5]) //   undefined

console.log(country.length) //  5


//  String methods , trim , includes , toString , replace , indexOf etc.

// Remove whitespaces from starting and edn
const message1 = '   Hello   ';
console.log(message1.trim()) // 'Hello'

// includes

const msg1 = 'Hello dont worry  , soon you will start loving javascript , i will make sure that.'
const substr ='you will start loving javascript';
console.log(msg1.includes(substr)) // true



const message3 = 'We is good';
console.log(message3.replace('is' , 'are'));


//  
console.log(typeof null) // 'object'
console.log(typeof undefined) // 'undefined'


console.log(1/0) // Inifinity  typeof Inifinity => number

console.log(2*'hello') // NaN typeof NaN = > number



// Arithmetic Operator 


let dd = 20;

const pp =  dd++ + 2;
const rr =  ++dd +2;

console.log(pp)
console.log(rr);


const uu = 20;


//console.log(uu++); // TypeError: Assignment to constant variable.


// == equal check the value only  and  === check the value and datatype as well


const yy = 20;
const gg = '20';


console.log(yy==gg) //  true
console.log(gg === yy) // false , here === is checking data type as well  data type of gg is  number and
// data type of yy is  string


// Not operator !

console.log(!gg) // 

console.log(!null) // true
console.log(!0) // true


