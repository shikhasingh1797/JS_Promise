let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
})
data.then((item)=>{
    console.log("1st",item)
    return item*10
}).then((item)=>{
    console.log("2nd",item)
    return item*100
}).then((item)=>{
    console.log("3rd",item)
})