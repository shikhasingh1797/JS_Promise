var data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve (1234)
    },1000)
})
data.then((item)=>{
    i=0
    var a=0
    while(item>0){
        var a=(a*10)+(item%10)
        item=Math.floor(item/10)
    }
    console.log(a)
})