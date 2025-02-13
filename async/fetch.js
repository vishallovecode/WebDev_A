


const response = fetch('https://jsonplaceholder.typicode.com/users')

// console.log('Response' , response)

function successCallback (response) {
    console.log('Fetch value' , response)  //
    response.json().then((result)=>{
        console.log(result)
    })
}

function errorCallback(error) {

}

response.then(successCallback).catch(errorCallback);

