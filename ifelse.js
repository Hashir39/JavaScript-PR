const savings = 7001
if(savings>5000){
    if(savings>7000){
        console.log("RoadTrip with Rashmi")
    }
    else{
        console.log("Date with Rashmi")
    }
    
}
else if (savings>10000){
    console.log("Date with Rashmi and Neha")
}
else {
    console.log("With friends ")
}


const number = 12
if(number%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}


let n = 455;
let reverse = 0;
while(n>0){
    const lastdig = n%10
    reverse = reverse*10 + lastdig
    n = Math.floor(n / 10);
    
}
console.log(reverse)

