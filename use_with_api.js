const fetch = require('node-fetch');
let data=fetch("https://dummy.restapiexample.com/api/v1/employees")
data.then((item)=>{  //Jab ham ek se jyada promise resolve karte hai to wo promise chaining hoti hai.
    return item.json()
}).then ((result)=>{
    console.log("Second Output",result)
})