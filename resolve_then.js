let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject (20)

    },1000)
})
data.then((item)=>{
    console.log("then block",item)
}).catch((item)=>{
    console.log("Catch block",item)
})