let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(9)
    },1000)
})
data.then((item)=>{
    console.log(item*item)
})