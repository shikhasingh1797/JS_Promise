// let data=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve (19)
//     },1000)
// })
// data.then((item)=>{
//     if (item%2==0){
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// })

let data=new Promise((resolve,reject)=>{
    let item=29
    if (item%2==0){
        resolve (item)
    }
    else{
        reject (item)
    }
})
data.then((item)=>{
        console.log("Even")
    }).catch((item)=>{
        console.log("Odd")
    })