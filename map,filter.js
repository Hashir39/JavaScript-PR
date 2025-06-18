 //map (creates a new array)
 //foreach (updates exisiting array)
let arr = [34,23,35]
const a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    console.log(value+index)
})

const b = arr.filter((a)=>{
        console.log(a>25)
        return a>25
})
console.log(b)

const c = arr.reduce((h1,h2)=>{
    return h1 + h2 
}) //reduce takes first 2 values and adds then takes next value then add
console.log(c)