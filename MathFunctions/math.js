// Math.abs() -> absolute

let a = -12.7
console.log(Math.abs(a))

//max -> max value
console.log(Math.max(12,1,34))

//min -> returns min value
console.log(Math.min(12,-1,2))

//random -> random int 0-1
console.log(Math.ceil(Math.random().toFixed(2)*100) )





//map applies to all elements in the list

let list = [12,5,13,5]

let ne = list.map((e)=> e*e)
console.log(ne)

//filter

console.log([1,2,3,4,5,6].filter((e)=> e%2==0))


let hi =list.map((v)=> v*2)
console.log(hi)



//map
let aray = [12,3,4,1,3]
let newArray = aray.map((e)=> e*e)
console.log(newArray)

//filter -> based on condition
let filter = aray.filter((e)=> e%2==0)
console.log(filter)

//res 
let result = 
