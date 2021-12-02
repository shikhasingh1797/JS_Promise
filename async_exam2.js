async function my_data(){
    let data=new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve ("Process done")
        },2000)
    })
    // data.then((item)=>{
    //     console.log(item)
    // })
    let x=await data;
    console.log(x)

}
my_data()