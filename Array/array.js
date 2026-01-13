let array1 = [1,"vazid","nellore",23]

console.log(array1.unshift(1)) //adds at el at the first

console.log(array1.shift())  //remove the first el from the array

console.log(array1.push("MGR"))
// console.log(array1.pop("MGR"))

console.log(array1)

//array methods

let a1 = [1,2,3,4,5]
a1.shift(1)
a1.shift(2)
console.log(a1)


//splice
let fruits = ["apple", "banana", "cherry", "date"];

fruits.splice(1,2)
console.log(fruits)
fruits.splice(1,0,"watermelon")
console.log(fruits)

