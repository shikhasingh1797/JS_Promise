let done=true
var data=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("I am Shikha Singh.")
        
    }, 2000);
})
data.then((item)=>{
    console.log("Shikha Singh")

}).catch((err)=>{
    console.log("Thakur Shikha Singh")

})