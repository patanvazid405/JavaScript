// console //
console.log("hello world")

// declaration

// console.log(a)

 let a = 50  //--> global variable 

// var -> functional scope
 function hello(){
    var a  = 12   //local variable
    console.log(a)
 }
 hello()
console.log(a)

//scopes 
let b = 24
function hi(){
    var a = 10
    {
        let b = 12
        const c = 13
        console.log(a)
        console.log(b)
        console.log(c)
    }
    console.log(c)
    
}
hi()
console.log(b)



// data types


a = 123;
b = 34.5
c = true
let d ;
let e = NaN
let g = null;

console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(g))

//Non primitive data types

Array1 = [12,"vazid",true,99.6]
console.log(Array1)

object1 ={
    name : "vazid",
    age : 22,
    marks:{
        m1 : 78,
        Python : 90,
        C : 88 
    }
}
console.log(object1["marks"])
console.log(object1)
