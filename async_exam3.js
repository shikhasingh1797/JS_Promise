const fetch = require('node-fetch');
async function my_data(){
    let data=await fetch("https://dummy.restapiexample.com/api/v1/employees")
    data=await data.json()
    console.log(data)


}
my_data()