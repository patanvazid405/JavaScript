let a = [1,2,3,4,5,6]

let b = [...a]  //shallow copy
b[1] = 12
console.log(a)
console.log(b)

//shallow copy  -> same references in nested list or Array
let c = [12,3,4,[12,5]]
let d = [...c]
c[0] =-1
c[3][0] = -2

console.log(c,d)

//deep copy - > takes different references in nested array
let cop = [12,3,4,[12,5]]
let dcopy = JSON.parse(JSON.stringify(cop))
cop[0] =-1
cop[3][0] = -2

console.log(cop)
console.log(dcopy)

