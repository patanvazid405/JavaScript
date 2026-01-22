//rest ->packing into a single one 
let [a,b,...c] = [1,2,3,4,5]  //rest.. -> packing 
console.log(a,b,c)


let [chintu,flashman,...bantu] = [12,4,67,3,4]
console.log(a)
console.log(b)
console.log(c)

//spread in js -> like spreading..

a = [12,3,23,1]
b = [67,8,9,3]
console.log(...a,...b)

//using objects
let  {nam,age,...other} = {nam : "chintu", other : "dabur" ,age: 3, city : "Nellore"}
console.log(nam,age,other)

//accessing using object destructing
let {na:{followers:{indian:{Andhra:{count}}}}} = {na : {followers : {indian:{Andhra :{count: 200}}}}}
console.log(count)

