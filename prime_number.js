let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve (23)

    },1000)
})
data.then((item)=>{
    i=1
    c=0
    while (i<item){
        if (item%i==0){
            c=c+1
        }
        i++
    }
    if (c==1){
        console.log("Prime Number")
    }
    else{
        console.log("Not Prime Number")
    }
})