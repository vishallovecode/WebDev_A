// let phone = {
//     "model" : '2022',
//     "color": 'Red',
//     "price": 56999,
//     "isOffer":  true ,
//     getDetails: function () {
//         return 2
        
//     },
//     companyDetails : {
//         name: 'Apple Inc.'
//     }
// }
// // accessing  value using key
// // Dot Notation 
// console.log(phone.model)

// // Bracket Notation

// console.log(phone['model'])

// const func = phone.getDetails  

// const value  = func();
// console.log('return value' , value)



const obj = {
    a: 12
}

console.log(obj)

// 
obj.b = 20;
obj.add =  ()=>{
    console.log('Add')
}

obj.list = [1,2,3,4]

obj.b =34 // this will override the earlier value of b objects does not allow duplicate keys


console.log(obj)




const obj2 = {
    a: {
        b: {
            c:{
                d:3
            }
        }
    }
}
console.log(obj2.a.b.c.d) // 3

console.log(obj2.a.b.c.d.e) // undefined

console.log(obj2.a.b.c.d.e.f) // error cannot read f of undefined
console.log(obj2.a.b.c.d.e?.f) // here if value before ?  is undefined this will not execute code further

const obj3 = {
    a :2
}


// obj3.a = {
//     b:{
//         c:{
//             d:{

//             }
//         }
//     }
// }




const employee = {
    id:  12 ,
     emp_id: 34
}


const keyName = 'id'

console.log(employee.id)

console.log(employee.keyName)


console.log(employee[keyName])

console.log(employee['keyName'])

console.log(employee[id])