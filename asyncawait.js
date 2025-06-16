async function weater(){
    let weather1 = new Promise((res,rej)=>{
        setTimeout(() => {
            res("Weather 1 ")
        }, 1000);
    })
    let weather2 = new Promise((res,rej)=>{
        setTimeout(() => {
            res("Weather 2")
        }, 2000);
    })

    console.log("Fetching weather 1")
    let weath1 = await weather1
    console.log(weath1)
    console.log("Fetching weather 2")
    let weath2 = await weather2
    console.log(weath2)
    return [weath1,weath2]
}
let a = weater()
a.then((value)=>{
    console.log(value)
})