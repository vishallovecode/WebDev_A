// // let phone = {
// //     "model" : '2022',
// //     "color": 'Red',
// //     "price": 56999,
// //     "isOffer":  true ,
// //     getDetails: function () {
// //         return 2
        
// //     },
// //     companyDetails : {
// //         name: 'Apple Inc.'
// //     }
// // }
// // // accessing  value using key
// // // Dot Notation 
// // console.log(phone.model)

// // // Bracket Notation

// // // console.log(phone['model'])

// // // const func = phone.getDetails  

// // // const value  = func();
// // // console.log('return value' , value)



// // const obj = {
// //     a: 12
// // }

// // console.log(obj)

// // // 
// // obj.b = 20;
// // obj.add =  ()=>{
// //     console.log('Add')
// // }

// // obj.list = [1,2,3,4]

// // obj.b =34 // this will override the earlier value of b objects does not allow duplicate keys


// // console.log(obj)




// // const obj2 = {
// //     a: {
// //         b: {
// //             c:{
// //                 d:3
// //             }
// //         }
// //     }
// // }
// // console.log(obj2.a.b.c.d) // 3

// // console.log(obj2.a.b.c.d.e) // undefined

// // console.log(obj2.a.b.c.d.e.f) // error cannot read f of undefined
// // console.log(obj2.a.b.c.d.e?.f) // here if value before ?  is undefined this will not execute code further

// // const obj3 = {
// //     a :2
// // }


// // // obj3.a = {
// // //     b:{
// // //         c:{
// // //             d:{

// // //             }
// // //         }
// // //     }
// // // }




// // const employee = {
// //     id:  12 ,
// //      emp_id: 34
// // }


// // const keyName = 'id'

// // console.log(employee.id)

// // console.log(employee.keyName)


// // console.log(employee[keyName])

// // console.log(employee['keyName'])

// // console.log(employee[id])



// const A = {
//     id : 1 , 
//     name: 'Abc'
// }

// function modifyObject(obj) {
//     obj.name = 'XYZ'
// }

// modifyObject(A);

// console.log(A);


// const D = {id : 1234}

// // Reating copy of D
// const AA = D

// AA.id = "Hello cool hai !!"

// console.log(D)  // {id : "Hello cool hai !!"}


//  I want to create copy  , but if i update the copy , it should not effect original



const RR = {employee_id : 234567};

const RRCOPY = {employee_id : 234567}
RRCOPY.employee_id = "Sab Easy ha"

console.log('Original' , RR)
console.log('Duplicate' , RRCOPY)




// 


const DD= {
    a: 1 , 
    b: {
        c:3
    }
}


const TT = {...DD};

TT.a = "hELLO "




TT.b.c = "RAM bHAROSE";

console.log(TT) 
console.log(DD)



// 

// 1. stucturedclone (This pretty new , kuch browser)
// 2. JSON.stringify and JSON.parse
// 3. Custom functions




const PP= {
    a: 1 , 
    b: {
        c:3
    }
}

const PPCOPY  = structuredClone(PP);

PPCOPY.b.c ="Cool Hai!!"



const PPCOPY3 = JSON.stringify(PP)

const PPParsed =  JSON.parse(PPCOPY3)

PPParsed.b.c= "Updated one"
console.log('Original' , PP)
console.log('New' , PPCOPY)
console.log('New2' , PPParsed)
