async function weeater(){
    let weather = new Promise((res,rej)=>{
        setTimeout(() => {
            res("Weeather")
        }, 1000);
    })
    let weeather2 = new Promise((res,rej)=>{
        setTimeout(() => {
            res("Weeeather 2")
        }, 2000);
    })

    console.log("Fetching weather 1")
    let weath1 = await weeather
    console.log(weath1)
    console.log("Fetching weeather 2")
    let weath2 = await weeather2
    console.log(weath2)
    return [weath1,weath2]
}
let a = weeater()
a.then((value)=>{
    console.log(value)
})
