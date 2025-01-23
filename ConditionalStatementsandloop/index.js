

const isKycDone = true;


if(isKycDone){
    console.log('Hey Please Order some items.')
} else  {
    console.log('Hey First complete your kyc');
}
 

//  '' . null , undefined , NaN , 0 => This all are falsy value 
// other values are truthy value


if(null) {
    console.log('hey')
}

if(3) {
    console.log('Hye')
}



//  else if ladder 


const percentage = 80;

// percentage >= 90 A+
// percentage < 90  and percentage >=80  A
// percentage < 80  and percentage >=70  B
// percentage < 70  and percentage >=60  B+
// percentage < 60  and percentage >=50  C
// percentage < 50  and percentage >=40  D
// else Failed
// &&  , &
if(percentage >=90) {
    console.log('A+')
}
else if(percentage < 90 && percentage>=80){
    console.log('A')
}   
else if(percentage < 80 && percentage>=70){
    console.log('B+')
}  
else if(percentage < 70 && percentage>=60){
    console.log('B')
}  
else if(percentage < 60 && percentage>=50){
    console.log('C')
}  
else if(percentage < 50 && percentage>=40){
    console.log('D')
}   else {
    console.log('Failed')
}

let  i =10;

if(i < 9 && i++ >  10 ) {
    console.log('heyyy')
}
console.log('first i' ,i) //  10


// if(i < 9 & i++ >  10 ) {
//     console.log('heyyy')
// }
// console.log('last i' , i) //  3


//  || => if any condition true  , it will not run next condition  condition
// | => if any condition true  , it will  run next condition  condition


//  && => if any condition false  , it will not run next condition  condition
// & => if any condition false  , it will  run next condition  condition



// Switch stamenet


// Mon => Monday 
// Tue => Tuesday
// Wed= > Wednesday
// Thu => Thursday
// Fri => Friday
// Sat => Saturday
// Sun=> Sunday
let day  = 'Mon'
switch(day) {
        case 'Mon': {
            console.log('Monday')
            break;
        }
        case 'Tue': {
            console.log('Tuesday')
            break;
        }
        case 'Wed': {
            console.log('Wednesday')
            break;
        }
        case 'Thu': {
            console.log('Thursday')
            break;
        }
        case 'Fri': {
            console.log('Friday')
            break;
        }
        case 'Sat': {
            console.log('Saturday')
            break;
        }
        case 'Sun': {
            console.log('Sunday')
            break;
        }

        default: {
            console.log('Invalid value.')
            break;
        }
}


// Ternary Operator  ? : 

// if(somecondition) {
//     run this
// } else  {
//     run this2
// }



let num  =12;

const message =  num%2 === 0 ? 'Even': 'Odd';


const message2 =(num%2 === 0  && num%5 === 0) 
                                            ? 'Divisble by 2 and 5': 
                                            (num%3===0 && num%2 ===0)
                                            ? 'Divisible by 3 and 2': 'Odd';


// loop


// for(const  i =0;i<5;i++) {
//     console.log('check' ,i);

//     if(i===0) {
//             break;
//     }
// }

let count  =0;
while(count >10) {
    console.log('Hey', count)
    count++;
}


do {
    console.log(' while Hey', count)
    count++;
} 
while(count >10)
    const array = [1,2,34,4]
    console.log(array[5]) //  undefined






let month = 1; 

switch(month)
{
    case 1:  {
        console.log('Its very cold..')
        break;
    }
    case 2:  {
        console.log('Its  normal ')
        break
    }
    case 3:  {
        console.log('its holi time')
        break
    }
     case 4: {
        console.log('Neutron')
        break
     }
     case 5: {
        console.log('End semester')
        break
     }
     case 6:{
        console.log('Summer internship')
        break
     }
     case 7: {
        console.log('Doing summer internship')
        break
     }
     case 8: {
        console.log('Juniors')
        break
     }
     case 9: {
        console.log('Helping Juniors')
        break
     }
     case 10: {
        console.log('Again mid sem')
        break
     }
     case 11 :{
        console.log('Festival vacation')
        break
     }
     case 12: {
        console.log('End semester')
        break
     }
     default: {
        console.log('Default')
     }

}




//  Ternary Operators 


// let message3 = '';
// const marks = 80;
// if(marks >80) {
//     message3 = 'Pass'
// } else {
//     message3 = 'Failed'
// }

// const marks = 80;
// let message3 =  condition ? 'if condition is true return this' : 'else condtion is false return this';


const marks = 80;
const practical  = 90
let message3 = (marks >=70 && practical >= 90) 
                                            ? 'Pass' 
                                            : (practical<90) ? 'Due to practical': 'Failed'



let check =1;

while(check >10) {
    console.log('he Check');
    check ++;
}


do {
    console.log('do while')
    check ++;
} while(check>10)