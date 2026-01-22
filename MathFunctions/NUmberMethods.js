//NAN
console.log(0/0)

//
let a = "123456yxvbhy"
for (let char of a){
    if (Number(char)){
         console.log(Number(char))
    }
   
}

//parseInt only gives the number as the value
console.log(parseInt(a))


//parseFloat gives the float values
let b = "12345.56vdcgsdc"
console.log(parseFloat(b))

//toFixed -> no of decimals you want after a number
let c = 123.4567
console.log(c.toFixed(2))

//toString -> coverts a num into a string

let d = 34
console.log(d.toString())
console.log(typeof(d))



